import { c as create_ssr_component, v as validate_component } from './index2-5765a0e9.js';
import { T as Trending, L as ListVertical } from './ListVertical-a9dce7d5.js';
import './index4-37fe8b6c.js';
import './notifyManager-630cc085.js';
import './context-2e2aa9c1.js';
import './index-35f824f0.js';
import './createQuery-c8e9701b.js';
import './aniList-723ca79a.js';
import './UserSettingStore-30a153bb.js';
import './CardVertical-1f545b80.js';
import './Image-813c3f07.js';

const Page_app = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Trending, "Trending").$$render($$result, { type: "MANGA" }, {}, {})}
${validate_component(ListVertical, "ListVertical").$$render(
    $$result,
    {
      id: "mangaNew",
      type: "MANGA",
      name: "Mới cập nhật",
      queryVariables: { sort: ["UPDATED_AT_DESC"], perPage: 15 }
    },
    {},
    {}
  )}
${validate_component(ListVertical, "ListVertical").$$render(
    $$result,
    {
      id: "mangaUpcoming",
      type: "MANGA",
      name: "Sắp tới",
      queryVariables: {
        status: "NOT_YET_RELEASED",
        sort: ["TRENDING_DESC"],
        perPage: 15
      }
    },
    {},
    {}
  )}
${validate_component(ListVertical, "ListVertical").$$render(
    $$result,
    {
      id: "mangaTop",
      type: "MANGA",
      name: "Phổ biến",
      queryVariables: {
        sort: ["SCORE_DESC", "FAVOURITES_DESC", "POPULARITY_DESC"],
        perPage: 15
      },
      isRank: true
    },
    {},
    {}
  )}`;
});

export { Page_app as default };
//# sourceMappingURL=_page@(app).svelte-306046e6.js.map
