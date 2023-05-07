import { c as create_ssr_component, o as onDestroy, e as escape, h as add_attribute, v as validate_component, b as subscribe, f as each } from './index2-5765a0e9.js';
import { u as useQueryClient, a as convertToUrl, s as spaceToAdd } from './index4-37fe8b6c.js';
import { u as useMediaDetails, a as useTimestampToString, R as RankingMedia } from './RankingMedia-e69c1893.js';
import { p as page } from './stores-86a78013.js';
import { i as isLoading, a as isSuccess, e as externalLink, s as streamingEpisodes, c as characters, b as staff, r as relations, d as recommendations, f as rankings, t as tabActive } from './DetailPageStore-07c2e837.js';
import { a as isTopNavbarBgTransparent, i as isSideNavBar, c as isMobile } from './UserSettingStore-30a153bb.js';
import { I as Image } from './Image-813c3f07.js';
import { u as useCreateLink } from './useCreateLink-920e2d92.js';
import { T as TabBase } from './TabBase-63829cfd.js';
import { h as hydrate } from './useMediaDetailsPrefetch-a3195c1d.js';

function useHydrate(state, options) {
  const client = useQueryClient();
  if (state) {
    hydrate(client, state, options);
  }
}
const Hydrate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { state } = $$props;
  let { options = void 0 } = $$props;
  useHydrate(state, options);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  return `${slots.default ? slots.default({}) : ``}`;
});
const siteName = "AniCrush";
const siteSocialImageUrl = "https://i.ibb.co/ckj3n48/image-2023-02-19-173520415.png";
const siteThemeColor = "#EF4444";
const useHTMLtoPlainText = (html) => {
  return html.replace(/<[^>]*(>|$)|&nbsp;/g, "");
};
const BannerImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isTopNavbarBgTransparent;
  let $isSideNavBar, $$unsubscribe_isSideNavBar;
  $$unsubscribe_isTopNavbarBgTransparent = subscribe(isTopNavbarBgTransparent, (value) => value);
  $$unsubscribe_isSideNavBar = subscribe(isSideNavBar, (value) => $isSideNavBar = value);
  let { imageUrl = "" } = $$props;
  let { isLoading: isLoading2 = true } = $$props;
  let { isSuccess: isSuccess2 = false } = $$props;
  if ($$props.imageUrl === void 0 && $$bindings.imageUrl && imageUrl !== void 0)
    $$bindings.imageUrl(imageUrl);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading2 !== void 0)
    $$bindings.isLoading(isLoading2);
  if ($$props.isSuccess === void 0 && $$bindings.isSuccess && isSuccess2 !== void 0)
    $$bindings.isSuccess(isSuccess2);
  $$unsubscribe_isTopNavbarBgTransparent();
  $$unsubscribe_isSideNavBar();
  return `<div class="flex w-full mt-14 lg:mt-0">${isLoading2 ? `<div class="w-full aspect-w-16 aspect-h-9 md:aspect-w-16 md:aspect-h-6 xl:aspect-w-12 xl:aspect-h-3 3xl:aspect-w-9 3xl:aspect-h-2 bg-transparent lg:rounded-bl animate-pulse"></div>` : `${isSuccess2 ? `<div class="w-full aspect-w-16 aspect-h-9 md:aspect-w-16 md:aspect-h-6 xl:aspect-w-12 xl:aspect-h-3 3xl:aspect-w-9 3xl:aspect-h-2 bg-neutral-800 transition-[border-radius] duration-300 overflow-hidden"><div class="w-full h-full">${validate_component(Image, "Image").$$render($$result, { src: imageUrl || "" }, {}, {})}</div>
      <div><div class="hidden sm:block w-full h-full absolute bottom-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
        <div class="${[
    "hidden w-full h-full absolute bottom-0 bg-gradient-to-r from-background via-transparent to-transparent",
    $isSideNavBar ? "lg:block" : ""
  ].join(" ").trim()}"></div></div></div>` : ``}`}</div>`;
});
const MediaInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { source = null } = $$props;
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  return `${!!source ? `<div class="group lg:rounded-2xl overflow-hidden"><div class="sticky w-full flex justify-between items-start p-4 md:p-6 bg-neutral-800"><span class="text-xl xl:text-3xl font-bold font-lexenddeca line-clamp-2">${escape(source.title?.userPreferred)}</span>
      ${slots["header-left"] ? slots["header-left"]({}) : ``}</div>
    <div class="w-full flex flex-col gap-8 bg-neutral-800 p-4 md:p-6 md:text-lg xl:text-xl max-h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin scrollbar-w-1 lg:group-hover:scrollbar-thumb-neutral-500"><div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Native</span>
        <span class="text-neutral-400">${escape(source.title?.native)}</span></div>
      <div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Romaji</span>
        <span class="text-neutral-400">${escape(source.title?.romaji)}</span></div>
      ${!!source.title?.english ? `<div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">English</span>
          <span class="text-neutral-400">${escape(source.title.english)}</span></div>` : ``}
      ${!!source.synonyms && source.synonyms.length ? `<div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Synonyms</span>
          <div class="flex flex-col text-center items-center gap-1.5 flex-wrap w-full">${each(source.synonyms, (synonym) => {
    return `<span class="text-neutral-400">${escape(synonym)}</span>`;
  })}</div></div>` : ``}
      <div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Country</span>
        <span class="text-neutral-400">${escape(source.countryOfOrigin)}</span></div>
      ${source.type === "ANIME" ? `<div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Episodes</span>
          <span class="text-neutral-400">${escape(source.episodes || "?")}</span></div>
        ${!!source.duration ? `<div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Duration</span>
            <span class="text-neutral-400">${escape(source.duration + " minutes" || "?")}</span></div>` : ``}` : `<div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Volumes</span>
          <span class="text-neutral-400">${escape(source.volumes || "?")}</span></div>
        <div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Chapters</span>
          <span class="text-neutral-400">${escape(source.chapters || "?")}</span></div>`}
      <div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Status</span>
        <span class="text-neutral-400">${escape(source.status)}</span></div>
      <div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Start Date</span>
        <span>${escape(source.startDate?.day)}/${escape(source.startDate?.month)}/${escape(source.startDate?.year)}</span></div>
      <div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">End Date</span>
        <span>${escape(source.endDate?.day)}/${escape(source.endDate?.month)}/${escape(source.endDate?.year)}</span></div>
      <div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Season</span>
        <span class="text-neutral-400">${escape(source.season)} ${escape(source.seasonYear)}</span></div>
      <div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Average Score</span>
        <span class="text-neutral-400">${escape(source.averageScore)}%</span></div>
      <div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Popularity</span>
        <span class="text-neutral-400">${escape(source.popularity)}</span></div>
      <div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Favourites</span>
        <span class="text-neutral-400">${escape(source.favourites)}</span></div>
      <div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Trending</span>
        <span class="text-neutral-400">${escape(source.trending)}</span></div>
      ${!!source.studios ? `<div class="flex flex-col items-center gap-1 text-center border-t border-neutral-700/80 pt-4"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Studios &amp; Producers</span>
          <div class="flex flex-col items-center text-center gap-1 flex-wrap w-full">${each(source.studios?.nodes || [], (node) => {
    return `<a class="text-neutral-300 hover:text-rose-500"${add_attribute("href", `/studio/${convertToUrl(node.name)}-an${node.id}`, 0)}>${escape(node.name)}</a>`;
  })}</div></div>` : ``}
      ${!!source.genres ? `<div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Genres</span>
          <div class="flex flex-col items-center text-center gap-1 flex-wrap w-full">${each(source.genres, (genre) => {
    return `<a class="text-neutral-300 hover:text-rose-500"${add_attribute("href", `/browse?type=${source.type}&sort=TRENDING_DESC&genre=${spaceToAdd(genre)}`, 0)}>${escape(genre)}</a>`;
  })}</div></div>` : ``}
      ${!!source.tags ? `<div class="flex flex-col items-center gap-1 text-center"><span class="mr-1.5 font-bold font-lexenddeca text-lg md:text-xl xl:text-2xl">Tags</span>
          <div class="flex flex-col items-center text-center gap-1 flex-wrap w-full">${each(source.tags, (tag) => {
    return `<a class="text-neutral-300 hover:text-rose-500"${add_attribute("href", `/browse?type=${source.type}&sort=TRENDING_DESC&tag=${spaceToAdd(tag.name)}`, 0)}>${escape(tag.name)}</a>`;
  })}</div></div>` : ``}
      <div class="flex flex-wrap border-t border-neutral-700/80 pt-4"><div><!-- HTML_TAG_START -->${source.description}<!-- HTML_TAG_END --></div></div>
      <div class="mb-10"></div></div></div>` : ``}`;
});
const ModalFull = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isShow = false } = $$props;
  let { transitionDuration = 200 } = $$props;
  onDestroy(() => {
  });
  if ($$props.isShow === void 0 && $$bindings.isShow && isShow !== void 0)
    $$bindings.isShow(isShow);
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  return `${isShow ? `
  
  <div class="fixed bg-background/95 w-full h-full inset-0 z-50"><div class="h-screen w-full overflow-hidden">${slots.content ? slots.content({}) : ``}</div></div>` : ``}`;
});
const Description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobile, $$unsubscribe_isMobile;
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  let { isLoading: isLoading2 = true } = $$props;
  let { isSuccess: isSuccess2 = false } = $$props;
  let { source } = $$props;
  let { type = "ANIME" } = $$props;
  let bestRank = null;
  let nextAiringEpisode = null;
  let showInfo = false;
  let linkView = "";
  const sliceDescription = (string, length = 200) => {
    string = string.replace(/<br>\s*<br>/g, ". ");
    return string.length > length ? string.slice(0, length) + "..." : string;
  };
  if (!!source) {
    linkView = useCreateLink([
      "/",
      { value: source.type, convert: "lowcase" },
      `/${source.type === "ANIME" ? "view" : "read"}/`,
      "123412/",
      {
        value: source.title?.userPreferred,
        convert: "-"
      },
      "-an",
      source.id
    ]);
    if (!!source.nextAiringEpisode)
      nextAiringEpisode = `Episode ${source.nextAiringEpisode.episode} on ${useTimestampToString(source.nextAiringEpisode.airingAt)}`;
    if (source.rankings?.length)
      bestRank = source.rankings.sort((a, b) => {
        const aRank = a.rank;
        const bRabk = b.rank;
        return aRank - bRabk;
      })[0];
  }
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading2 !== void 0)
    $$bindings.isLoading(isLoading2);
  if ($$props.isSuccess === void 0 && $$bindings.isSuccess && isSuccess2 !== void 0)
    $$bindings.isSuccess(isSuccess2);
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$unsubscribe_isMobile();
  return `${isLoading2 ? `<div class="w-full max-w-7xl px-2 sm:px-6 md:px-9 gap-8 mx-auto flex animate-pulse"><div class="hidden xl:block lg:w-48 3xl:w-56 shrink-0 -mt-20"><div class="w-full aspect-w-2 aspect-h-3"><div class="w-full h-full overflow-hidden"><div class="w-full h-full bg-neutral-800 rounded-lg"></div></div></div></div>
    <div class="flex flex-col gap-y-3 w-full mt-2"><div class="flex flex-col-reverse sm:flex-col gap-y-3 sm:gap-y-4"><div class="flex space-x-3 actions sm:absolute sm:-mt-16"><div class="md:bg-neutral-700 rounded w-48 h-8"></div></div>
        <div class="title"><div class="md:bg-neutral-800 rounded w-72 h-8"></div></div></div>
      <div class="description space-y-3"><div class="md:bg-neutral-800 rounded w-full h-28"></div>
        </div></div></div>` : `${isSuccess2 ? `<div class="w-full max-w-7xl px-2 sm:px-6 md:px-9 gap-8 mx-auto flex"><div class="hidden xl:block lg:w-48 3xl:w-56 shrink-0 -mt-20"><div class="w-full aspect-w-2 aspect-h-3"><div class="w-full h-full rounded-lg overflow-hidden">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: source?.coverImage?.large ?? "",
      backgroundColor: source?.coverImage?.color,
      alt: source?.title?.userPreferred ?? ""
    },
    {},
    {}
  )}</div></div></div>
    <div class="flex flex-col gap-y-2 lg:gap-y-0 w-full mt-6 sm:mt-2"><div class="flex flex-col-reverse sm:flex-col gap-y-6"><div class="flex space-x-3 actions sm:absolute sm:-mt-16"><div class="read flex-1"><a${add_attribute("href", linkView, 0)}><button class="drop-shadow-xl bg-neutral-100 py-1.5 px-6 text-black font-bold font-lexenddeca rounded-md inline-flex justify-center items-center transition-opacity duration-300 hover:opacity-80 w-full">${type === "ANIME" ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-6 h-6"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path></svg>` : `<svg viewBox="0 0 20 20" class="fill-current w-6 h-6 scale-90"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M457 368.832a.5.5 0 0 0 .883.323l1.12-1.332a.876.876 0 0 1 .679-.323h3.522a2.793 2.793 0 0 0 2.796-2.784v-10.931a2.793 2.793 0 0 0-2.796-2.785h-3.454a2.75 2.75 0 0 0-2.75 2.75v15.082zm-1.5 0a.5.5 0 0 1-.883.323l-1.12-1.332a.876.876 0 0 0-.679-.323h-3.522a2.793 2.793 0 0 1-2.796-2.784v-10.931a2.793 2.793 0 0 1 2.796-2.785h3.454a2.75 2.75 0 0 1 2.75 2.75v15.082z"></path></g></svg>`}
                <span class="ml-2.5 3xl:text-lg">${escape(type === "ANIME" ? "Phát" : "Đọc")}</span></button></a></div>
          <div class="actions"><button class="drop-shadow-xl bg-neutral-600/80 py-1.5 px-3 rounded-md inline-flex items-center transition-opacity duration-300 hover:opacity-80"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-6 h-6 3xl:w-7 3xl:h-7"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></button></div></div>
        <div class="flex flex-col -mt-4 sm:mt-0 z-10">
          <h1 class="text-2xl xl:text-3xl !leading-tight font-bold font-lexenddeca line-clamp-2">${escape(source?.title?.userPreferred)}</h1>
          <div class="flex flex-wrap items-center gap-x-3 lg:gap-x-4 text-sm lg:text-base mt-2 lg:mt-4 text-neutral-400"><span class="bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded text-xs lg:text-sm uppercase">${escape(source?.format)}</span>
            ${source?.seasonYear ? `<span class="bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded text-xs lg:text-sm lowercase first-letter:uppercase">${escape(source.season)} ${escape(source.seasonYear)}</span>` : ``}
            ${source?.episodes ? `<span>${escape(source.episodes)} episodes</span>` : ``}
            ${source?.duration ? `<span>${escape(source.duration)} mins</span>` : ``}
            ${source?.volumes ? `<span>${escape(source.volumes)}.vol</span>` : ``}
            ${source?.chapters ? `<span>${escape(source.chapters)}.chapter</span>` : ``}</div>
          ${!!bestRank ? `<div class="flex flex-col gap-x-3 lg:gap-x-4 gap-y-1 text-sm lg:text-base mt-2 lg:mt-3">${!!bestRank ? `<div class="font-medium">${validate_component(RankingMedia, "RankingMedia").$$render($$result, { source: bestRank }, {}, {})}</div>` : ``}
              ${!!nextAiringEpisode ? `<div>
                  <span class="text-rose-500">${escape(nextAiringEpisode)}</span></div>` : ``}</div>` : ``}</div></div>
      <div class="w-full description group relative md:mt-2 3xl:mt-4 text-sm md:text-base">${source?.description ? `<div><!-- HTML_TAG_START -->${sliceDescription(source.description, $isMobile ? 150 : 200)}<!-- HTML_TAG_END -->
            
            <span class="text-neutral-200 cursor-pointer lg:hover:text-white">thêm</span></div>
          ` : `<div class="w-full text-neutral-300 hidden lg:block">Không có mô tả nào!
          </div>`}</div></div></div>

  
  ${validate_component(ModalFull, "ModalFull").$$render($$result, { isShow: showInfo }, {}, {
    content: () => {
      return `<div slot="content" class="w-full h-full max-w-4xl flex-1 mx-auto justify-items-center"><div class="my-auto">${validate_component(MediaInfo, "MediaInfo").$$render($$result, { source }, {}, {
        "header-left": () => {
          return `<button slot="header-left" class="shrink-0 p-1 ml-2 rounded-full bg-neutral-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6 fill-current"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg></button>`;
        }
      })}</div></div>`;
    }
  })}` : ``}`}`;
});
const UserActionForMedia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-wrap justify-evenly md:justify-center gap-x-3 md:gap-x-24 gap-y-4"><button class="flex flex-col gap-y-2.5 items-center justify-between text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-7 h-7 3xl:w-8 3xl:h-8 fill-current"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
    <span class="text-xs md:text-sm scale-90 3xl:scale-100 3xl:text-sm">Danh sách</span></button>
  <button class="flex flex-col gap-y-2.5 items-center justify-between text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-7 h-7 3xl:w-8 3xl:h-8 fill-current scale-90"><path d="M3 12c0 1.654 1.346 3 3 3 .794 0 1.512-.315 2.049-.82l5.991 3.424c-.018.13-.04.26-.04.396 0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3c-.794 0-1.512.315-2.049.82L8.96 12.397c.018-.131.04-.261.04-.397s-.022-.266-.04-.397l5.991-3.423c.537.505 1.255.82 2.049.82 1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .136.022.266.04.397L8.049 9.82A2.982 2.982 0 0 0 6 9c-1.654 0-3 1.346-3 3z"></path></svg>
    <span class="text-xs md:text-sm scale-90 3xl:scale-100 3xl:text-sm">Chia sẻ</span></button>
  <button class="flex flex-col gap-y-2.5 items-center justify-between text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-7 h-7 3xl:w-8 3xl:h-8 fill-current scale-90"><path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"></path></svg>
    <span class="text-xs md:text-sm scale-90 3xl:scale-100 3xl:text-sm">Xếp hạng</span></button>
  <button class="flex flex-col gap-y-2.5 items-center justify-between text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-7 h-7 3xl:w-8 3xl:h-8 fill-current scale-90"><path d="m14.303 6-3-2H6V2H4v20h2v-8h4.697l3 2H20V6z"></path></svg>
    <span class="text-xs md:text-sm scale-90 3xl:scale-100 3xl:text-sm">Báo vi phạm</span></button></div>`;
});
const MediaDetailsWarp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let isLoading$1 = true;
  let isSuccess$1 = false;
  let source = null;
  let routeID = null;
  let tabs = [];
  let pageType = null;
  let pageDescription = "";
  let pageUrl;
  let pageHref = null;
  let pageName = null;
  let pageTitle = null;
  const details = useMediaDetails({ id });
  const pageStore_unsubscribe = page.subscribe((value) => {
    routeID = value.route.id;
    pageUrl = value.params.url;
    pageHref = value.url.href;
  });
  if (!!routeID) {
    const routeId = routeID;
    const lastSlashIndex = routeId.lastIndexOf("[url]");
    pageName = routeId.slice(lastSlashIndex + 6) || null;
    if (!!pageName)
      pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  }
  const details_unsubscribe = details.subscribe((value) => {
    isLoading$1 = value.isLoading;
    isSuccess$1 = value.isSuccess;
    source = value.data ?? null;
    isLoading.set(value.isLoading);
    isSuccess.set(value.isSuccess);
    pageDescription = useHTMLtoPlainText(value.data?.description || "");
    pageTitle = `${value.data?.title?.userPreferred}${(value.data?.title?.userPreferred?.length || 41) <= 40 ? ` (${value.data?.title?.english})` : ""}${!!pageName ? ` — ${pageName}` : ""} — ${siteName}`;
    pageType = value.data?.type?.toLocaleLowerCase() || "anime";
    externalLink.set(value.data?.externalLinks ?? null);
    streamingEpisodes.set(value.data?.streamingEpisodes ?? null);
    if (!!value.data?.externalLinks && !!value.data?.externalLinks.length || !!value.data?.streamingEpisodes && value.data?.streamingEpisodes.length) {
      tabs.push({
        key: "watch",
        name: "External & Streaming Links",
        isActive: false,
        path: `/${pageType}/details/${pageUrl}`
      });
    }
    if (value.data?.characters?.edges && value.data?.characters?.edges.length) {
      tabs.push({
        key: "characters",
        name: "Characters",
        isActive: false,
        path: `/${pageType}/details/${pageUrl}/characters`
      });
      characters.set(value.data?.characters?.edges);
    }
    if (value.data?.staff?.edges && value.data?.staff?.edges.length) {
      tabs.push({
        key: "staff",
        name: "Staff",
        isActive: false,
        path: `/${pageType}/details/${pageUrl}/staff`
      });
      staff.set(value.data?.staff?.edges);
    }
    if (value.data?.relations?.edges && value.data?.relations?.edges.length) {
      tabs.push({
        key: "relations",
        name: "Relations",
        isActive: false,
        path: `/${pageType}/details/${pageUrl}/relations`
      });
      relations.set(value.data?.relations?.edges);
    }
    if (value.data?.recommendations?.nodes && value.data?.recommendations?.nodes.length) {
      tabs.push({
        key: "recommendations",
        name: "Recommendations",
        isActive: false,
        path: `/${pageType}/details/${pageUrl}/recommendations`
      });
      recommendations.set(value.data?.recommendations?.nodes);
    }
    rankings.set(value.data?.rankings ?? null);
  });
  onDestroy(() => {
    pageStore_unsubscribe();
    details_unsubscribe();
    tabActive.set("");
  });
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-10z29a5_START -->${$$result.title = `<title>${escape(pageTitle)}</title>`, ""}<meta name="title"${add_attribute("content", pageTitle, 0)}><meta name="description"${add_attribute("content", source?.description, 0)}><meta property="og:type" content="website"><meta property="og:url"${add_attribute("content", pageHref, 0)}><meta property="og:title"${add_attribute("content", pageTitle, 0)}><meta property="og:description"${add_attribute("content", pageDescription, 0)}><meta property="og:image"${add_attribute("content", siteSocialImageUrl, 0)}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${add_attribute("content", pageHref, 0)}><meta property="twitter:title"${add_attribute("content", pageTitle, 0)}><meta property="twitter:description"${add_attribute("content", pageDescription, 0)}><meta property="twitter:image"${add_attribute("content", siteSocialImageUrl, 0)}><meta name="application-name"${add_attribute("content", siteName, 0)}><meta name="apple-mobile-web-app-title"${add_attribute("content", siteName, 0)}><meta name="theme-color"${add_attribute("content", siteThemeColor, 0)}><meta name="msapplication-navbutton-color"${add_attribute("content", siteThemeColor, 0)}><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="msapplication-starturl" content="/"><link rel="canonical"${add_attribute("href", pageHref, 0)}><!-- HEAD_svelte-10z29a5_END -->`, ""}


${validate_component(BannerImage, "BannerImage").$$render(
      $$result,
      {
        isLoading: isLoading$1,
        isSuccess: isSuccess$1,
        imageUrl: source ? source?.bannerImage || source?.coverImage?.extraLarge || source?.coverImage?.large : ""
      },
      {},
      {}
    )}


${validate_component(Description, "Description").$$render($$result, { isLoading: isLoading$1, isSuccess: isSuccess$1, source }, {}, {})}

<div class="w-full max-w-7xl flex flex-col lg:flex-row gap-8 mx-auto lg:px-6 2xl:px-9">
  
  

  
  
  
  <div class="w-full grid grid-cols-1"><div class="col-span-1">

      
      <div class="my-10 md:my-12">${validate_component(UserActionForMedia, "UserActionForMedia").$$render($$result, {}, {}, {})}</div>
      
      ${validate_component(TabBase, "TabBase").$$render(
      $$result,
      { align: "left", isSuccess: isSuccess$1, items: tabs },
      {
        items: ($$value) => {
          tabs = $$value;
          $$settled = false;
        }
      },
      {}
    )}
      <div class="px-2 sm:px-4 lg:px-1 mt-8">${slots.default ? slots.default({}) : ``}</div></div>

    
    

    
    </div></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Hydrate as H, MediaDetailsWarp as M };
//# sourceMappingURL=MediaDetailsWarp-3ba7be34.js.map
