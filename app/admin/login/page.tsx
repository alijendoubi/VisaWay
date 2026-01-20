"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid credentials.");
      return;
    }

    router.push("/admin");
  };

  return (
    <div className="section-padding flex min-h-[70vh] items-center justify-center py-16">
      <form onSubmit={handleSubmit} className="glass w-full max-w-md space-y-4 rounded-2xl p-6">
        <h1 className="text-2xl font-semibold text-ink">Admin login</h1>
        <input
          name="email"
          type="email"
          className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
          placeholder="Email"
          required
        />
        <input
          name="password"
          type="password"
          className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus-visible:focus-ring"
          placeholder="Password"
          required
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Button type="submit" ariaLabel="Sign in" className="w-full" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </div>
  );
}
