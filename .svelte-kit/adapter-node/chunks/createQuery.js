import { parseQueryArgs, QueryObserver } from "@tanstack/query-core";
import { a as createBaseQuery } from "./index4.js";
function createQuery(arg1, arg2, arg3) {
  const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
  const result = createBaseQuery(parsedOptions, QueryObserver);
  return result;
}
export {
  createQuery as c
};
