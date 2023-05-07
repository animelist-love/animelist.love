import { c as create_ssr_component, b as subscribe, j as createEventDispatcher, v as validate_component, h as add_attribute, e as escape, f as each, a as add_styles, n as noop } from './index2-5765a0e9.js';
import { f as fetchPOST, a as convertToUrl } from './index4-37fe8b6c.js';
import { c as createQuery } from './createQuery-c8e9701b.js';
import { c as aniListqueryMedia, b as aniListEndPoint } from './aniList-723ca79a.js';
import { a as isTopNavbarBgTransparent, c as isMobile, d as isTouchDevice, i as isSideNavBar } from './UserSettingStore-30a153bb.js';
import { C as CardVertical } from './CardVertical-1f545b80.js';
import { I as Image } from './Image-813c3f07.js';

const ScrollbarHozirontal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isSideNavBar, $$unsubscribe_isSideNavBar;
  let $isTouchDevice, $$unsubscribe_isTouchDevice;
  $$unsubscribe_isSideNavBar = subscribe(isSideNavBar, (value) => $isSideNavBar = value);
  $$unsubscribe_isTouchDevice = subscribe(isTouchDevice, (value) => $isTouchDevice = value);
  let { isSuccess = false } = $$props;
  let { isNavigation = false } = $$props;
  let scrollBar;
  if ($$props.isSuccess === void 0 && $$bindings.isSuccess && isSuccess !== void 0)
    $$bindings.isSuccess(isSuccess);
  if ($$props.isNavigation === void 0 && $$bindings.isNavigation && isNavigation !== void 0)
    $$bindings.isNavigation(isNavigation);
  $$unsubscribe_isSideNavBar();
  $$unsubscribe_isTouchDevice();
  return `<div class="${["flex justify-center py-2.5 lg:py-4 relative", $isSideNavBar ? "lg:pl-8" : ""].join(" ").trim()}">${isNavigation && !$isTouchDevice ? `<div class="absolute flex gap-x-2 right-2 md:right-4 -top-8 lg:-top-9">
      <button class="${[
    "block p-1 lg:p-2 rounded-full bg-neutral-900/80 lg:hover:bg-neutral-800 z-10",
    "opacity-60 cursor-not-allowed"
  ].join(" ").trim()}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6 fill-current"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg></button>
      
      <button class="${[
    "block p-1 lg:p-2 rounded-full bg-neutral-900/80 lg:hover:bg-neutral-800 z-10",
    " "
  ].join(" ").trim()}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6 fill-current"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></button></div>` : ``}
  <div class="flex flex-row w-full overflow-x-auto snap-x scrollbar-none"${add_attribute("this", scrollBar, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
const Trending = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listManga;
  let cloneData;
  let randomItem;
  let $listManga, $$unsubscribe_listManga = noop, $$subscribe_listManga = () => ($$unsubscribe_listManga(), $$unsubscribe_listManga = subscribe(listManga, ($$value) => $listManga = $$value), listManga);
  let $$unsubscribe_isTopNavbarBgTransparent;
  let $isMobile, $$unsubscribe_isMobile;
  let $isTouchDevice, $$unsubscribe_isTouchDevice;
  let $isSideNavBar, $$unsubscribe_isSideNavBar;
  $$unsubscribe_isTopNavbarBgTransparent = subscribe(isTopNavbarBgTransparent, (value) => value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_isTouchDevice = subscribe(isTouchDevice, (value) => $isTouchDevice = value);
  $$unsubscribe_isSideNavBar = subscribe(isSideNavBar, (value) => $isSideNavBar = value);
  let { type = "ANIME" } = $$props;
  const dispatch = createEventDispatcher();
  const listTrendingMangaQueryVariables = {
    type,
    sort: ["TRENDING_DESC", "POPULARITY_DESC"],
    status_not_in: ["NOT_YET_RELEASED"],
    perPage: 20
  };
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$subscribe_listManga(listManga = createQuery(["trending", type], () => {
    const data = fetchPOST(aniListEndPoint, {
      query: aniListqueryMedia,
      variables: listTrendingMangaQueryVariables
    });
    return data;
  }));
  cloneData = $listManga.data ? [...$listManga.data.data.Page.media] : [];
  randomItem = cloneData.splice(Math.floor(Math.random() * cloneData.length), 1)[0];
  {
    if ($listManga.isSuccess) {
      dispatch("isSuccess", true);
    }
  }
  $$unsubscribe_listManga();
  $$unsubscribe_isTopNavbarBgTransparent();
  $$unsubscribe_isMobile();
  $$unsubscribe_isTouchDevice();
  $$unsubscribe_isSideNavBar();
  return `${$listManga.isSuccess ? `<div class="flex w-full pb-2 transition-[padding,border-radius] duration-300 mb-12"><div class="w-full aspect-w-12 aspect-h-14 md:aspect-w-16 md:aspect-h-7 xl:aspect-w-14 xl:aspect-h-5 lg:overflow-hidden mb-12 lg:mb-0 cursor-pointer transition-[border-radius] duration-300">
      <div class="${[
    "w-full h-full",
    !randomItem.bannerImage && !$isMobile ? "opacity-40" : ""
  ].join(" ").trim()}">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: $isMobile ? randomItem.coverImage.extraLarge || randomItem.coverImage.large : randomItem.bannerImage || randomItem.coverImage.extraLarge || randomItem.coverImage.large,
      alt: randomItem.title?.userPreferred || randomItem.name?.userPreferred
    },
    {},
    {}
  )}</div>
      
      <div class="w-full h-full">
        <div class="w-full h-full -bottom-0.5 absolute bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div class="w-full h-full hidden lg:block absolute left-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
        <div class="w-full lg:w-2/3 3xl:w-2/4 absolute -bottom-20 lg:bottom-10 px-4 lg:pl-8"><div class="flex flex-col lg:space-x-8 mt-2"><div class="flex flex-col-reverse lg:flex-col gap-y-6 lg:gap-y-6"><div class="flex justify-center items-center lg:justify-start gap-x-4 actions lg:mb-2"><div class="view"><a${add_attribute("href", `/${randomItem.type.toLowerCase()}/${randomItem.type === "ANIME" ? "view" : "read"}/123412/${convertToUrl(randomItem.title.userPreferred)}-an${randomItem.id}`, 0)}><button class="drop-shadow-xl bg-neutral-100 py-1.5 3xl:py-2 px-4 lg:px-6 text-black font-bold font-lexenddeca rounded-md inline-flex items-center transition-opacity duration-300 hover:opacity-80">${type === "ANIME" ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-6 h-6 3xl:w-7 3xl:h-7"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path></svg>` : `<svg viewBox="0 0 20 20" class="fill-current w-6 h-6 3xl:w-7 3xl:h-7 scale-90"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M457 368.832a.5.5 0 0 0 .883.323l1.12-1.332a.876.876 0 0 1 .679-.323h3.522a2.793 2.793 0 0 0 2.796-2.784v-10.931a2.793 2.793 0 0 0-2.796-2.785h-3.454a2.75 2.75 0 0 0-2.75 2.75v15.082zm-1.5 0a.5.5 0 0 1-.883.323l-1.12-1.332a.876.876 0 0 0-.679-.323h-3.522a2.793 2.793 0 0 1-2.796-2.784v-10.931a2.793 2.793 0 0 1 2.796-2.785h3.454a2.75 2.75 0 0 1 2.75 2.75v15.082z"></path></g></svg>`}
                      <span class="ml-2 3xl:text-lg">${escape(type === "ANIME" ? "Phát" : "Đọc")}</span></button></a></div>
                <div class="actions"><a${add_attribute("href", `/${randomItem.type.toLowerCase()}/details/${convertToUrl(randomItem.title.userPreferred)}-an${randomItem.id}`, 0)}><button class="drop-shadow-xl bg-neutral-800/60 lg:bg-neutral-400/60 py-1.5 px-4 3xl:py-2 rounded-md inline-flex items-center transition-opacity duration-300 hover:opacity-80"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-6 h-6 3xl:w-7 3xl:h-7"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
                      <span class="ml-2 3xl:text-lg">Thông tin</span></button></a></div></div>
              <div class="title"><h1 class="text-xl md:text-3xl 3xl:text-5xl !leading-tight text-center lg:text-left font-bold font-lexenddeca line-clamp-2 text-shadow-sm">${escape(randomItem.title.english || randomItem.title.userPreferred)}</h1>
                <div class="mt-2 lg:mt-4 flex flex-wrap gap-2 lg:gap-3 items-center justify-center lg:justify-start text-xs md:text-lg lg:text-base 3xl:text-lg">${each(randomItem.genres, (genre) => {
    return `<span>${escape(genre)}</span>
                    <span class="w-1 h-1 rounded-full bg-neutral-500 opacity-60 last:hidden"${add_styles({
      "background-color": randomItem.coverImage?.color
    })}></span>`;
  })}</div></div>
              </div></div></div></div></div></div>
  
  <div class="flex items-center px-2 md:px-6 lg:px-8 text-white"><div class="flex mr-12"><div><h2 class="text-lg md:text-xl lg:text-2xl 3xl:text-3xl font-bold font-lexenddeca">Hiện đang thịnh hành
        </h2></div></div></div>
  
  <div>${validate_component(ScrollbarHozirontal, "ScrollbarHozirontal").$$render($$result, { isNavigation: true, isSuccess: true }, {}, {
    default: () => {
      return `${each(cloneData, (mangaData, i) => {
        return `<div class="${[
          "w-100/29 md:w-1/5 lg:w-1/6 2xl:w-1/7 4xl:w-1/8 first:ml-2 md:first:ml-6 lg:first:ml-8 mr-2 sm:mr-2.5 md:mr-2 lg:md:mr-3 2xl:mr-3 3xl:mr-4 4xl:mr-5 shrink-0",
          (!$isTouchDevice && $isSideNavBar ? "snap-start" : "") + " " + (!$isTouchDevice && !$isSideNavBar ? "snap-end" : "") + " " + ($isSideNavBar ? "lg:first:!ml-0" : "")
        ].join(" ").trim()}">${validate_component(CardVertical, "CardVertical").$$render(
          $$result,
          {
            isLoading: false,
            source: mangaData,
            to: `/${mangaData.type.toLowerCase()}/details/${convertToUrl(mangaData.title.userPreferred)}-an${mangaData.id}`
          },
          {},
          {}
        )}
        </div>`;
      })}`;
    }
  })}</div>` : `${$listManga.isLoading ? `<div class="flex w-full pb-2 transition-[padding,border-radius] duration-300 mb-12"><div class="w-full lg:bg-neutral-800 aspect-w-12 aspect-h-14 md:aspect-w-16 md:aspect-h-7 xl:aspect-w-14 xl:aspect-h-5 lg:overflow-hidden mb-12 lg:mb-0 transition-[border-radius] duration-300"><div class="w-full h-full">
        <div class="w-full h-full -bottom-0.5 absolute bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div class="w-2/3 h-full hidden lg:block absolute left-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        <div class="w-full lg:w-2/3 3xl:w-2/4 absolute -bottom-20 lg:bottom-10 px-4 lg:pl-8"><div class="flex flex-col lg:space-x-8 mt-2"><div class="flex flex-col-reverse lg:flex-col gap-y-6"><div class="flex justify-center lg:justify-start lg:mb-2"><div class="w-44 bg-neutral-800 h-8 rounded"></div></div>
              <div class="w-full md:w-2/3 mx-auto lg:mx-0 bg-neutral-800 h-4 rounded"></div>
              <div class="hidden lg:flex flex-col gap-2 overflow-hidden">
                <div class="w-1/2 bg-neutral-800 h-4 rounded"></div></div></div></div></div></div></div></div>
  
  <div class="flex items-center px-2 md:px-6 lg:px-8 text-white"><div class="flex mr-12"><div class="h-8 w-44 rounded bg-neutral-800 animate-pulse"></div></div></div>
  
  ${validate_component(ScrollbarHozirontal, "ScrollbarHozirontal").$$render($$result, {}, {}, {
    default: () => {
      return `${each(Array(4), (noUse) => {
        return `<div class="${[
          "w-100/29 md:w-1/5 lg:w-1/6 2xl:w-1/7 4xl:w-1/8 first:ml-2 md:first:ml-6 lg:first:ml-8 mr-2 sm:mr-2.5 md:mr-2 lg:md:mr-3 2xl:mr-3 3xl:mr-4 4xl:mr-5 shrink-0",
          $isSideNavBar ? "lg:first:!ml-0" : ""
        ].join(" ").trim()}">${validate_component(CardVertical, "CardVertical").$$render($$result, {}, {}, {})}
      </div>`;
      })}`;
    }
  })}` : ``}`}`;
});
const ListVertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listManga;
  let $listManga, $$unsubscribe_listManga = noop, $$subscribe_listManga = () => ($$unsubscribe_listManga(), $$unsubscribe_listManga = subscribe(listManga, ($$value) => $listManga = $$value), listManga);
  let $isTouchDevice, $$unsubscribe_isTouchDevice;
  let $isSideNavBar, $$unsubscribe_isSideNavBar;
  $$unsubscribe_isTouchDevice = subscribe(isTouchDevice, (value) => $isTouchDevice = value);
  $$unsubscribe_isSideNavBar = subscribe(isSideNavBar, (value) => $isSideNavBar = value);
  let { name = "" } = $$props;
  let { id = "" } = $$props;
  let { type = "ANIME" } = $$props;
  let { isRank = false } = $$props;
  let { queryVariables = { sort: ["UPDATED_AT_DESC"], perPage: 9 } } = $$props;
  const listTrendingMangaQueryVariables = { type, ...queryVariables };
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.isRank === void 0 && $$bindings.isRank && isRank !== void 0)
    $$bindings.isRank(isRank);
  if ($$props.queryVariables === void 0 && $$bindings.queryVariables && queryVariables !== void 0)
    $$bindings.queryVariables(queryVariables);
  $$subscribe_listManga(listManga = createQuery([id, type], () => {
    const data = fetchPOST(aniListEndPoint, {
      query: aniListqueryMedia,
      variables: listTrendingMangaQueryVariables
    });
    return data;
  }));
  $$unsubscribe_listManga();
  $$unsubscribe_isTouchDevice();
  $$unsubscribe_isSideNavBar();
  return `<div class="flex flex-col mt-2 lg:mt-8"><div class="flex items-center px-2 md:px-6 lg:px-8 text-white"><div class="${["flex w-full mr-12", isRank ? "-mb-2" : ""].join(" ").trim()}">${$listManga.isSuccess ? `<div class="flex w-full justify-between"><div><h2 class="text-lg md:text-xl lg:text-2xl 3xl:text-3xl font-bold font-lexenddeca">${escape(name)}</h2></div></div>` : `<div class="h-8 w-44 rounded bg-neutral-800 animate-pulse"></div>`}</div></div></div>

