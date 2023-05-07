import { c as create_ssr_component, a as add_styles, f as add_attribute } from "./index2.js";
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt = "avatar" } = $$props;
  let { backgroundColor = null } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  return `<div class="${[
    "w-full h-full",
    backgroundColor !== "transparent" ? "bg-neutral-800" : ""
  ].join(" ").trim()}"${add_styles({
    "background-color": backgroundColor && backgroundColor !== "transparent" ? backgroundColor : null
  })}><img${add_attribute("data-src", src, 0)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="${add_attribute("alt", alt, 0)} class="w-full h-full object-cover object-center"></div>`;
});
export {
  Image as I
};
