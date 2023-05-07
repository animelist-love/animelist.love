import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../../../../chunks/index2.js";
import { i as isLoading, a as isSuccess, c as characters } from "../../../../../../../chunks/DetailPageStore.js";
import { C as Characters } from "../../../../../../../chunks/Characters.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoading, $$unsubscribe_isLoading;
  let $isSuccess, $$unsubscribe_isSuccess;
  let $characters, $$unsubscribe_characters;
  $$unsubscribe_isLoading = subscribe(isLoading, (value) => $isLoading = value);
  $$unsubscribe_isSuccess = subscribe(isSuccess, (value) => $isSuccess = value);
  $$unsubscribe_characters = subscribe(characters, (value) => $characters = value);
  $$unsubscribe_isLoading();
  $$unsubscribe_isSuccess();
  $$unsubscribe_characters();
  return `
${validate_component(Characters, "Characters").$$render(
    $$result,
    {
      isLoading: $isLoading,
      isSuccess: $isSuccess,
      source: $characters
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