${$listManga.isSuccess ? `<div>${validate_component(ScrollbarHozirontal, "ScrollbarHozirontal").$$render($$result, { isNavigation: true, isSuccess: true }, {}, {
    default: () => {
      return `${each($listManga.data.data.Page.media, (mangaData, i) => {
        return `<div class="${[
          "w-100/29 md:w-1/5 lg:w-1/6 2xl:w-1/7 4xl:w-1/8 first:ml-2 md:first:ml-6 lg:first:ml-8 mr-2 sm:mr-2.5 md:mr-2 lg:md:mr-3 2xl:mr-3 3xl:mr-4 4xl:mr-5 shrink-0",
          (!$isTouchDevice && $isSideNavBar ? "snap-start" : "") + " " + (!$isTouchDevice && !$isSideNavBar ? "snap-end" : "") + " " + ($isSideNavBar ? "lg:first:!ml-0" : "")
        ].join(" ").trim()}">${validate_component(CardVertical, "CardVertical").$$render(
          $$result,
          {
            index: i + 1,
            isLoading: false,
            isRank,
            source: mangaData,
            to: `/${mangaData.type.toLowerCase()}/details/${convertToUrl(mangaData.title.userPreferred)}-an${mangaData.id}`
          },
          {},
          {}
        )}
        </div>`;
      })}`;
    }
  })}</div>` : `${$listManga.isLoading ? `${validate_component(ScrollbarHozirontal, "ScrollbarHozirontal").$$render($$result, {}, {}, {
    default: () => {
      return `${each(Array(4), (noUse) => {
        return `<div class="${[
          "w-100/29 md:w-1/5 lg:w-1/6 2xl:w-1/7 4xl:w-1/8 first:ml-2 md:first:ml-6 lg:first:ml-8 mr-2 sm:mr-2.5 md:mr-2 lg:md:mr-3 2xl:mr-3 3xl:mr-4 4xl:mr-5 shrink-0",
          $isSideNavBar ? "lg:first:!ml-0" : ""
        ].join(" ").trim()}">${validate_component(CardVertical, "CardVertical").$$render($$result, { isRank }, {}, {})}
      </div>`;
      })}`;
    }
  })}` : ``}`}`;
});

export { ListVertical as L, ScrollbarHozirontal as S, Trending as T };
//# sourceMappingURL=ListVertical-a9dce7d5.js.map
