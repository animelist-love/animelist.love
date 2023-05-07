import { c as create_ssr_component, g as createEventDispatcher, f as add_attribute, d as each, v as validate_component, b as subscribe, o as onDestroy, n as noop } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { d as aniListQueryCollection, b as aniListEndPoint, c as aniListqueryMedia, e as aniListQueryBrowseCharacter, g as aniListQueryBrowseStaff } from "../../../../chunks/aniList.js";
import { c as createQuery } from "../../../../chunks/createQuery.js";
import { c as createInfiniteQuery } from "../../../../chunks/createInfiniteQuery.js";
import { c as convertToUrl, f as fetchPOST } from "../../../../chunks/index4.js";
import { C as CardVertical } from "../../../../chunks/CardVertical.js";
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { search_value = "" } = $$props;
  if ($$props.search_value === void 0 && $$bindings.search_value && search_value !== void 0)
    $$bindings.search_value(search_value);
  return `<div class="flex w-full px-2 md:px-6 lg:px-8 sticky top-14 z-10"><div class="flex w-full justify-between items-center relative text-white mb-6"><span class="absolute inset-y-0 left-0 flex items-center">
      <span class="p-2 bg-neutral-600/60 rounded-lg cursor-pointer">Filter</span></span>
    
    <span class="${[
    "absolute inset-y-0 right-0 hidden items-center cursor-pointer hover:text-neutral-600",
    search_value.length ? "!flex" : ""
  ].join(" ").trim()}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current w-5 h-5"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg></span>
    <input type="text" name="search" class="w-full bg-background py-6 pl-16 pr-14 text-white focus:outline-none placeholder:text-neutral-500" placeholder="Type name anime/manga" autocomplete="off"${add_attribute("value", search_value, 0)}></div></div>`;
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
        source: mediaData,
        to: `/${mediaData.type.toLowerCase()}/details/${convertToUrl(mediaData.title.userPreferred)}-an${mediaData.id}`
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
const CharacterList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
        source: mediaData,
        to: `/character/${convertToUrl(mediaData.name.userPreferred)}-an${mediaData.id}`
      },
      {},
      {}
    )}
        </div>`;
  })}</div></div>` : `${isLoading ? `
  <div class="flex justify-center py-2 lg:py-4 px-2 md:px-6 lg:px-8"><div class="w-full grid grid-cols-12 gap-x-1.5 sm:gap-x-2.5 gap-y-0 md:grid-cols-5 md:gap-2 lg:md:gap-3 2xl:grid-cols-7 2xl:gap-3 3xl:grid-cols-9 3xl:gap-4">${each(Array(8), (noUse) => {
    return `<div class="col-span-4 md:col-span-1 2xl:col-span-1">${validate_component(CardVertical, "CardVertical").$$render($$result, {}, {}, {})}
        </div>`;
  })}</div></div>` : ``}`}`;
});
const StaffList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
        source: mediaData,
        to: `/staff/${convertToUrl(mediaData.name.userPreferred)}-an${mediaData.id}`
      },
      {},
      {}
    )}
        </div>`;
  })}</div></div>` : `${isLoading ? `
  <div class="flex justify-center py-2 lg:py-4 px-2 md:px-6 lg:px-8"><div class="w-full grid grid-cols-12 gap-x-1.5 sm:gap-x-2.5 gap-y-0 md:grid-cols-5 md:gap-2 lg:md:gap-3 2xl:grid-cols-7 2xl:gap-3 3xl:grid-cols-9 3xl:gap-4">${each(Array(8), (noUse) => {
    return `<div class="col-span-4 md:col-span-1 2xl:col-span-1">${validate_component(CardVertical, "CardVertical").$$render($$result, {}, {}, {})}
        </div>`;
  })}</div></div>` : ``}`}`;
});
const Page_app = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMedia;
  let isCharacter;
  let isStaff;
  let getMedia;
  let $getMedia, $$unsubscribe_getMedia = noop, $$subscribe_getMedia = () => ($$unsubscribe_getMedia(), $$unsubscribe_getMedia = subscribe(getMedia, ($$value) => $getMedia = $$value), getMedia);
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let searchParams_type = $page.url.searchParams.has("type") ? {
    value: $page.url.searchParams.get("type"),
    label: ""
  } : { value: "ANIME", label: "Anime" };
  let searchParams_search = $page.url.searchParams.get("search") || "";
  let searchParams_genre = $page.url.searchParams.has("genre") ? $page.url.searchParams.getAll("genre").map((value) => {
    return { value, label: "" };
  }) : null;
  let searchParams_tag = $page.url.searchParams.has("tag") ? $page.url.searchParams.getAll("tag").map((value) => {
    return { value, label: "" };
  }) : null;
  let searchParams_format = $page.url.searchParams.has("format") ? $page.url.searchParams.getAll("format").map((value) => {
    return { value, label: "" };
  }) : null;
  let searchParams_status = $page.url.searchParams.has("status") ? {
    value: $page.url.searchParams.get("status"),
    label: ""
  } : null;
  let searchParams_country = $page.url.searchParams.has("country") ? {
    value: $page.url.searchParams.get("country"),
    label: ""
  } : null;
  let searchParams_year = $page.url.searchParams.has("year") ? {
    value: $page.url.searchParams.get("year"),
    label: ""
  } : null;
  let searchParams_season = $page.url.searchParams.has("season") ? {
    value: $page.url.searchParams.get("season"),
    label: ""
  } : null;
  let searchParams_sort = $page.url.searchParams.has("sort") ? {
    value: $page.url.searchParams.get("sort"),
    label: ""
  } : null;
  let searchParams_birthday = $page.url.searchParams.has("birthday") ? $page.url.searchParams.get("birthday") === "true" ? true : false : false;
  let search_value = searchParams_search;
  let typeBrowse_value = searchParams_type;
  let mediaGenres_value = searchParams_genre;
  let mediaTags_value = searchParams_tag;
  let mediaFormat_value = searchParams_format;
  let mediaStatus_value = searchParams_status;
  let mediaCountry_value = searchParams_country;
  let mediaYear_value = searchParams_year;
  let mediaSeason_value = searchParams_season;
  let mediaSort_value = searchParams_sort;
  let isBirthday_value = searchParams_birthday;
  let isLoadingCollection = true;
  let isChangingType = false;
  (() => {
    const years = [];
    for (let index = (/* @__PURE__ */ new Date()).getFullYear(); index >= 1940; index--) {
      years.push({
        value: index.toString(),
        label: index.toString()
      });
    }
    return years;
  })();
  let queryVariables = {
    type: $page.url.searchParams.get("type") || "ANIME",
    search: $page.url.searchParams.get("search"),
    genre_in: null,
    tag_in: null,
    format_in: null,
    status: null,
    countryOfOrigin: null,
    year: null,
    season: null,
    sort: null,
    isBirthday: null,
    perPage: 27
  };
  const getCollection = createQuery(["collectionData"], () => {
    const data = fetchPOST(aniListEndPoint, { query: aniListQueryCollection });
    return data;
  });
  const unSubscribeCollection = getCollection.subscribe((collectionData) => {
    isLoadingCollection = collectionData.isLoading;
    if (collectionData.data && !isLoadingCollection) {
      collectionData.data.data.GenreCollection?.map((genre) => {
        return { value: genre, label: genre };
      });
      collectionData.data.data.MediaTagCollection?.map((tag) => {
        return { value: tag.name, label: tag.name };
      });
    }
  });
  const removeEmptyValues = (obj) => {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      if (value !== "" && value !== null && !(Array.isArray(value) && value.length === 0)) {
        result[key] = value;
      }
    }
    return result;
  };
  const fetchMedia = (pageParam) => {
    const data = fetchPOST(aniListEndPoint, {
      query: isMedia ? aniListqueryMedia : isCharacter ? aniListQueryBrowseCharacter : aniListQueryBrowseStaff,
      variables: removeEmptyValues({
        ...queryVariables,
        page: pageParam,
        sort: queryVariables["sort"] || ["FAVOURITES_DESC", "ID_DESC"]
      })
    });
    return data;
  };
  const changeType = (newType, searchParamsKey) => {
    if (newType.value !== queryVariables.type) {
      isChangingType = true;
      queryVariables = {
        type: newType?.value || "ANIME",
        search: "",
        genre_in: null,
        tag_in: null,
        format_in: null,
        status: null,
        countryOfOrigin: null,
        year: null,
        season: null,
        sort: null,
        isBirthday: null,
        perPage: 27
      };
      $page.url.searchParams.delete("search");
      $page.url.searchParams.delete("genre");
      $page.url.searchParams.delete("tag");
      $page.url.searchParams.delete("format");
      $page.url.searchParams.delete("status");
      $page.url.searchParams.delete("country");
      $page.url.searchParams.delete("year");
      $page.url.searchParams.delete("season");
      $page.url.searchParams.delete("sort");
      $page.url.searchParams.set(searchParamsKey, newType?.value || "ANIME");
      search_value = "";
      mediaGenres_value = null;
      mediaTags_value = null;
      mediaFormat_value = null;
      mediaStatus_value = null;
      mediaCountry_value = null;
      mediaYear_value = null;
      mediaSeason_value = null;
      isBirthday_value = false;
      mediaSort_value = null;
      isChangingType = false;
    }
    return newType.value;
  };
  const updateFilterData = (newData, searchParamsKey) => {
    if (isChangingType)
      return null;
    if (!newData) {
      $page.url.searchParams.delete(searchParamsKey);
      return null;
    } else if (Array.isArray(newData)) {
      $page.url.searchParams.delete(searchParamsKey);
      newData.forEach((selection) => $page.url.searchParams.append(searchParamsKey, selection.value));
      return newData.map((selection) => selection.value);
    } else {
      if (newData.value) {
        $page.url.searchParams.set(searchParamsKey, newData.value);
      }
      return newData.value;
    }
  };
  onDestroy(() => {
    unSubscribeCollection();
  });
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    isMedia = typeBrowse_value.value && ["ANIME", "MANGA"].includes(typeBrowse_value.value);
    isCharacter = typeBrowse_value.value === "CHARACTERS";
    isStaff = typeBrowse_value.value === "STAFF";
    queryVariables["type"] = changeType(typeBrowse_value, "type");
    queryVariables["genre_in"] = updateFilterData(mediaGenres_value, "genre");
    queryVariables["tag_in"] = updateFilterData(mediaTags_value, "tag");
    queryVariables["format_in"] = updateFilterData(mediaFormat_value, "format");
    queryVariables["status"] = updateFilterData(mediaStatus_value, "status");
    queryVariables["countryOfOrigin"] = updateFilterData(mediaCountry_value, "country");
    queryVariables["year"] = mediaYear_value ? updateFilterData(mediaYear_value, "year") + "%" : null;
    queryVariables["season"] = updateFilterData(mediaSeason_value, "season");
    queryVariables["sort"] = updateFilterData(mediaSort_value, "sort");
    queryVariables["isBirthday"] = isBirthday_value;
    $$subscribe_getMedia(getMedia = createInfiniteQuery(["media", queryVariables], ({ pageParam = 1 }) => fetchMedia(pageParam), {
      // cacheTime: 0,
      enabled: !isChangingType,
      getNextPageParam: (lastPage) => {
        if (lastPage.data?.Page?.pageInfo?.hasNextPage)
          return lastPage.data?.Page?.pageInfo?.currentPage + 1;
        else
          return void 0;
      }
    }));
    $$rendered = `${``}
<div class="flex mt-20"><div class="w-full relative">${validate_component(Search, "Search").$$render(
      $$result,
      { search_value },
      {
        search_value: ($$value) => {
          search_value = $$value;
          $$settled = false;
        }
      },
      {}
    )}
    ${$getMedia.isSuccess ? `${isMedia ? `${each($getMedia.data?.pages, (page2) => {
      return `${validate_component(MediaList, "MediaList").$$render(
        $$result,
        {
          isLoading: false,
          isSuccess: true,
          source: page2.data.Page?.media
        },
        {},
        {}
      )}`;
    })}` : `${isCharacter ? `${each($getMedia.data?.pages, (page2) => {
      return `${validate_component(CharacterList, "CharacterList").$$render(
        $$result,
        {
          isLoading: false,
          isSuccess: true,
          source: page2.data.Page?.characters
        },
        {},
        {}
      )}`;
    })}` : `${isStaff ? `${each($getMedia.data?.pages, (page2) => {
      return `${validate_component(StaffList, "StaffList").$$render(
        $$result,
        {
          isLoading: false,
          isSuccess: true,
          source: page2.data.Page?.staff
        },
        {},
        {}
      )}`;
    })}` : ``}`}`}` : ``}
    ${$getMedia.isLoading || $getMedia.isFetching || $getMedia.isFetchingNextPage ? `${validate_component(MediaList, "MediaList").$$render($$result, {}, {}, {})}` : `${$getMedia.hasNextPage ? `<div class="h-[calc(130vh/2)] w-full"></div>` : `<div class="w-full text-center my-20">Không còn kết quả nào!</div>`}`}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_getMedia();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page_app as default
};
