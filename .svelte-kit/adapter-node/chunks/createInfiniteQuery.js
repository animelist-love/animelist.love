import { parseQueryArgs, InfiniteQueryObserver } from "@tanstack/query-core";
import { a as createBaseQuery } from "./index4.js";
function createInfiniteQuery(arg1, arg2, arg3) {
  const options = parseQueryArgs(arg1, arg2, arg3);
  return createBaseQuery(options, InfiniteQueryObserver);
}
export {
  createInfiniteQuery as c
};
