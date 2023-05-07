import { c as create_ssr_component, f as add_attribute, v as validate_component, e as escape } from "./index2.js";
import { c as convertToUrl } from "./index4.js";
import { I as Image } from "./Image.js";
import { D as Dot } from "./Dot.js";
const StaffVoiceActingRoleCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { source } = $$props;
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  return `<div class="w-full flex justify-between gap-2 rounded-lg bg-neutral-500/20 p-2.5 lg:p-4"><div class="w-full flex justify-between gap-1.5"><a${add_attribute("href", `/${source.node.type.toLowerCase()}/details/${convertToUrl(source.node.title.userPreferred)}-an${source.node.id}`, 0)} class="w-1/2"><div class="flex gap-3 items-center"><div class="w-12 md:w-16 rounded shrink-0 overflow-hidden"><div class="aspect-w-11 aspect-h-16">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: source.node.coverImage.large,
      backgroundColor: source.node.coverImage.color,
      alt: source.node.title.userPreferred
    },
    {},
    {}
  )}</div></div>
        <div class="w-full flex flex-col gap-1.5 text-xs md:text-base"><h3 class="line-clamp-2 font-bold font-lexenddeca">${escape(source.node.title.userPreferred)}</h3>
          <div class="flex items-center text-xs gap-2"><span>${escape(source.node.startDate.year || "TBA")}</span>
            ${validate_component(Dot, "Dot").$$render(
    $$result,
    {
      backgroundColor: source.node.coverImage.color
    },
    {},
    {}
  )}
            <span>${escape(source.node.format)}</span></div></div></div></a>
    
    ${!!source.characters[0] ? `<a${add_attribute("href", `/character/${convertToUrl(source.characters[0].name.userPreferred)}-an${source.characters[0].id}`, 0)} class="w-1/2 flex gap-3 justify-end items-center"><div class="w-full flex flex-col text-right gap-1.5 text-xs md:text-base"><h3 class="font-bold font-lexenddeca">${escape(source.characters[0].name.userPreferred)}</h3>
          <span class="text-neutral-400 text-xs first-letter:uppercase lowercase">${escape(source.characterRole)}</span></div>
        <div class="w-12 md:w-16 rounded shrink-0 overflow-hidden"><div class="aspect-w-1 aspect-h-1 rounded-full overflow-hidden">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: source.characters[0].image.medium,
      alt: source.characters[0].name.userPreferred
    },
    {},
    {}
  )}</div></div></a>` : ``}</div></div>`;
});
export {
  StaffVoiceActingRoleCard as S
};
