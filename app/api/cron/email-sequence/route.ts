import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { sendTemplateEmail } from "@/lib/email";

const supportEmail = "hello@visaway.com";

export async function POST() {
  const now = new Date().toISOString();

  const { data: events, error } = await supabaseAdmin
    .from("email_events")
    .select("id,type,scheduled_at,lead_id,booking_id,leads(name,email),bookings(name,email,preferred_date,preferred_time)")
    .eq("status", "pending")
    .lte("scheduled_at", now);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  for (const event of events || []) {
    const lead = (event as any).leads;
    const booking = (event as any).bookings;
    const target = lead || booking;
    if (!target?.email || !target?.name) continue;

    const payload = {
      firstName: target.name.split(" ")[0] || target.name,
      scheduledDate: booking?.preferred_date || "",
      scheduledTime: booking?.preferred_time || "",
      supportEmail
    };

    await sendTemplateEmail({
      to: target.email,
      template: event.type,
      data: payload
    });

    await supabaseAdmin
      .from("email_events")
      .update({ status: "sent", sent_at: new Date().toISOString() })
      .eq("id", event.id);
  }

  return NextResponse.json({ ok: true, processed: events?.length ?? 0 });
}
