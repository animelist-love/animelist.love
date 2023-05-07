import { c as createBaseQuery, Q as QueryObserver } from './index4-37fe8b6c.js';
import { k as parseQueryArgs } from './notifyManager-630cc085.js';

function createQuery(arg1, arg2, arg3) {
  const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
  const result = createBaseQuery(parsedOptions, QueryObserver);
  return result;
}

export { createQuery as c };
//# sourceMappingURL=createQuery-c8e9701b.js.map
