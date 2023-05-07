import { c as create_ssr_component, b as subscribe, o as onDestroy, v as validate_component, f as each, e as escape, n as noop } from './index2-5765a0e9.js';
import { p as page } from './stores-86a78013.js';
import { g as getID, f as fetchPOST, a as convertToUrl } from './index4-37fe8b6c.js';
import { k as aniListQueryStudio, b as aniListEndPoint } from './aniList-723ca79a.js';
import { c as createInfiniteQuery } from './createInfiniteQuery-55c5ebe1.js';
import { C as CardVertical } from './CardVertical-1f545b80.js';
import './notifyManager-630cc085.js';
import './context-2e2aa9c1.js';
import './index-35f824f0.js';
import './infiniteQueryBehavior-f577a7d4.js';
import './Image-813c3f07.js';

const Description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isLoading = true } = $$props;
  let { isSuccess = false } = $$props;
  let { source = [] } = $$props;
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  if ($$props.isSuccess === void 0 && $$bindings.isSuccess && isSuccess !== void 0)
    $$bindings.isSuccess(isSuccess);
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  return `<div class="w-full flex flex-col gap-8 justify-center mt-20 mb-6">${isLoading ? `<div class="w-full flex gap-x-4 justify-center items-center bg-neutral-900 p-4 md:p-8 animate-pulse"><div class="w-56 h-10 bg-neutral-800 rounded"></div>
      <div class="w-24 h-10 bg-neutral-800 rounded"></div></div>` : `${isSuccess ? `<div class="w-full flex gap-x-4 justify-center items-center bg-neutral-900 p-4 md:p-8"><h2 class="font-medium text-3xl">${escape(source.name)}</h2>
      <div class="bg-rose-500 py-1 px-3 rounded-lg inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-5 h-5"><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>
        <span class="ml-2 font-medium">${escape(source.favourites)}</span></div></div>` : ``}`}</div>`;
});
const MediaList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isLoading = true } = $$props;
  let { isSuccess = false } = $$props;
  let { source = [] } = $$props;
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  if ($$props.isSuccess === void 0 && $$bindings.isSuccess && isSuccess !== void 0)
    $$bindings.isSuccess(isSuccess);
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  return `${isSuccess && source.length ? `
  <div class="flex justify-center py-2 lg:py-4 px-2 md:px-6 lg:px-8"><div class="w-full grid grid-cols-12 gap-x-1.5 sm:gap-x-2.5 gap-y-0 md:grid-cols-5 md:gap-2 lg:md:gap-3 2xl:grid-cols-7 2xl:gap-3 3xl:grid-cols-9 3xl:gap-4">${each(source, (mediaData, i) => {
    return `<div class="col-span-4 md:col-span-1 2xl:col-span-1">${validate_component(CardVertical, "CardVertical").$$render(
      $$result,
      {
        isLoading: false,
        source: mediaData.node,
        to: `/${mediaData.node.type.toLowerCase()}/details/${convertToUrl(mediaData.node.title.userPreferred)}-an${mediaData.node.id}`
      },
      {},
      {}
    )}
        </div>`;
  })}</div></div>` : `${isLoading ? `
  <div class="flex justify-center py-2 lg:py-4 px-2 md:px-6 lg:px-8"><div class="w-full grid grid-cols-12 gap-x-1.5 sm:gap-x-2.5 gap-y-0 md:grid-cols-5 md:gap-2 lg:md:gap-3 2xl:grid-cols-7 2xl:gap-3 3xl:grid-cols-9 3xl:gap-4">${each(Array(9), (noUse) => {
    return `<div class="col-span-4 md:col-span-1 2xl:col-span-1">${validate_component(CardVertical, "CardVertical").$$render($$result, {}, {}, {})}
        </div>`;
  })}</div></div>` : ``}`}`;
});
const Page_app = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let studioDetail;
  let $studioDetail, $$unsubscribe_studioDetail = noop, $$subscribe_studioDetail = () => ($$unsubscribe_studioDetail(), $$unsubscribe_studioDetail = subscribe(studioDetail, ($$value) => $studioDetail = $$value), studioDetail);
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let urlStudio = $page.params.urlStudio;
  const studioID = getID(urlStudio);
  const studioQueryVariables = { id: studioID, sort: ["START_DATE_DESC"] };
  onDestroy(() => {
  });
  $$subscribe_studioDetail(studioDetail = createInfiniteQuery(
    ["studio", studioID],
    ({ pageParam = 1 }) => {
      const data = fetchPOST(aniListEndPoint, {
        query: aniListQueryStudio,
        variables: { ...studioQueryVariables, page: pageParam }
      });
      return data;
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data?.Studio?.media?.pageInfo?.hasNextPage)
          return lastPage.data?.Studio?.media?.pageInfo?.currentPage + 1;
        else
          return void 0;
      }
    }
  ));
  $$unsubscribe_studioDetail();
  $$unsubscribe_page();
  return `${validate_component(Description, "Description").$$render(
    $$result,
    {
      isLoading: $studioDetail.isLoading,
      isSuccess: $studioDetail.isSuccess,
      source: $studioDetail?.data?.pages[0].data.Studio
    },
    {},
    {}
  )}
${$studioDetail.isSuccess ? `${each($studioDetail.data.pages, (pages) => {
    return `${validate_component(MediaList, "MediaList").$$render(
      $$result,
      {
        isLoading: false,
        isSuccess: $studioDetail.isSuccess,
        source: pages.data.Studio.media.edges
      },
      {},
      {}
    )}`;
  })}` : ``}

${$studioDetail.isLoading || $studioDetail.isFetching || $studioDetail.isFetchingNextPage ? `${validate_component(MediaList, "MediaList").$$render($$result, {}, {}, {})}` : `${$studioDetail.hasNextPage ? `<div class="h-[calc(130vh/2)] w-full"></div>` : `<div class="w-full text-center my-20">Không còn kết quả nào!</div>`}`}`;
});

export { Page_app as default };
//# sourceMappingURL=_page@(app).svelte-9691112a.js.map
