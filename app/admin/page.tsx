import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { assertSupabase } from "@/lib/supabase";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/admin/login");
  }

  const supabaseAdmin = assertSupabase();
  const { data: leads } = await supabaseAdmin
    .from("leads")
    .select("id,name,email,visa_type,status,created_at")
    .order("created_at", { ascending: false })
    .limit(20);

  const { data: bookings } = await supabaseAdmin
    .from("bookings")
    .select("id,name,email,visa_type,destination,preferred_date,preferred_time,status,created_at")
    .order("created_at", { ascending: false })
    .limit(20);

  return (
    <div className="section-padding pb-20 pt-12">
      <h1 className="text-3xl font-semibold text-ink">Admin Dashboard</h1>
      <p className="mt-2 text-sm text-ink/70">Latest leads and bookings.</p>

      <div className="mt-8 grid gap-8">
        <section className="glass rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-ink">Leads</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-xs uppercase text-ink/50">
                <tr>
                  <th className="py-2">Name</th>
                  <th>Email</th>
                  <th>Visa</th>
                  <th>Status</th>
                  <th>Created</th>
                </tr>
              </thead>
              <tbody>
                {leads?.map((lead) => (
                  <tr key={lead.id} className="border-t border-ink/5">
                    <td className="py-2 font-medium text-ink">{lead.name}</td>
                    <td>{lead.email}</td>
                    <td>{lead.visa_type}</td>
                    <td>{lead.status}</td>
                    <td>{new Date(lead.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="glass rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-ink">Bookings</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-xs uppercase text-ink/50">
                <tr>
                  <th className="py-2">Name</th>
                  <th>Email</th>
                  <th>Visa</th>
                  <th>Destination</th>
                  <th>Preferred</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings?.map((booking) => (
                  <tr key={booking.id} className="border-t border-ink/5">
                    <td className="py-2 font-medium text-ink">{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.visa_type}</td>
                    <td>{booking.destination}</td>
                    <td>
                      {booking.preferred_date} · {booking.preferred_time}
                    </td>
                    <td>{booking.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
