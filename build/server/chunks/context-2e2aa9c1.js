import { s as setContext, g as getContext } from './index2-5765a0e9.js';

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

export { getQueryClientContext as g, setQueryClientContext as s };
//# sourceMappingURL=context-2e2aa9c1.js.map
