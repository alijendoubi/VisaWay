import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { assertSupabase } from "@/lib/supabase";
import { DashboardClient } from "@/components/admin/DashboardClient";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/admin/login");
  }

  const supabaseAdmin = assertSupabase();
  const { data: leads } = await supabaseAdmin
    .from("leads")
    .select("id,name,email,visa_type,phone,locale,status,created_at")
    .order("created_at", { ascending: false })
    .limit(20);

  const { data: bookings } = await supabaseAdmin
    .from("bookings")
    .select("id,name,email,phone,visa_type,destination,preferred_date,preferred_time,status,created_at")
    .order("created_at", { ascending: false })
    .limit(20);

  return (
    <div className="section-padding pb-20 pt-12">
      <h1 className="text-3xl font-semibold text-ink">Admin Dashboard</h1>
      <p className="mt-2 text-sm text-ink/70">Latest leads and bookings.</p>
      <DashboardClient leads={leads ?? []} bookings={bookings ?? []} />
    </div>
  );
}
