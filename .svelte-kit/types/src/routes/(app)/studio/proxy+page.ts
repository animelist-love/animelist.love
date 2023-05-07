// @ts-nocheck
// Import Types
import type { PageLoad } from "./$types";

// Import Libs
import useCharacterDetailsPrefetch from "@/hooks/useCharacterDetailsPrefetch";
import useIdFromUrl from "@/hooks/useIdFromUrl";

export const load = async ({ parent, params, fetch }: Parameters<PageLoad>[0]) => {
  const { queryClient, isBotSearch } = await parent();
  const Id = useIdFromUrl(params.url);
  const args = {
    id: Id,
  };

  if (isBotSearch) {
    const hasData = queryClient.getQueryData(["characters-details", { args }]);
    if (!hasData)
      await queryClient.prefetchInfiniteQuery({
        queryKey: ["characters-details", { args }],
        queryFn: () =>
          useCharacterDetailsPrefetch({
            args,
            customFetch: fetch,
          }),
      });
  }

  return {
    Id,
  };
};
