import { c as create_ssr_component, v as validate_component, a as add_styles, e as escape } from "./index2.js";
import { I as Image } from "./Image.js";
const CardVerticalBase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  return `<div class="flex flex-col w-full group relative mb-2 lg:mb-6"><div class="aspect-w-11 aspect-h-16">
    <div class="w-full h-full rounded-lg overflow-hidden">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: options.coverImage?.image || "",
      backgroundColor: options.coverImage?.color,
      alt: options.coverImage?.alt || ""
    },
    {},
    {}
  )}</div></div>

  
  <div class="flex flex-row gap-2 px-1 mt-2 lg:mt-4 overflow-hidden"><p class="max-w-full text-sm 3xl:text-base font-medium text-gray-100 line-clamp-2 break-words"${add_styles({ "color": options.coverImage?.color })}>${escape(options.title)}</p></div>
  
  ${slots["sub-description"] ? slots["sub-description"]({}) : ``}
  </div>`;
});
export {
  CardVerticalBase as C
};
