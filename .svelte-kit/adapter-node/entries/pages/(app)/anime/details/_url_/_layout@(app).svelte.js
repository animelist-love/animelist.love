import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/index2.js";
import { H as Hydrate, M as MediaDetailsWarp } from "../../../../../../chunks/MediaDetailsWarp.js";
const Layout_app = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Hydrate, "Hydrate").$$render($$result, { state: data.dehydratedState }, {}, {
    default: () => {
      return `${validate_component(MediaDetailsWarp, "MediaDetailsWarp").$$render($$result, { id: data.Id }, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}`;
    }
  })}`;
});
export {
  Layout_app as default
};
