import { c as create_ssr_component, v as validate_component } from './index2-5765a0e9.js';
import { H as Hydrate, M as MediaDetailsWarp } from './MediaDetailsWarp-3ba7be34.js';
import './index4-37fe8b6c.js';
import './notifyManager-630cc085.js';
import './context-2e2aa9c1.js';
import './index-35f824f0.js';
import './RankingMedia-e69c1893.js';
import './index3-f4b10c8e.js';
import './createQuery-c8e9701b.js';
import './stores-86a78013.js';
import './DetailPageStore-07c2e837.js';
import './UserSettingStore-30a153bb.js';
import './Image-813c3f07.js';
import './useCreateLink-920e2d92.js';
import './TabBase-63829cfd.js';
import './useMediaDetailsPrefetch-a3195c1d.js';

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

export { Layout_app as default };
//# sourceMappingURL=_layout@(app).svelte-2cd6fb34.js.map
