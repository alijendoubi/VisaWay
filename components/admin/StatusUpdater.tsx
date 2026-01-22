"use client";

import { useState } from "react";

export const StatusUpdater = ({
  id,
  type,
  initialStatus
}: {
  id: string;
  type: "lead" | "booking";
  initialStatus: string;
}) => {
  const [status, setStatus] = useState(initialStatus);
  const [loading, setLoading] = useState(false);

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextStatus = event.target.value;
    setStatus(nextStatus);
    setLoading(true);
    await fetch("/api/admin/update-status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, id, status: nextStatus })
    });
    setLoading(false);
  };

  return (
    <select
      className="rounded-full border border-ink/10 px-3 py-1 text-xs font-semibold text-ink/70"
      value={status}
      onChange={handleChange}
      aria-label="Update status"
      disabled={loading}
    >
      {type === "lead" && (
        <>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="qualified">Qualified</option>
          <option value="closed">Closed</option>
        </>
      )}
      {type === "booking" && (
        <>
          <option value="pending">Pending</option>
          <option value="scheduled">Scheduled</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </>
      )}
    </select>
  );
};
