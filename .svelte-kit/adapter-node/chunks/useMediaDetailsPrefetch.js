import { b as getMediaDetails } from "./index3.js";
const useIdFromUrl = (url) => parseInt(url?.slice(url?.lastIndexOf("an") + 2));
const useMediaDetailsPrefetch = (args) => getMediaDetails(args);
export {
  useMediaDetailsPrefetch as a,
  useIdFromUrl as u
};
