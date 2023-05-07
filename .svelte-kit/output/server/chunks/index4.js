import { notifyManager } from "@tanstack/query-core";
import { g as getQueryClientContext } from "./context.js";
import { r as readable, d as derived } from "./index.js";
function useQueryClient() {
  const queryClient = getQueryClientContext();
  return queryClient;
}
function createBaseQuery(options, Observer) {
  const queryClient = useQueryClient();
  const defaultedOptions = queryClient.defaultQueryOptions(options);
  defaultedOptions._optimisticResults = "optimistic";
  let observer = new Observer(queryClient, defaultedOptions);
  if (defaultedOptions.onError) {
    defaultedOptions.onError = notifyManager.batchCalls(defaultedOptions.onError);
  }
  if (defaultedOptions.onSuccess) {
    defaultedOptions.onSuccess = notifyManager.batchCalls(defaultedOptions.onSuccess);
  }
  if (defaultedOptions.onSettled) {
    defaultedOptions.onSettled = notifyManager.batchCalls(defaultedOptions.onSettled);
  }
  readable(observer).subscribe(($observer) => {
    observer = $observer;
    observer.setOptions(defaultedOptions, { listeners: false });
  });
  const result = readable(observer.getCurrentResult(), (set) => {
    return observer.subscribe(notifyManager.batchCalls(set));
  });
  const { subscribe } = derived(result, ($result) => {
    $result = observer.getOptimisticResult(defaultedOptions);
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult($result) : $result;
  });
  return { subscribe };
}
const fetchPOST = async (url, body, options = {}) => {
  const defaultOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
  const response = await fetch(url, { ...defaultOptions, ...options });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
};
const convertToUrl = (postName) => postName.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
const getID = (url) => parseInt(url?.slice(url?.lastIndexOf("an") + 2));
const spaceToAdd = (string) => string.replaceAll(" ", "+");
export {
  createBaseQuery as a,
  convertToUrl as c,
  fetchPOST as f,
  getID as g,
  spaceToAdd as s,
  useQueryClient as u
};
