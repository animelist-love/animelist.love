import { c as create_ssr_component, f as each, v as validate_component } from './index2-5765a0e9.js';
import { u as useCreateLink } from './useCreateLink-920e2d92.js';
import { C as CardVertical } from './CardVertical-1f545b80.js';

const Recommendations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isLoading = true } = $$props;
  let { isSuccess = false } = $$props;
  let { source = null } = $$props;
  let sourceClearNulled = null;
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  if ($$props.isSuccess === void 0 && $$bindings.isSuccess && isSuccess !== void 0)
    $$bindings.isSuccess(isSuccess);
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  {
    if (!!source)
      sourceClearNulled = source.filter((node) => node.mediaRecommendation);
  }
  return `<div class="w-full flex flex-col space-y-3 py-2 rounded-lg">${isLoading ? `<div class="w-full grid grid-cols-12 gap-x-1.5 sm:gap-x-2.5 gap-y-0 md:grid-cols-4 md:gap-2 lg:md:gap-3 xl:grid-cols-5 2xl:gap-4 animate-pulse">${each(Array(6), (noUse) => {
    return `<div class="col-span-4 md:col-span-1 2xl:col-span-1">${validate_component(CardVertical, "CardVertical").$$render($$result, {}, {}, {})}
        </div>`;
  })}</div>` : `${isSuccess && !!sourceClearNulled ? `<div class="w-full grid grid-cols-12 gap-x-1.5 sm:gap-x-2.5 gap-y-0 md:grid-cols-4 md:gap-2 lg:md:gap-3 xl:grid-cols-5 2xl:gap-4">${each(sourceClearNulled, (node) => {
    return `<div class="col-span-4 md:col-span-1 2xl:col-span-1">${validate_component(CardVertical, "CardVertical").$$render(
      $$result,
      {
        isLoading: false,
        source: node.mediaRecommendation,
        to: useCreateLink([
          "/",
          {
            value: node?.mediaRecommendation?.type || "",
            convert: "lowcase"
          },
          "/details/",
          {
            value: node?.mediaRecommendation?.title?.userPreferred || "",
            convert: "lowcase"
          },
          "-an",
          node?.mediaRecommendation?.id || 0
        ])
      },
      {},
      {}
    )}
        </div>`;
  })}</div>` : ``}`}</div>`;
});

export { Recommendations as R };
//# sourceMappingURL=Recommendations-80d2e442.js.map
