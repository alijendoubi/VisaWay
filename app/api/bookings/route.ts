import { NextResponse } from "next/server";
import { assertSupabase } from "@/lib/supabase";
import { bookingSchema } from "@/lib/validation";
import { sendTemplateEmail } from "@/lib/email";
import { createCalendarEvent } from "@/lib/googleCalendar";

const buildEmailPayload = (name: string, date: string, time: string) => ({
  firstName: name.split(" ")[0] || name,
  scheduledDate: date,
  scheduledTime: time,
  supportEmail: "contact@visaway.live"
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = bookingSchema.parse(body);

    const start = new Date(`${data.preferredDate}T${data.preferredTime}:00${data.timezone}`);
    const end = new Date(start.getTime() + 30 * 60 * 1000);

    const supabaseAdmin = assertSupabase();
    const { data: booking, error } = await supabaseAdmin
      .from("bookings")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        visa_type: data.visaType,
        destination: data.destination,
        preferred_date: data.preferredDate,
        preferred_time: data.preferredTime,
        timezone: data.timezone,
        notes: data.notes,
        status: "pending",
        status_updated_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const event = await createCalendarEvent({
      summary: `VisaWay consultation (${data.visaType})`,
      description: data.notes || "VisaWay consultation",
      start: start.toISOString(),
      end: end.toISOString(),
      attendeeEmail: data.email,
      bookingId: booking.id
    });

    await supabaseAdmin
      .from("bookings")
      .update({
        google_event_id: event.id,
        event_url: event.htmlLink,
        calendar_status: event.status,
        status: "scheduled",
        status_updated_at: new Date().toISOString()
      })
      .eq("id", booking.id);

    await supabaseAdmin.from("email_events").insert([
      {
        booking_id: booking.id,
        type: "confirmation",
        scheduled_at: new Date().toISOString()
      },
      {
        booking_id: booking.id,
        type: "reminder",
        scheduled_at: new Date(start.getTime() - 2 * 60 * 60 * 1000).toISOString()
      },
      {
        booking_id: booking.id,
        type: "followup",
        scheduled_at: new Date(start.getTime() + 24 * 60 * 60 * 1000).toISOString()
      }
    ]);

    await sendTemplateEmail({
      to: data.email,
      template: "confirmation",
      data: buildEmailPayload(data.name, data.preferredDate, data.preferredTime)
    });

    await supabaseAdmin.from("email_logs").insert({
      recipient: data.email,
      template: "confirmation",
      status: "sent"
    });

    await supabaseAdmin
      .from("email_events")
      .update({ sent_at: new Date().toISOString(), status: "sent", last_attempt_at: new Date().toISOString() })
      .match({ booking_id: booking.id, type: "confirmation" });

    return NextResponse.json({ ok: true, bookingId: booking.id, eventUrl: event.htmlLink });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
