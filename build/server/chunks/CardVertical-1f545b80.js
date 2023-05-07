import { c as create_ssr_component, h as add_attribute, v as validate_component, a as add_styles, e as escape } from './index2-5765a0e9.js';
import { I as Image } from './Image-813c3f07.js';

const CardVertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { to = "" } = $$props;
  let { source = {} } = $$props;
  let { isShowType = false } = $$props;
  let { isLoading = true } = $$props;
  let { isRank = false } = $$props;
  let { index = 0 } = $$props;
  if ($$props.to === void 0 && $$bindings.to && to !== void 0)
    $$bindings.to(to);
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.isShowType === void 0 && $$bindings.isShowType && isShowType !== void 0)
    $$bindings.isShowType(isShowType);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  if ($$props.isRank === void 0 && $$bindings.isRank && isRank !== void 0)
    $$bindings.isRank(isRank);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  return `${isLoading ? `<div class="flex flex-col w-full mb-2 lg:mb-6 animate-pulse"><div class="aspect-w-11 aspect-h-16 rounded-lg bg-neutral-800"></div>
    <div class="mt-2 bg-neutral-800 h-6 rounded"></div></div>` : `<div class="${["flex flex-col w-full group relative mb-2 lg:mb-6", isRank ? "mt-3" : ""].join(" ").trim()}"><a${add_attribute("href", to, 0)}><div class="aspect-w-11 aspect-h-16">
        <div class="w-full h-full rounded-lg overflow-hidden">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: source.coverImage?.extraLarge || source?.coverImage?.large || source.image.large,
      backgroundColor: source.coverImage?.color,
      alt: source.title?.userPreferred || source.name?.userPreferred
    },
    {},
    {}
  )}</div>
        
        ${isRank ? `<div class="w-full"><div class="absolute left-1/2 -translate-x-1/2 -top-2.5 lg:-top-3.5 flex items-center justify-center text-center bg-[#0f0f0f] w-12 lg:w-14 h-4 lg:h-6 rounded-xl text-lg lg:text-2xl"${add_styles({ "color": source.coverImage?.color })}><span class="mt-0.5 lg:mt-1 text-sm">#</span>
              <span class="pb-0.5 font-bold font-lexenddeca ">${escape(index)}</span></div></div>` : ``}</div></a>

    
    <a${add_attribute("href", to, 0)}><div class="flex flex-row gap-2 px-1 mt-2 lg:mt-4 overflow-hidden"><div class="flex"><p class="text-sm 3xl:text-base md:font-medium text-gray-100 line-clamp-2"${add_styles({ "color": source.coverImage?.color })}>${escape(source.title?.userPreferred || source.name?.userPreferred)}</p></div></div></a>
    ${isShowType ? `<div class="mt-1 text-xs md:text-sm text-neutral-300 opacity-60 lowercase first-letter:uppercase"${add_styles({ "color": source.coverImage?.color })}>${escape(source.type)}</div>` : ``}

    </div>`}`;
});

export { CardVertical as C };
//# sourceMappingURL=CardVertical-1f545b80.js.map
