// @ts-nocheck
// Import Types
import type { LayoutServerLoad } from "./$types";

// Import Libs
import detectBotSeach from "@/utils/detectBotSeach";

export const load = ({ request }: Parameters<LayoutServerLoad>[0]) => {
  const headers = request.headers.get("user-agent");
  const isBotSearch = detectBotSeach(headers);
  console.log("isBotSearch", isBotSearch);
  return { isBotSearch };
};
