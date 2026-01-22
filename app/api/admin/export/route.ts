import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { assertSupabase } from "@/lib/supabase";

const escapeCsv = (value: string | number | null | undefined) => {
  const safe = String(value ?? "");
  if (safe.includes(",") || safe.includes("\n") || safe.includes('"')) {
    return `"${safe.replace(/"/g, '""')}"`;
  }
  return safe;
};

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const supabaseAdmin = assertSupabase();

  if (type === "leads") {
    const { data } = await supabaseAdmin
      .from("leads")
      .select("created_at,name,email,phone,visa_type,destination,status,locale,source")
      .order("created_at", { ascending: false });

    const rows = [
      ["created_at", "name", "email", "phone", "visa_type", "destination", "status", "locale", "source"],
      ...(data || []).map((lead) => [
        lead.created_at,
        lead.name,
        lead.email,
        lead.phone,
        lead.visa_type,
        lead.destination,
        lead.status,
        lead.locale,
        lead.source
      ])
    ];

    const csv = rows.map((row) => row.map(escapeCsv).join(",")).join("\n");
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=visaway-leads.csv"
      }
    });
  }

  if (type === "bookings") {
    const { data } = await supabaseAdmin
      .from("bookings")
      .select(
        "created_at,name,email,phone,visa_type,destination,preferred_date,preferred_time,timezone,status,calendar_status,event_url"
      )
      .order("created_at", { ascending: false });

    const rows = [
      [
        "created_at",
        "name",
        "email",
        "phone",
        "visa_type",
        "destination",
        "preferred_date",
        "preferred_time",
        "timezone",
        "status",
        "calendar_status",
        "event_url"
      ],
      ...(data || []).map((booking) => [
        booking.created_at,
        booking.name,
        booking.email,
        booking.phone,
        booking.visa_type,
        booking.destination,
        booking.preferred_date,
        booking.preferred_time,
        booking.timezone,
        booking.status,
        booking.calendar_status,
        booking.event_url
      ])
    ];

    const csv = rows.map((row) => row.map(escapeCsv).join(",")).join("\n");
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=visaway-bookings.csv"
      }
    });
  }

  return NextResponse.json({ error: "Invalid export type" }, { status: 400 });
}
