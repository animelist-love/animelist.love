import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import { T as Trending, L as ListVertical } from "../../../../chunks/ListVertical.js";
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
export {
  Page_app as default
};
