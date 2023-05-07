import { c as create_ssr_component, o as onDestroy, v as validate_component, f as each, b as subscribe, a as add_styles, j as createEventDispatcher, h as add_attribute, e as escape, n as noop } from './index2-5765a0e9.js';
import { a as aniListQueryAiringSchedule, b as aniListEndPoint } from './aniList-723ca79a.js';
import { c as createInfiniteQuery } from './createInfiniteQuery-55c5ebe1.js';
import { f as fetchPOST, a as convertToUrl } from './index4-37fe8b6c.js';
import { d as isTouchDevice } from './UserSettingStore-30a153bb.js';
import { I as Image } from './Image-813c3f07.js';
import { D as Dot } from './Dot-4c5dd641.js';
import { T as TimelineCardSkeleton } from './TimelineCardSkeleton-245db64c.js';
import './notifyManager-630cc085.js';
import './infiniteQueryBehavior-f577a7d4.js';
import './context-2e2aa9c1.js';
import './index-35f824f0.js';

const ScrollbarHozirontal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isTouchDevice, $$unsubscribe_isTouchDevice;
  $$unsubscribe_isTouchDevice = subscribe(isTouchDevice, (value) => $isTouchDevice = value);
  let { isNavigation = false } = $$props;
  let scrollBar;
  if ($$props.isNavigation === void 0 && $$bindings.isNavigation && isNavigation !== void 0)
    $$bindings.isNavigation(isNavigation);
  $$unsubscribe_isTouchDevice();
  return `<div class="${["flex justify-center relative", isNavigation || !$isTouchDevice ? "mt-12" : ""].join(" ").trim()}">${isNavigation || !$isTouchDevice ? `<div class="absolute flex gap-x-2 right-2 -top-12">
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
const Days = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  const date = /* @__PURE__ */ new Date();
  const dayLabels = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
  const currentStartTimestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const endTimestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999).getTime();
  const days = [
    ...[...Array(7)].map((d, index) => {
      const temp = (index + 1) * 24 * 60 * 60 * 1e3;
      return {
        start: currentStartTimestamp - temp,
        end: endTimestamp - temp,
        isCurrentDay: false,
        isActive: false
      };
    }).reverse(),
    {
      start: currentStartTimestamp,
      end: endTimestamp,
      isCurrentDay: true,
      isActive: true
    },
    ...[...Array(14)].map((d, index) => {
      const temp = (index + 1) * 24 * 60 * 60 * 1e3;
      return {
        start: currentStartTimestamp + temp,
        end: endTimestamp + temp,
        isCurrentDay: false,
        isActive: false
      };
    })
  ];
  days.findIndex((day) => day.isActive);
  const getDateString = (date2) => {
    if (date2 === currentStartTimestamp)
      return "Hôm nay";
    const parseDate = new Date(date2);
    return `${parseDate.getDate()} tháng ${parseDate.getMonth() + 1}`;
  };
  const getDayString = (date2) => dayLabels[new Date(date2).getDay()];
  return `<div class="w-full">${validate_component(ScrollbarHozirontal, "ScrollbarHozirontal").$$render($$result, {}, {}, {
    default: () => {
      return `${each(days, (day, index) => {
        return `
      <div${add_attribute("class", (day.isActive ? "bg-white/20 " : "bg-neutral-600/20 ") + "flex flex-col justify-center items-center shrink-0 text-center snap-start mr-2 lg:mr-4 w-36 lg:w-48 px-6 py-4 rounded-lg cursor-pointer", 0)}${add_attribute("data-time", day.start, 0)}><span class="font-bold font-lexenddeca">${escape(getDayString(day.start))}</span>
        <div class="${[
          "text-sm text-neutral-400",
          (day.isCurrentDay ? "font-bold" : "") + " " + (day.isCurrentDay ? "font-lexenddeca" : "")
        ].join(" ").trim()}">${escape(getDateString(day.start))}</div>
      </div>`;
      })}`;
    }
  })}</div>`;
});
const TimelineCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { source } = $$props;
  let { time } = $$props;
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.time === void 0 && $$bindings.time && time !== void 0)
    $$bindings.time(time);
  return `<div class="w-full flex flex-wrap rounded-lg bg-neutral-500/20 p-4"><div class="flex justify-between w-full gap-4"><a class="w-full"${add_attribute("href", `/${source.media.type.toLowerCase()}/details/${convertToUrl(source.media.title.userPreferred)}-an${source.media.id}`, 0)}><div class="flex gap-4"><div class="w-16 rounded shrink-0 overflow-hidden"><div class="aspect-w-11 aspect-h-16">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: source.media.coverImage.large,
      backgroundColor: source.media.coverImage.color
    },
    {},
    {}
  )}</div></div>
        <div class="w-full flex flex-col justify-start md:justify-between gap-2"><div class="flex flex-col gap-1.5"><h3 class="font-bold font-lexenddeca line-clamp-2">${escape(source.media.title.userPreferred)}</h3>
            <div class="hidden md:flex flex-wrap gap-1.5 text-sm items-center">${each(source.media.genres, (genre) => {
    return `<span>${escape(genre)}</span>
                ${validate_component(Dot, "Dot").$$render(
      $$result,
      {
        backgroundColor: source.media.coverImage.color
      },
      {},
      {}
    )}`;
  })}</div></div>
          <div class="flex text-sm items-center gap-2"><span>${escape(time)}</span><span>Episode ${escape(source?.episode)}</span></div></div></div></a>
    <div class="flex items-center z-10"><button class="text-neutral-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6 fill-current"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></button></div></div></div>`;
});
const ListMedia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { source = [] } = $$props;
  let sourceFilted = {};
  let numberSource = 0;
  const pad = (number) => {
    return number < 10 ? "0" + number.toString() : number.toString();
  };
  const getTimeString = (date) => {
    const parseDate = new Date(parseInt(date) * 1e3);
    return `${pad(parseDate.getHours())}:${pad(parseDate.getMinutes())}`;
  };
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  {
    if (numberSource !== source.length) {
      numberSource = source.length - 1 > numberSource ? 1 : source.length;
      for (let index = numberSource - 1; index < source.length; index++) {
        const mediaData = source[index];
        mediaData?.data.Page.airingSchedules.forEach((airingSchedule) => {
          if (airingSchedule.media.isAdult)
            return;
          const key = airingSchedule.airingAt;
          if (!sourceFilted[key]) {
            sourceFilted[key] = [];
          }
          sourceFilted[key].push(airingSchedule);
        });
      }
    }
  }
  return `<div class="w-full"><ol class="w-full">${each(Object.keys(sourceFilted), (timeline) => {
    return `<li class="w-full flex flex-col gap-2 mb-6"><div class="flex"><span class="text-lg font-bold font-lexenddeca">${escape(getTimeString(timeline))}</span></div>
        <div class="w-full flex flex-col gap-2">${each(sourceFilted[timeline], (airingSchedule) => {
      return `${validate_component(TimelineCard, "TimelineCard").$$render(
        $$result,
        {
          source: airingSchedule,
          time: getTimeString(timeline)
        },
        {},
        {}
      )}`;
    })}</div>
      </li>`;
  })}</ol></div>`;
});
const Page_app = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mediaData;
  let $mediaData, $$unsubscribe_mediaData = noop, $$subscribe_mediaData = () => ($$unsubscribe_mediaData(), $$unsubscribe_mediaData = subscribe(mediaData, ($$value) => $mediaData = $$value), mediaData);
  const date = /* @__PURE__ */ new Date();
  const currentStartTimestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const currentEndTimestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999).getTime();
  const queryVariables = {
    type: "ANIME",
    sort: ["TIME"],
    perPage: 15,
    airingAt_greater: 0,
    airingAt_lesser: 0
  };
  const updateTime = (start, end) => {
    queryVariables["airingAt_greater"] = Math.floor(start / 1e3);
    queryVariables["airingAt_lesser"] = Math.floor(end / 1e3);
  };
  updateTime(currentStartTimestamp, currentEndTimestamp);
  onDestroy(() => {
  });
  $$subscribe_mediaData(mediaData = createInfiniteQuery({
    queryKey: ["timeline", queryVariables],
    queryFn: ({ pageParam = 1 }) => {
      const data = fetchPOST(aniListEndPoint, {
        query: aniListQueryAiringSchedule,
        variables: { ...queryVariables, page: pageParam }
      });
      return data;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.data?.Page?.pageInfo?.hasNextPage)
        return lastPage.data?.Page?.pageInfo?.currentPage + 1;
      else
        return void 0;
    },
    enabled: !!(queryVariables.airingAt_greater && queryVariables.airingAt_lesser)
  }));
  $$unsubscribe_mediaData();
  return `${$mediaData?.data?.pages[0].data.Page.airingSchedules[0].media ? `
  <div class="fixed inset-0 blur-3xl bg-cover bg-center bg-no-repeat opacity-10 -z-10"${add_styles({
    "background-image": `url("${$mediaData.data?.pages[0].data.Page.airingSchedules[0].media.coverImage.large}")`
  })}></div>` : ``}

<div class="mt-20"><div class="flex flex-col gap-10 py-2 lg:py-4 px-2 md:px-6 lg:px-8"><div class="w-full xl:max-w-4xl 3xl:max-w-5xl mx-auto">${validate_component(Days, "Days").$$render($$result, {}, {}, {})}</div>
    <div class="w-full xl:max-w-4xl 3xl:max-w-5xl mx-auto">${$mediaData.isSuccess ? `${validate_component(ListMedia, "ListMedia").$$render($$result, { source: $mediaData.data?.pages || [] }, {}, {})}` : ``}
      ${$mediaData.isLoading || $mediaData.isFetching || $mediaData.isFetchingNextPage ? `<div class="w-full flex flex-col gap-2 mt-2">${each(Array(3), (noUse) => {
    return `${validate_component(TimelineCardSkeleton, "TimelineCardSkeleton").$$render($$result, {}, {}, {})}`;
  })}</div>` : `${$mediaData.hasNextPage ? `<div class="w-full my-20"></div>` : `<div class="w-full text-center my-20">Không còn kết quả nào!</div>`}`}</div></div></div>`;
});

export { Page_app as default };
//# sourceMappingURL=_page@(app).svelte-9cec87f0.js.map
