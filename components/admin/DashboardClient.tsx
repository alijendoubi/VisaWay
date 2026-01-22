"use client";

import { useMemo, useState } from "react";
import { StatusUpdater } from "@/components/admin/StatusUpdater";

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  visa_type: string;
  status: string;
  created_at: string;
};

type Booking = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  visa_type: string;
  destination: string;
  preferred_date: string;
  preferred_time: string;
  status: string;
  created_at: string;
};

export const DashboardClient = ({ leads, bookings }: { leads: Lead[]; bookings: Booking[] }) => {
  const [leadQuery, setLeadQuery] = useState("");
  const [leadStatus, setLeadStatus] = useState("all");
  const [bookingQuery, setBookingQuery] = useState("");
  const [bookingStatus, setBookingStatus] = useState("all");

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesQuery =
        !leadQuery ||
        lead.name.toLowerCase().includes(leadQuery) ||
        lead.email.toLowerCase().includes(leadQuery) ||
        lead.visa_type.toLowerCase().includes(leadQuery);
      const matchesStatus = leadStatus === "all" || lead.status === leadStatus;
      return matchesQuery && matchesStatus;
    });
  }, [leads, leadQuery, leadStatus]);

  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) => {
      const matchesQuery =
        !bookingQuery ||
        booking.name.toLowerCase().includes(bookingQuery) ||
        booking.email.toLowerCase().includes(bookingQuery) ||
        booking.destination.toLowerCase().includes(bookingQuery);
      const matchesStatus = bookingStatus === "all" || booking.status === bookingStatus;
      return matchesQuery && matchesStatus;
    });
  }, [bookings, bookingQuery, bookingStatus]);

  const exportCsv = (type: "leads" | "bookings") => {
    window.location.href = `/api/admin/export?type=${type}`;
  };

  return (
    <div className="mt-8 grid gap-8">
      <section className="glass rounded-2xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-ink">Leads</h2>
          <div className="flex flex-wrap gap-3">
            <input
              value={leadQuery}
              onChange={(event) => setLeadQuery(event.target.value.toLowerCase())}
              placeholder="Search by name, email, visa"
              className="rounded-full border border-ink/10 px-4 py-2 text-sm"
            />
            <select
              value={leadStatus}
              onChange={(event) => setLeadStatus(event.target.value)}
              className="rounded-full border border-ink/10 px-3 py-2 text-sm"
            >
              <option value="all">All statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="closed">Closed</option>
            </select>
            <button
              onClick={() => exportCsv("leads")}
              className="rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold"
            >
              Export CSV
            </button>
          </div>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase text-ink/50">
              <tr>
                <th className="py-2">Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Visa</th>
                <th>Status</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="border-t border-ink/5">
                  <td className="py-2 font-medium text-ink">{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.phone || "-"}</td>
                  <td>{lead.visa_type}</td>
                  <td>
                    <StatusUpdater id={lead.id} type="lead" initialStatus={lead.status} />
                  </td>
                  <td>{new Date(lead.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="glass rounded-2xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-ink">Bookings</h2>
          <div className="flex flex-wrap gap-3">
            <input
              value={bookingQuery}
              onChange={(event) => setBookingQuery(event.target.value.toLowerCase())}
              placeholder="Search by name, email, destination"
              className="rounded-full border border-ink/10 px-4 py-2 text-sm"
            />
            <select
              value={bookingStatus}
              onChange={(event) => setBookingStatus(event.target.value)}
              className="rounded-full border border-ink/10 px-3 py-2 text-sm"
            >
              <option value="all">All statuses</option>
              <option value="pending">Pending</option>
              <option value="scheduled">Scheduled</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <button
              onClick={() => exportCsv("bookings")}
              className="rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold"
            >
              Export CSV
            </button>
          </div>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-xs uppercase text-ink/50">
              <tr>
                <th className="py-2">Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Visa</th>
                <th>Destination</th>
                <th>Preferred</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="border-t border-ink/5">
                  <td className="py-2 font-medium text-ink">{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.phone || "-"}</td>
                  <td>{booking.visa_type}</td>
                  <td>{booking.destination}</td>
                  <td>
                    {booking.preferred_date} · {booking.preferred_time}
                  </td>
                  <td>
                    <StatusUpdater id={booking.id} type="booking" initialStatus={booking.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
