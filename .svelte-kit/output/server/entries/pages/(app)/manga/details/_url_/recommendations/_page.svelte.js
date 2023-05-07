import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../../../../chunks/index2.js";
import { i as isLoading, a as isSuccess, d as recommendations } from "../../../../../../../chunks/DetailPageStore.js";
import { R as Recommendations } from "../../../../../../../chunks/Recommendations.js";
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
export {
  Page as default
};
