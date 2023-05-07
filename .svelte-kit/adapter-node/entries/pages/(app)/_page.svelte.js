import { c as create_ssr_component, b as subscribe, d as each, e as escape, v as validate_component, n as noop, f as add_attribute, a as add_styles } from "../../../chunks/index2.js";
import { S as ScrollbarHozirontal, T as Trending, L as ListVertical } from "../../../chunks/ListVertical.js";
import { f as fetchPOST, c as convertToUrl } from "../../../chunks/index4.js";
import { c as createQuery } from "../../../chunks/createQuery.js";
import { a as aniListQueryAiringSchedule, b as aniListEndPoint, f as formatTimestamp, c as aniListqueryMedia } from "../../../chunks/aniList.js";
import { d as isTouchDevice, a as isSideNavBar } from "../../../chunks/UserSettingStore.js";
import { C as CardVertical } from "../../../chunks/CardVertical.js";
import { I as Image } from "../../../chunks/Image.js";
const AnimeAiring = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listManga;
  let airingSchedules;
  let $listManga, $$unsubscribe_listManga = noop, $$subscribe_listManga = () => ($$unsubscribe_listManga(), $$unsubscribe_listManga = subscribe(listManga, ($$value) => $listManga = $$value), listManga);
  let $isTouchDevice, $$unsubscribe_isTouchDevice;
  let $isSideNavBar, $$unsubscribe_isSideNavBar;
  $$unsubscribe_isTouchDevice = subscribe(isTouchDevice, (value) => $isTouchDevice = value);
  $$unsubscribe_isSideNavBar = subscribe(isSideNavBar, (value) => $isSideNavBar = value);
  let isFristLoading = true;
  const currentDay = (/* @__PURE__ */ new Date()).getDay();
  let currentViewDay = currentDay;
  let isChangingDay = false;
  const days = [
    { value: 0, lable: "CN" },
    { value: 1, lable: "T2" },
    { value: 2, lable: "T3" },
    { value: 3, lable: "T4" },
    { value: 4, lable: "T5" },
    { value: 5, lable: "T6" },
    { value: 6, lable: "T7" }
  ];
  const getStartToEndTimestampsDate = (day) => {
    const dayDifference = currentDay - day;
    const date = /* @__PURE__ */ new Date();
    const startTimestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - dayDifference * 24 * 60 * 60 * 1e3;
    const endTimestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999).getTime() - dayDifference * 24 * 60 * 60 * 1e3;
    return [Math.floor(startTimestamp / 1e3), Math.floor(endTimestamp / 1e3)];
  };
  const airingAt = getStartToEndTimestampsDate(currentDay);
  const queryVariables = {
    type: "ANIME",
    sort: ["TIME_DESC"],
    perPage: 18,
    airingAt_greater: airingAt[0],
    airingAt_lesser: airingAt[1]
  };
  const adultFilter = (airingSchedules2) => airingSchedules2.filter((airingSchedules3) => !airingSchedules3.media.isAdult);
  $$subscribe_listManga(listManga = createQuery(
    ["animeAiring", currentViewDay],
    () => {
      const data = fetchPOST(aniListEndPoint, {
        query: aniListQueryAiringSchedule,
        variables: queryVariables
      });
      return data;
    },
    { enabled: !isChangingDay }
  ));
  airingSchedules = $listManga.data ? adultFilter($listManga.data.data.Page.airingSchedules) : [];
  $$unsubscribe_listManga();
  $$unsubscribe_isTouchDevice();
  $$unsubscribe_isSideNavBar();
  return `<div class="flex flex-col mt-2 lg:mt-8"><div class="flex items-center px-2 md:px-6 lg:px-8 text-white"><div class="flex gap-x-12">${$listManga.isSuccess || !isFristLoading ? `<div><h2 class="text-lg md:text-xl lg:text-2xl 3xl:text-3xl font-bold font-lexenddeca">Phát sóng
          </h2></div>
        <ul class="hidden md:flex flex-wrap items-center gap-x-6 text-sm lg:text-base">${each(days, (day) => {
    return `<li><button class="${[
      "py-1 px-4 rounded-lg hover:bg-neutral-800",
      (day.value === currentDay ? "text-rose-400" : "") + " " + (day.value === currentDay ? "font-medium" : "") + " " + (day.value === currentViewDay ? "bg-neutral-800" : "")
    ].join(" ").trim()}">${escape(day.lable)}</button>
            </li>`;
  })}</ul>` : `<div class="h-8 w-44 rounded bg-neutral-800 animate-pulse"></div>`}</div></div>

  ${$listManga.isSuccess ? `
    <div>${validate_component(ScrollbarHozirontal, "ScrollbarHozirontal").$$render($$result, { isNavigation: true, isSuccess: true }, {}, {
    default: () => {
      return `${each(airingSchedules, (airingSchedule) => {
        return `<div class="${[
          "w-100/29 md:w-1/5 lg:w-1/6 2xl:w-1/7 4xl:w-1/8 first:ml-2 md:first:ml-6 lg:first:ml-8 mr-2 sm:mr-2.5 md:mr-2 lg:md:mr-3 2xl:mr-3 3xl:mr-4 4xl:mr-5 shrink-0",
          (!$isTouchDevice && $isSideNavBar ? "snap-start" : "") + " " + (!$isTouchDevice && !$isSideNavBar ? "snap-end" : "") + " " + ($isSideNavBar ? "lg:first:!ml-0" : "")
        ].join(" ").trim()}">${validate_component(CardVertical, "CardVertical").$$render(
          $$result,
          {
            isLoading: false,
            source: airingSchedule.media,
            to: `/${airingSchedule.media.type.toLowerCase()}/details/${convertToUrl(airingSchedule.media.title.userPreferred)}-an${airingSchedule.media.id}`
          },
          {},
          {}
        )}
          </div>`;
      })}`;
    }
  })}</div>` : `${$listManga.isLoading ? `
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
  })}` : ``}`}</div>`;
});
const CardHorizontal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { to = "" } = $$props;
  let { index = 0 } = $$props;
  let { source = {} } = $$props;
  let { isLoading = true } = $$props;
  let { isRank = false } = $$props;
  const rank = index + 1;
  if ($$props.to === void 0 && $$bindings.to && to !== void 0)
    $$bindings.to(to);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  if ($$props.isRank === void 0 && $$bindings.isRank && isRank !== void 0)
    $$bindings.isRank(isRank);
  return `${isLoading ? `<div class="flex w-full flex-col pb-3 animate-pulse"><div class="w-full aspect-w-16 aspect-h-9 bg-neutral-800 rounded-lg"></div>
    <div class="flex flex-rows gap-x-2 mt-2">
      

      
      <div class="flex-1 flex-col w-full"><div class="w-full h-6 rounded bg-neutral-800"></div>
        <div class="mt-2 w-4/6 h-4 rounded bg-neutral-800"></div></div></div></div>` : `<div class="${[
    "flex w-full flex-col bg-transparent pb-3 transition-none hover:transition-all duration-700 delay-500 group hover:-mt-4 hover:w-[calc(100%+8rem)] hover:absolute hover:z-10 hover:bg-neutral-800 hover:rounded-lg hover:shadow hover:shadow-black overflow-hidden",
    "  hover:-ml-16"
  ].join(" ").trim()}"><div class="w-full aspect-w-16 aspect-h-9 rounded-lg transition-none duration-700 delay-500 group-hover:transition-[padding] group-hover:aspect-h-8"><a${add_attribute("href", to, 0)}><div class="w-full h-full rounded-lg delay-500 duration-700 group-hover:transition-[border-radius] group-hover:rounded-b-none overflow-hidden">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: source?.bannerImage || source?.coverImage?.extraLarge || source?.coverImage?.large,
      backgroundColor: source.coverImage?.color,
      alt: source.title?.userPreferred || source.name?.userPreferred
    },
    {},
    {}
  )}</div>
        ${source.nextAiringEpisode ? `<div class="w-full"><div class="absolute left-1 bottom-1 bg-neutral-900/70 max-w-full w-fit h-fit px-1 py-0.5 rounded-md line-clamp-1 text-xs lg:text-sm lg:px-1.5 lg:rounded-lg"><span>EP ${escape(source.nextAiringEpisode.episode)}:</span>
              <span>${escape(formatTimestamp(source.nextAiringEpisode.airingAt))}</span></div></div>` : ``}</a></div>
    <a${add_attribute("href", to, 0)}><div class="flex flex-row gap-2 mt-2 lg:mt-4 transition-none duration-700 delay-500 group-hover:transition-[padding] group-hover:px-3 group-hover:pt-1">
        ${isRank ? `<div class="flex-shrink-0 flex mr-0.5 lg:mr-2 text-white"${add_styles({ "color": source.coverImage?.color })}><span class="text-base lg:text-2xl pt-1 lg:pt-1.5">#</span>
            <span class="text-2xl lg:text-4xl font-bold font-lexenddeca">${escape(rank)}</span></div>` : ``}

        
        <div class="flex flex-col"><p class="text-sm 3xl:text-base md:font-medium text-gray-100 line-clamp-2"${add_styles({ "color": source.coverImage.color })}>${escape(source.title.english || source.title.userPreferred)}</p>
          <div class="flex flex-row flex-wrap items-center mt-1 text-xs lg:text-sm text-gray-400"><p class="mr-2 lowercase first-letter:uppercase">${escape(source.status)}</p>
            <span class="w-1 h-1 rounded-full bg-neutral-500 mr-2"></span>
            <p>${escape(source.startDate.year)} - ${escape(source.endDate.year || "?")}</p></div></div></div></a>

    <div class="flex justify-between space-x-2 px-3 mt-5 text-white max-h-0 overflow-hidden transition-none delay-500 duration-700 group-hover:transition-[max-height] group-hover:max-h-[1000px]"><button class="w-1/2 bg-neutral-700 p-1.5 rounded-full inline-flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current w-5 h-5"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
        <span class="text-sm ml-2">Yêu thích</span></button>
      <button class="w-1/2 bg-neutral-700 p-1.5 rounded-full inline-flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-5 h-5"><path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"></path><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></path></svg>
        <span class="text-sm ml-2">Lưu vào</span></button></div></div>`}`;
});
const ListHorizontalScroll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { queryVariables = {
    sort: ["SCORE_DESC", "FAVOURITES_DESC", "POPULARITY_DESC"],
    perPage: 12
  } } = $$props;
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
  return `<div class="flex flex-col mt-2 lg:mt-8"><div class="flex items-center px-2 md:px-6 lg:px-8 text-white"><div class="flex mr-12">${$listManga.isSuccess ? `<div><h2 class="text-lg md:text-xl lg:text-2xl 3xl:text-3xl font-bold font-lexenddeca">${escape(name)}</h2></div>` : `<div class="h-8 w-44 rounded bg-neutral-800 animate-pulse"></div>`}</div></div>

  ${$listManga.isSuccess ? `<div>${validate_component(ScrollbarHozirontal, "ScrollbarHozirontal").$$render($$result, { isNavigation: true, isSuccess: true }, {}, {
    default: () => {
      return `${each($listManga.data.data.Page.media, (mangaData, i) => {
        return `<div class="${[
          "w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/4 4xl:w-1/5 first:ml-2 md:first:ml-6 lg:first:ml-8 mr-2 sm:mr-2.5 md:mr-2 lg:md:mr-3 2xl:mr-3 3xl:mr-4 4xl:mr-5 shrink-0 relative",
          (!$isTouchDevice && $isSideNavBar ? "snap-start" : "") + " " + (!$isTouchDevice && !$isSideNavBar ? "snap-end" : "") + " " + ($isSideNavBar ? "lg:first:!ml-0" : "")
        ].join(" ").trim()}">${validate_component(CardHorizontal, "CardHorizontal").$$render(
          $$result,
          {
            source: mangaData,
            isRank,
            isLoading: false,
            to: `/${mangaData.type.toLowerCase()}/details/${convertToUrl(mangaData.title.userPreferred)}-an${mangaData.id}`,
            index: i
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
          "w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/4 4xl:w-1/5 first:ml-2 md:first:ml-6 lg:first:ml-8 mr-2 sm:mr-2.5 md:mr-2 lg:md:mr-3 2xl:mr-3 3xl:mr-4 4xl:mr-5 shrink-0 relative",
          $isSideNavBar ? "lg:first:!ml-0" : ""
        ].join(" ").trim()}">${validate_component(CardHorizontal, "CardHorizontal").$$render($$result, {}, {}, {})}
        </div>`;
      })}`;
    }
  })}` : ``}`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Trending, "Trending").$$render($$result, {}, {}, {})}



${validate_component(ListVertical, "ListVertical").$$render(
    $$result,
    {
      id: "animeNew",
      type: "ANIME",
      name: "Mới cập nhật",
      queryVariables: { sort: ["UPDATED_AT_DESC"], perPage: 18 }
    },
    {},
    {}
  )}
${validate_component(AnimeAiring, "AnimeAiring").$$render($$result, {}, {}, {})}
${validate_component(ListVertical, "ListVertical").$$render(
    $$result,
    {
      id: "animeUpcoming",
      type: "ANIME",
      name: "Sắp tới",
      queryVariables: {
        status: "NOT_YET_RELEASED",
        sort: ["TRENDING_DESC"],
        perPage: 18
      }
    },
    {},
    {}
  )}
${validate_component(ListHorizontalScroll, "ListHorizontalScroll").$$render(
    $$result,
    {
      type: "ANIME",
      id: "animeTop",
      name: "Phổ biến",
      queryVariables: {
        sort: ["SCORE_DESC", "FAVOURITES_DESC", "POPULARITY_DESC"],
        perPage: 20
      },
      isRank: true
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
