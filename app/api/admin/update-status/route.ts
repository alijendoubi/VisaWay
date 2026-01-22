import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { assertSupabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { type, id, status } = body as { type: "lead" | "booking"; id: string; status: string };

    const supabaseAdmin = assertSupabase();
    if (type === "lead") {
      await supabaseAdmin.from("leads").update({ status }).eq("id", id);
    } else {
      await supabaseAdmin
        .from("bookings")
        .update({ status, status_updated_at: new Date().toISOString() })
        .eq("id", id);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
