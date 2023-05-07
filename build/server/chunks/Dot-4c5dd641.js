import { c as create_ssr_component, a as add_styles } from './index2-5765a0e9.js';

const Dot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { backgroundColor = null } = $$props;
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  return `<span class="w-1 h-1 rounded-full bg-neutral-500 opacity-60 last:hidden"${add_styles({ "background-color": backgroundColor })}></span>`;
});

export { Dot as D };
//# sourceMappingURL=Dot-4c5dd641.js.map
