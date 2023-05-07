import { c as create_ssr_component, b as subscribe, v as validate_component } from './index2-5765a0e9.js';
import { i as isLoading, a as isSuccess, c as characters } from './DetailPageStore-07c2e837.js';
import { C as Characters } from './Characters-4ded6db3.js';
import './index-35f824f0.js';
import './useCreateLink-920e2d92.js';
import './CardVerticalBase-c7b64a4f.js';
import './Image-813c3f07.js';

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

export { Page as default };
//# sourceMappingURL=_page.svelte-cf77ed09.js.map
