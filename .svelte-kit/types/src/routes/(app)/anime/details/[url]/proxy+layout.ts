// @ts-nocheck
// Import Types
import type { LayoutLoad } from "./$types";
import type { Media } from "@/types/anilist";

// Import Libs
import useIdFromUrl from "@/hooks/useIdFromUrl";
import useMediaDetailsPrefetch from "@/hooks/useMediaDetailsPrefetch";

export const load = async ({ parent, params, fetch }: Parameters<LayoutLoad>[0]) => {
  const { queryClient, isBotSearch } = await parent();
  const Id = useIdFromUrl(params.url);
  const args = {
    id: Id,
  };
  if (isBotSearch) {
    const hasData = queryClient.getQueryData(["media-details", { args }]);
    if (!hasData) {
      await queryClient.prefetchQuery({
        queryKey: ["media-details", { args }],
        queryFn: (): Promise<Media> =>
          useMediaDetailsPrefetch({
            args,
            customFetch: fetch,
          }),
      });
    }
  }

  return { Id };
};
