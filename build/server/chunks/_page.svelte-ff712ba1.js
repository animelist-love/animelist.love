import { c as create_ssr_component, b as subscribe, v as validate_component } from './index2-5765a0e9.js';
import { i as isLoading, a as isSuccess, d as recommendations } from './DetailPageStore-07c2e837.js';
import { R as Recommendations } from './Recommendations-80d2e442.js';
import './index-35f824f0.js';
import './useCreateLink-920e2d92.js';
import './CardVertical-1f545b80.js';
import './Image-813c3f07.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoading, $$unsubscribe_isLoading;
  let $isSuccess, $$unsubscribe_isSuccess;
  let $recommendations, $$unsubscribe_recommendations;
  $$unsubscribe_isLoading = subscribe(isLoading, (value) => $isLoading = value);
  $$unsubscribe_isSuccess = subscribe(isSuccess, (value) => $isSuccess = value);
  $$unsubscribe_recommendations = subscribe(recommendations, (value) => $recommendations = value);
  $$unsubscribe_isLoading();
  $$unsubscribe_isSuccess();
  $$unsubscribe_recommendations();
  return `
${validate_component(Recommendations, "Recommendations").$$render(
    $$result,
    {
      isLoading: $isLoading,
      isSuccess: $isSuccess,
      source: $recommendations
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ff712ba1.js.map
