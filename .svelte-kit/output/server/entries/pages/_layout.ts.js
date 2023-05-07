import { B as BROWSER } from "../../chunks/prod-ssr.js";
import { QueryClient } from "@tanstack/query-core";
const browser = BROWSER;
const load = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1e3 * 60 * 1e3,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retryDelay: 2e3,
        enabled: browser
      }
    }
  });
  return { queryClient };
};
export {
  load
};
