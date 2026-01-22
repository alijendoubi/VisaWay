import { NextResponse } from "next/server";
import { assertSupabase } from "@/lib/supabase";
import { leadSchema } from "@/lib/validation";
import { sendTemplateEmail } from "@/lib/email";

const buildEmailPayload = (name: string) => ({
  firstName: name.split(" ")[0] || name,
  supportEmail: "contact@visaway.live"
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = leadSchema.parse(body);

    const supabaseAdmin = assertSupabase();
    const { data: lead, error } = await supabaseAdmin
      .from("leads")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        visa_type: data.visaType,
        destination: data.destination,
        message: data.message,
        status: "new",
        locale: data.locale,
        source: data.source
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    await supabaseAdmin.from("email_events").insert([
      {
        lead_id: lead.id,
        type: "confirmation",
        scheduled_at: new Date().toISOString()
      },
      {
        lead_id: lead.id,
        type: "reminder",
        scheduled_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      },
      {
        lead_id: lead.id,
        type: "followup",
        scheduled_at: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
      }
    ]);

    await sendTemplateEmail({
      to: data.email,
      template: "confirmation",
      data: buildEmailPayload(data.name)
    });

    await supabaseAdmin.from("email_logs").insert({
      recipient: data.email,
      template: "confirmation",
      status: "sent"
    });

    await supabaseAdmin
      .from("email_events")
      .update({ sent_at: new Date().toISOString(), status: "sent", last_attempt_at: new Date().toISOString() })
      .match({ lead_id: lead.id, type: "confirmation" });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
