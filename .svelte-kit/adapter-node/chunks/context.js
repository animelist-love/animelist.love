import { s as setContext, h as getContext } from "./index2.js";
const _contextKey = "$$_queryClient";
const getQueryClientContext = () => {
  const client = getContext(_contextKey);
  if (!client) {
    throw new Error("No QueryClient was found in Svelte context. Did you forget to wrap your component with QueryClientProvider?");
  }
  return client;
};
const setQueryClientContext = (client) => {
  setContext(_contextKey, client);
};
export {
  getQueryClientContext as g,
  setQueryClientContext as s
};
