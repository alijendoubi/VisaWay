import { NextResponse } from "next/server";
import { assertSupabase } from "@/lib/supabase";
import { getCalendarEvent } from "@/lib/googleCalendar";

export async function POST(request: Request) {
  try {
    const url = new URL(request.url);
    const eventId = url.searchParams.get("eventId");
    const payload = await request.json().catch(() => ({}));

    const supabaseAdmin = assertSupabase();
    await supabaseAdmin.from("webhook_events").insert({
      provider: "google_calendar",
      external_id: eventId || payload?.id || null,
      payload
    });

    if (!eventId) {
      return NextResponse.json({ ok: true, message: "Webhook received" });
    }

    const event = await getCalendarEvent(eventId);
    const bookingId = event.extendedProperties?.private?.bookingId;

    if (bookingId) {
      await supabaseAdmin
        .from("bookings")
        .update({
          calendar_status: event.status,
          status: event.status === "cancelled" ? "cancelled" : "scheduled",
          status_updated_at: new Date().toISOString(),
          event_url: event.htmlLink
        })
        .eq("id", bookingId);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
