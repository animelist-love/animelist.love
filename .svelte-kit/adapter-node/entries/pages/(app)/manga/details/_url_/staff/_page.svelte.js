import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../../../../chunks/index2.js";
import { i as isLoading, a as isSuccess, b as staff } from "../../../../../../../chunks/DetailPageStore.js";
import { S as Staff } from "../../../../../../../chunks/Staff.js";
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
export {
  Page as default
};
