export const track = (event: string, payload?: Record<string, string | number | boolean>) => {
  if (typeof window === "undefined") return;
  if (!window) return;
  console.info(`[track] ${event}`, payload || {});
};
