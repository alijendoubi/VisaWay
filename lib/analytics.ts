export const track = async (event: string, payload?: Record<string, string | number | boolean>) => {
  if (typeof window === "undefined") return;
  try {
    await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: event,
        payload: payload || {},
        path: window.location.pathname,
        locale: document.documentElement.lang || "en"
      })
    });
  } catch {
    // Silent fail for analytics.
  }
};
