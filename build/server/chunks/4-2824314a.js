import { u as useIdFromUrl, a as useMediaDetailsPrefetch, d as dehydrate } from './useMediaDetailsPrefetch-a3195c1d.js';
import './index3-f4b10c8e.js';

const load = async ({ parent, params }) => {
  const Id = useIdFromUrl(params.url);
  const { queryClient } = await parent();
  const args = {
    id: Id
  };
  const a = queryClient.getQueryData(["media-details", { args }]);
  if (!a) {
    await queryClient.prefetchQuery({
      queryKey: ["media-details", { args }],
      queryFn: () => useMediaDetailsPrefetch(args)
    });
  }
  return { Id, dehydratedState: dehydrate(queryClient) };
};

var _layout_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./_layout@(app).svelte-49b219d6.js')).default;
const file = '_app/immutable/entry/(app)-manga-details-_url_-layout@(app).svelte.81d8fd8f.js';
const universal_id = "src/routes/(app)/manga/details/[url]/+layout.ts";
const imports = ["_app/immutable/entry/(app)-manga-details-_url_-layout@(app).svelte.81d8fd8f.js","_app/immutable/chunks/index.28a8b093.js","_app/immutable/chunks/MediaDetailsWarp.d9416dc4.js","_app/immutable/chunks/index.f1452f32.js","_app/immutable/chunks/notifyManager.1ad54c9f.js","_app/immutable/chunks/context.e99e0733.js","_app/immutable/chunks/index.c00baded.js","_app/immutable/chunks/UserSettingStore.4034ccb9.js","_app/immutable/chunks/hydration.ab7dd347.js","_app/immutable/chunks/RankingMedia.95f9d18b.js","_app/immutable/chunks/index.63504a90.js","_app/immutable/chunks/createQuery.5564b7c8.js","_app/immutable/chunks/stores.d60c0cff.js","_app/immutable/chunks/singletons.0329af1e.js","_app/immutable/chunks/DetailPageStore.71110f6c.js","_app/immutable/chunks/index.6e5fca10.js","_app/immutable/chunks/Image.1cf0f7e3.js","_app/immutable/chunks/useCreateLink.cbad7577.js","_app/immutable/chunks/ModalFull.354243ca.js","_app/immutable/chunks/TabBase.6989e5a8.js","_app/immutable/entry/(app)-manga-details-_url_-layout.ts.b335aa1f.js","_app/immutable/chunks/useMediaDetailsPrefetch.416c9d19.js","_app/immutable/chunks/index.63504a90.js","_app/immutable/chunks/hydration.ab7dd347.js","_app/immutable/chunks/_layout.d679bdc3.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=4-2824314a.js.map
