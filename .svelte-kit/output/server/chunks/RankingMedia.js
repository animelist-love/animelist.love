import { b as getMediaDetails } from "./index3.js";
import { c as createQuery } from "./createQuery.js";
import { c as create_ssr_component, e as escape } from "./index2.js";
const useMediaDetails = (args, options) => {
  return createQuery({
    queryKey: ["media-details", { args }],
    queryFn: () => getMediaDetails(args),
    ...options
  });
};
const useTimestampToString = (timestamp) => {
  const date = new Date(timestamp * 1e3);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    month: "short",
    day: "numeric",
    hour12: false
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
const RankingMedia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { source } = $$props;
  let displayText = `on the list of ${source.context} ${source.format}${source.season || source.year ? ` for ${source.season ? source.season.toLowerCase() + " " : ""}${source.year ? source.year : ""}` : ""}`;
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  return `<span class="text-yellow-500">#${escape(source.rank)}</span>
<span class="text-yellow-500">${escape(displayText)}</span>`;
});
export {
  RankingMedia as R,
  useMediaDetails as a,
  useTimestampToString as u
};
