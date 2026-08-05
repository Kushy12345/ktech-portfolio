import { createServerFn } from "@tanstack/react-start";
import { runSeoChecks } from "@/lib/seo-checks";

export const getSeoChecks = createServerFn({ method: "GET" }).handler(async () => {
  const { getRequestUrl } = await import("@tanstack/react-start/server");
  const requestUrl = getRequestUrl();
  const baseUrl = `${requestUrl.protocol}//${requestUrl.host}`;
  return runSeoChecks(baseUrl);
});
