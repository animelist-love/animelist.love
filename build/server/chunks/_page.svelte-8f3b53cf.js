import { c as create_ssr_component, b as subscribe, v as validate_component } from './index2-5765a0e9.js';
import { i as isLoading, a as isSuccess, b as staff } from './DetailPageStore-07c2e837.js';
import { S as Staff } from './Staff-71839af6.js';
import './index-35f824f0.js';
import './useCreateLink-920e2d92.js';
import './CardVerticalBase-c7b64a4f.js';
import './Image-813c3f07.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoading, $$unsubscribe_isLoading;
  let $isSuccess, $$unsubscribe_isSuccess;
  let $staff, $$unsubscribe_staff;
  $$unsubscribe_isLoading = subscribe(isLoading, (value) => $isLoading = value);
  $$unsubscribe_isSuccess = subscribe(isSuccess, (value) => $isSuccess = value);
  $$unsubscribe_staff = subscribe(staff, (value) => $staff = value);
  $$unsubscribe_isLoading();
  $$unsubscribe_isSuccess();
  $$unsubscribe_staff();
  return `
${validate_component(Staff, "Staff").$$render(
    $$result,
    {
      isLoading: $isLoading,
      isSuccess: $isSuccess,
      source: $staff
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8f3b53cf.js.map
