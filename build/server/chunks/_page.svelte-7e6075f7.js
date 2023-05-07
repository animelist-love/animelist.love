import { c as create_ssr_component, b as subscribe, v as validate_component } from './index2-5765a0e9.js';
import { i as isLoading, a as isSuccess, r as relations } from './DetailPageStore-07c2e837.js';
import { R as Relations } from './Relations-4a32c9cd.js';
import './index-35f824f0.js';
import './useCreateLink-920e2d92.js';
import './CardVertical-1f545b80.js';
import './Image-813c3f07.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoading, $$unsubscribe_isLoading;
  let $isSuccess, $$unsubscribe_isSuccess;
  let $relations, $$unsubscribe_relations;
  $$unsubscribe_isLoading = subscribe(isLoading, (value) => $isLoading = value);
  $$unsubscribe_isSuccess = subscribe(isSuccess, (value) => $isSuccess = value);
  $$unsubscribe_relations = subscribe(relations, (value) => $relations = value);
  $$unsubscribe_isLoading();
  $$unsubscribe_isSuccess();
  $$unsubscribe_relations();
  return `
${validate_component(Relations, "Relations").$$render(
    $$result,
    {
      isLoading: $isLoading,
      isSuccess: $isSuccess,
      source: $relations
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7e6075f7.js.map
