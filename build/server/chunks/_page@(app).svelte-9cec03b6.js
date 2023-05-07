import { c as create_ssr_component, b as subscribe, o as onDestroy, a as add_styles, v as validate_component, e as escape, f as each, n as noop } from './index2-5765a0e9.js';
import { p as page } from './stores-86a78013.js';
import { g as getID, f as fetchPOST } from './index4-37fe8b6c.js';
import { h as aniListDescriptionRewrite, j as aniListQueryStaff, b as aniListEndPoint } from './aniList-723ca79a.js';
import { c as createInfiniteQuery } from './createInfiniteQuery-55c5ebe1.js';
import { I as Image } from './Image-813c3f07.js';
import { T as TabBase } from './TabBase-63829cfd.js';
import { S as StaffVoiceActingRoleCard } from './StaffVoiceActingRoleCard-7e8b1416.js';
import './notifyManager-630cc085.js';
import './context-2e2aa9c1.js';
import './index-35f824f0.js';
import './infiniteQueryBehavior-f577a7d4.js';
import './Dot-4c5dd641.js';

const StaffVoiceActingRoleCardSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full flex justify-between gap-2 rounded-lg bg-neutral-500/20 p-2.5 lg:p-4 animate-pulse"><div class="w-full flex justify-between gap-4"><div class="w-1/2 flex gap-3 items-center"><div class="w-12 md:w-16 rounded shrink-0 overflow-hidden"><div class="aspect-w-11 aspect-h-16 bg-neutral-500/20"></div></div>
      <div class="w-full flex flex-col gap-1.5"><div class="w-20 h-4 bg-neutral-400/20 rounded"></div>
        <div class="w-12 h-2 bg-neutral-400/20 rounded"></div></div></div>
    
    <div class="w-1/2 flex gap-3 justify-end items-center"><div class="w-full flex flex-col gap-1.5"><div class="flex justify-end"><div class="w-20 h-4 bg-neutral-400/20 rounded"></div></div>
        <div class="flex justify-end"><div class="w-10 h-2 bg-neutral-400/20 rounded"></div></div></div>
      <div class="w-12 md:w-16 rounded shrink-0 overflow-hidden"><div class="aspect-w-1 aspect-h-1 rounded-full bg-neutral-400/20"></div></div></div></div></div>`;
});
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
      key: "voice",
      path: "voice-acting-roles",
      name: "Voice Acting Roles",
      isActive: false
    }
  ];
  let currentTab = tabsItems.find((e) => e.isActive)?.key;
  let urlStaff = $page.params.urlStaff;
  const staffID = getID(urlStaff);
  const characterQueryVariables = { id: staffID, sort: ["START_DATE_DESC"] };
  onDestroy(() => {
  });
  $$subscribe_characterDetail(characterDetail = createInfiniteQuery(
    ["staff", staffID],
    ({ pageParam = 1 }) => {
      const data = fetchPOST(aniListEndPoint, {
        query: aniListQueryStaff,
        variables: {
          ...characterQueryVariables,
          page: pageParam
        }
      });
      return data;
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data?.Staff?.characterMedia?.pageInfo?.hasNextPage)
          return lastPage.data?.Staff?.characterMedia?.pageInfo?.currentPage + 1;
        else
          return void 0;
      }
    }
  ));
  $$unsubscribe_characterDetail();
  $$unsubscribe_page();
  return `<div class="w-full mt-20 mb-6 relative">${$characterDetail.isSuccess ? `
    <div class="fixed inset-0 blur-3xl bg-cover bg-center bg-no-repeat opacity-10 -z-10 transition-all duration-300 scale-125"${add_styles({
    "background-image": `url("${$characterDetail?.data?.pages[0].data.Staff.image.large}")`
  })}></div>
    <div class="w-full xl:max-w-5xl 3xl:max-w-6xl flex flex-col lg:flex-row gap-6 p-4 mx-auto"><div class="w-52 h-52 shrink-0 mx-auto rounded-full overflow-hidden">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: $characterDetail?.data?.pages[0].data.Staff.image.large,
      alt: $characterDetail?.data?.pages[0].data.Staff.name.userPreferred
    },
    {},
    {}
  )}</div>
      <div class="w-full flex flex-col gap-6 lg:mt-4"><div class="flex flex-col items-center lg:items-start gap-y-2"><h1 class="text-2xl md:text-4xl font-bold font-lexenddeca">${escape($characterDetail?.data?.pages[0].data.Staff.name.userPreferred)}</h1>
          <div class="text-sm md:text-base">${$characterDetail?.data?.pages[0].data.Staff.name.native ? `<span class="last:after:content-[''] after:content-[',_']">${escape($characterDetail?.data?.pages[0].data.Staff.name.native)}</span>` : ``}
            ${each($characterDetail?.data?.pages[0].data.Staff.name.alternative, (alternative) => {
    return `<span class="last:after:content-[''] after:content-[',_']">${escape(alternative)}</span>`;
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

        
        
        <div class="${["flex flex-col", currentTab !== "about" ? "hidden" : ""].join(" ").trim()}"><div><span class="mr-2">Favourites:</span>${escape($characterDetail?.data?.pages[0].data.Staff.favourites)}</div>
          ${$characterDetail?.data?.pages[0].data.Staff.dateOfBirth.month ? `<div><span class="font-medium mr-2">Birthday:</span>${escape($characterDetail?.data?.pages[0].data.Staff.dateOfBirth.day)}/${escape($characterDetail?.data?.pages[0].data.Staff.dateOfBirth.month)}/${escape($characterDetail?.data?.pages[0].data.Staff.dateOfBirth.year)}</div>` : ``}
          ${$characterDetail?.data?.pages[0].data.Staff.age ? `<div><span class="font-medium mr-2">Age:</span>${escape($characterDetail?.data?.pages[0].data.Staff.age)}</div>` : ``}
          ${$characterDetail?.data?.pages[0].data.Staff.gender ? `<div><span class="font-medium mr-2">Gender:</span>${escape($characterDetail?.data?.pages[0].data.Staff.gender)}</div>` : ``}
          <div><span class="font-medium mr-2">Years active:</span>${escape($characterDetail?.data?.pages[0].data.Staff.yearsActive[0] || "?")} - ${escape($characterDetail?.data?.pages[0].data.Staff.yearsActive[1] || "present")}</div>
          ${$characterDetail?.data?.pages[0].data.Staff.homeTown ? `<div><span class="font-medium mr-2">Hometown:</span>${escape($characterDetail?.data?.pages[0].data.Staff.homeTown)}</div>` : ``}
          ${$characterDetail?.data?.pages[0].data.Staff.bloodType ? `<div><span class="font-medium mr-2">Blood Type:</span>${escape($characterDetail?.data?.pages[0].data.Staff.bloodType)}</div>` : ``}
          <!-- HTML_TAG_START -->${aniListDescriptionRewrite($characterDetail?.data?.pages[0].data.Staff.description)}<!-- HTML_TAG_END --></div>
        
        <div class="${[
    "flex flex-col gap-2 overflow-hidden",
    currentTab !== "voice" ? "hidden" : ""
  ].join(" ").trim()}">${each($characterDetail?.data?.pages, (page2) => {
    return `${each(page2?.data.Staff.characterMedia.edges, (media) => {
      return `${media.characters[0] ? `${validate_component(StaffVoiceActingRoleCard, "StaffVoiceActingRoleCard").$$render($$result, { source: media }, {}, {})}` : ``}`;
    })}`;
  })}
          
          ${$characterDetail.isLoading || $characterDetail.isFetching || $characterDetail.isFetchingNextPage ? `${each(Array(3), (noUse) => {
    return `${validate_component(StaffVoiceActingRoleCardSkeleton, "StaffVoiceActingRoleCardSkeleton").$$render($$result, {}, {}, {})}`;
  })}` : `${$characterDetail.hasNextPage ? `<div class="w-full my-20"></div>` : `<div class="w-full text-center my-20">Không còn kết quả nào!</div>`}`}</div></div></div>` : `<div class="w-full xl:max-w-5xl 3xl:max-w-6xl flex flex-col lg:flex-row gap-6 p-4 mx-auto animate-pulse"><div class="w-52 h-52 shrink-0 mx-auto rounded-full bg-neutral-800"></div>
      <div class="w-full flex flex-col gap-6 lg:mt-4"><div class="flex flex-col items-center lg:items-start gap-y-2"><div class="w-60 h-6 bg-neutral-800 rounded"></div>
          <div class="w-20 h-4 bg-neutral-800 rounded"></div></div>
        <div class="w-full h-12 rounded bg-neutral-800"></div>
        <div class="w-full h-28 rounded bg-neutral-800"></div></div></div>`}</div>







`;
});

export { Page_app as default };
//# sourceMappingURL=_page@(app).svelte-9cec03b6.js.map
