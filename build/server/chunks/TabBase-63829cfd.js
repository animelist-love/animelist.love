import { c as create_ssr_component, j as createEventDispatcher, f as each, h as add_attribute, e as escape, a as add_styles } from './index2-5765a0e9.js';

const TabBase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isSuccess = false } = $$props;
  let { items } = $$props;
  let { align = "center" } = $$props;
  let { rounded = false } = $$props;
  createEventDispatcher();
  let widthIndicator = 0;
  let leftIndicator = 0;
  if ($$props.isSuccess === void 0 && $$bindings.isSuccess && isSuccess !== void 0)
    $$bindings.isSuccess(isSuccess);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  return `<div class="${["w-full bg-neutral-900 lg:rounded-lg px-2", rounded ? "rounded-lg" : ""].join(" ").trim()}"><div class="${[
    "flex w-full shrink-0",
    (align === "center" ? "justify-center" : "") + " " + (align === "left" ? "justify-start" : "") + " " + (align === "right" ? "justify-end" : "")
  ].join(" ").trim()}">${isSuccess ? `<ul class="relative flex list-none py-1.5 font-bold font-lexenddeca overflow-x-auto snap-x scrollbar-none">${each(items, (item, i) => {
    return `<li class="flex shrink-0 text-center z-20"><a${add_attribute("href", item.path, 0)} class="tab-item mb-0 flex w-full cursor-pointer items-center justify-center border-0 px-6 py-2 lg:py-2.5"><span class="ml-1">${escape(item.name)}</span></a>
          </li>`;
  })}
        
        <div class="${[
    "absolute inset-0 top-2 bottom-2 rounded-lg bg-neutral-800 z-10",
    " "
  ].join(" ").trim()}"${add_styles({
    "width": `${widthIndicator}px`,
    "left": `${leftIndicator}px`
  })}></div></ul>` : `<div class="w-16 h-14 flex items-center justify-center mx-5"><div class="w-full h-4 rounded bg-neutral-800"></div></div>
      <div class="w-16 h-14 flex items-center justify-center mx-5"><div class="w-full h-4 rounded bg-neutral-800"></div></div>
      <div class="w-16 h-14 flex items-center justify-center mx-5"><div class="w-full h-4 rounded bg-neutral-800"></div></div>`}</div></div>`;
});

export { TabBase as T };
//# sourceMappingURL=TabBase-63829cfd.js.map
