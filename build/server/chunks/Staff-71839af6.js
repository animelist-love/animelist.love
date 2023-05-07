import { c as create_ssr_component, f as each, h as add_attribute, v as validate_component, e as escape } from './index2-5765a0e9.js';
import { u as useCreateLink } from './useCreateLink-920e2d92.js';
import { C as CardVerticalBase } from './CardVerticalBase-c7b64a4f.js';

const Staff = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isLoading = true } = $$props;
  let { isSuccess = false } = $$props;
  let { source = null } = $$props;
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  if ($$props.isSuccess === void 0 && $$bindings.isSuccess && isSuccess !== void 0)
    $$bindings.isSuccess(isSuccess);
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  return `<div class="w-full flex flex-col space-y-3 py-2 rounded-lg">${isLoading ? `<div class="w-full grid grid-cols-12 gap-4 animate-pulse">${each(Array(5), (noUse) => {
    return `<div class="col-span-6 lg:col-span-4 flex bg-neutral-900 rounded-lg overflow-hidden"><div class="w-14 md:w-16 flex-shrink-0 h-24 bg-neutral-800"></div>
          <div class="flex flex-col justify-between ml-0.5 md:ml-2 p-2 w-full"><div class="py-1 px-2 bg-neutral-800 w-full h-8 rounded"></div>
            <div class="py-1 px-2 bg-neutral-800 w-full h-6 rounded"></div></div>
        </div>`;
  })}</div>` : `${isSuccess && !!source ? `<div class="w-full grid grid-cols-12 gap-x-1.5 sm:gap-x-2.5 gap-y-0 md:grid-cols-4 md:gap-2 lg:md:gap-3 xl:grid-cols-5 2xl:gap-4">${each(source, (edge) => {
    return `<a class="col-span-4 md:col-span-1 2xl:col-span-1"${add_attribute(
      "href",
      useCreateLink([
        "/character/",
        {
          value: edge.node?.name?.userPreferred || "",
          convert: "-"
        },
        "-an",
        edge?.node?.id || 0
      ]),
      0
    )}>${validate_component(CardVerticalBase, "CardVerticalBase").$$render(
      $$result,
      {
        options: {
          title: edge?.node?.name?.userPreferred,
          coverImage: {
            alt: edge?.node?.name?.userPreferred,
            image: edge?.node?.image?.large || edge?.node?.image?.medium
          }
        }
      },
      {},
      {
        "sub-description": () => {
          return `<div slot="sub-description" class="mt-1 px-1 text-xs md:text-sm text-neutral-300 opacity-60 lowercase first-letter:uppercase">${escape(edge.role)}
            </div>`;
        }
      }
    )}
        </a>`;
  })}</div>` : ``}`}</div>`;
});

export { Staff as S };
//# sourceMappingURL=Staff-71839af6.js.map
