import { dehydrate } from "@tanstack/query-core";
import { u as useIdFromUrl, a as useMediaDetailsPrefetch } from "../../../../../../chunks/useMediaDetailsPrefetch.js";
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
export {
  load
};
