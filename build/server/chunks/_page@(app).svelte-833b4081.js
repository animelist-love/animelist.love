import { c as create_ssr_component, b as subscribe, o as onDestroy, a as add_styles, v as validate_component, e as escape, f as each, n as noop } from './index2-5765a0e9.js';
import { p as page } from './stores-86a78013.js';
import { g as getID, f as fetchPOST } from './index4-37fe8b6c.js';
import { h as aniListDescriptionRewrite, i as aniListQueryCharacter, b as aniListEndPoint } from './aniList-723ca79a.js';
import { c as createInfiniteQuery } from './createInfiniteQuery-55c5ebe1.js';
import { I as Image } from './Image-813c3f07.js';
import { T as TabBase } from './TabBase-63829cfd.js';
import { C as CharacterCard } from './CharacterCard-28743863.js';
import { T as TimelineCardSkeleton } from './TimelineCardSkeleton-245db64c.js';
import './notifyManager-630cc085.js';
import './context-2e2aa9c1.js';
import './index-35f824f0.js';
import './infiniteQueryBehavior-f577a7d4.js';
import './Dot-4c5dd641.js';

const Page_app = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let characterDetail;
  let $characterDetail, $$unsubscribe_characterDetail = noop, $$subscribe_characterDetail = () => ($$unsubscribe_characterDetail(), $$unsubscribe_characterDetail = subscribe(characterDetail, ($$value) => $characterDetail = $$value), characterDetail);
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const tabsItems = [
    {
      key: "about",
      path: "about",
      name: "About",
      isActive: true
    },
    {
      key: "media",
      path: "anime-manga",
      name: "Anime/Manga",
      isActive: false
    }
  ];
  let currentTab = tabsItems.find((e) => e.isActive)?.key;
  let urlCharacter = $page.params.urlCharacter;
  const characterID = getID(urlCharacter);
  const characterQueryVariables = {
    id: characterID,
    sort: ["POPULARITY_DESC"]
  };
  onDestroy(() => {
  });
  $$subscribe_characterDetail(characterDetail = createInfiniteQuery(
    ["character", characterID],
    ({ pageParam = 1 }) => {
      const data = fetchPOST(aniListEndPoint, {
        query: aniListQueryCharacter,
        variables: {
          ...characterQueryVariables,
          page: pageParam
        }
      });
      return data;
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data?.Character?.media?.pageInfo?.hasNextPage)
          return lastPage.data?.Character?.media?.pageInfo?.currentPage + 1;
        else
          return void 0;
      }
    }
  ));
  $$unsubscribe_characterDetail();
  $$unsubscribe_page();
  return `<div class="w-full mt-20 mb-6 relative">${$characterDetail.isSuccess ? `
    <div class="fixed inset-0 blur-3xl bg-cover bg-center bg-no-repeat opacity-10 -z-10"${add_styles({
    "background-image": `url("${$characterDetail?.data?.pages[0].data.Character.image.large}")`
  })}></div>
    <div class="w-full xl:max-w-5xl 3xl:max-w-6xl flex flex-col lg:flex-row gap-6 p-4 mx-auto"><div class="w-52 h-52 shrink-0 mx-auto rounded-full overflow-hidden">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: $characterDetail?.data?.pages[0].data.Character.image.large,
      alt: $characterDetail?.data?.pages[0].data.Character.name.userPreferred
    },
    {},
    {}
  )}</div>
      <div class="w-full flex flex-col gap-6 lg:mt-4 overflow-hidden"><div class="w-full flex flex-col items-center lg:items-start gap-y-2"><h1 class="text-2xl md:text-4xl font-bold font-lexenddeca max-w-full break-words">${escape($characterDetail?.data?.pages[0].data.Character.name.userPreferred)}</h1>
          <div class="text-sm md:text-base">${$characterDetail?.data?.pages[0].data.Character.name.native ? `<span class="last:after:content-[''] after:content-[',_']">${escape($characterDetail?.data?.pages[0].data.Character.name.native)}</span>` : ``}
            ${each($characterDetail?.data?.pages[0].data.Character.name.alternative, (alternative) => {
    return `<span class="last:after:content-[''] after:content-[',_']">${escape(alternative)}</span>`;
  })}
            ${each($characterDetail?.data?.pages[0].data.Character.name.alternativeSpoiler, (alternativeSpoiler) => {
    return `<span class="last:after:content-[''] after:content-[',_'] font-medium">${escape(alternativeSpoiler)}</span>`;
  })}</div></div>

        <div class="sticky top-14 z-10">${validate_component(TabBase, "TabBase").$$render(
    $$result,
    {
      items: tabsItems,
      isSuccess: true,
      align: "left",
      rounded: true
    },
    {},
    {}
  )}</div>

        
        
        <div class="${["flex flex-col", currentTab !== "about" ? "hidden" : ""].join(" ").trim()}"><div><span class="mr-2">Favourites:</span>${escape($characterDetail?.data?.pages[0].data.Character.favourites)}</div>
          ${$characterDetail?.data?.pages[0].data.Character.dateOfBirth.month ? `<div><span class="mr-2">Birthday:</span>${escape($characterDetail?.data?.pages[0].data.Character.dateOfBirth.day)}/${escape($characterDetail?.data?.pages[0].data.Character.dateOfBirth.month)}</div>` : ``}
          ${$characterDetail?.data?.pages[0].data.Character.age ? `<div><span class="mr-2">Age:</span>${escape($characterDetail?.data?.pages[0].data.Character.age)}</div>` : ``}
          ${$characterDetail?.data?.pages[0].data.Character.gender ? `<div><span class="mr-2">Gender:</span>${escape($characterDetail?.data?.pages[0].data.Character.gender)}</div>` : ``}
          <!-- HTML_TAG_START -->${aniListDescriptionRewrite($characterDetail?.data?.pages[0].data.Character.description)}<!-- HTML_TAG_END --></div>
        
        <div class="${[
    "flex flex-col gap-2 overflow-hidden",
    currentTab !== "media" ? "hidden" : ""
  ].join(" ").trim()}">${each($characterDetail?.data?.pages, (page2) => {
    return `${each(page2.data.Character.media.edges, (media) => {
      return `${validate_component(CharacterCard, "CharacterCard").$$render($$result, { source: media }, {}, {})}`;
    })}`;
  })}
          
          ${$characterDetail.isLoading || $characterDetail.isFetching || $characterDetail.isFetchingNextPage ? `<div class="w-full flex flex-col gap-2">${each(Array(3), (noUse) => {
    return `${validate_component(TimelineCardSkeleton, "TimelineCardSkeleton").$$render($$result, {}, {}, {})}`;
  })}</div>` : `${$characterDetail.hasNextPage ? `<div class="w-full my-20"></div>` : `<div class="w-full text-center my-20">Không còn kết quả nào!</div>`}`}</div></div></div>` : `<div class="w-full xl:max-w-5xl 3xl:max-w-6xl flex flex-col lg:flex-row gap-6 p-4 mx-auto animate-pulse"><div class="w-52 h-52 shrink-0 mx-auto rounded-full bg-neutral-800"></div>
      <div class="w-full flex flex-col gap-6 lg:mt-4"><div class="flex flex-col items-center lg:items-start gap-y-2"><div class="w-60 h-6 bg-neutral-800 rounded"></div>
          <div class="w-20 h-4 bg-neutral-800 rounded"></div></div>
        <div class="w-full h-12 rounded bg-neutral-800"></div>
        <div class="w-full h-28 rounded bg-neutral-800"></div></div></div>`}</div>`;
});

export { Page_app as default };
//# sourceMappingURL=_page@(app).svelte-833b4081.js.map
