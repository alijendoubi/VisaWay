import { NextResponse } from "next/server";
import { assertSupabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const supabaseAdmin = assertSupabase();
    await supabaseAdmin.from("analytics_events").insert({
      name: body.name,
      payload: body.payload || {},
      path: body.path,
      locale: body.locale
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
