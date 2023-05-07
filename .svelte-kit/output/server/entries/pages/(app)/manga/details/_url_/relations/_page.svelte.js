import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../../../../chunks/index2.js";
import { i as isLoading, a as isSuccess, r as relations } from "../../../../../../../chunks/DetailPageStore.js";
import { R as Relations } from "../../../../../../../chunks/Relations.js";
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
export {
  Page as default
};
