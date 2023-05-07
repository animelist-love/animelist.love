import { c as create_ssr_component, b as subscribe, d as each, f as add_attribute, e as escape, v as validate_component, o as onDestroy, a as add_styles } from "../../../chunks/index2.js";
/* empty css                   */import { w as writable } from "../../../chunks/index.js";
import { i as isTopNavbarBgTransparent, a as isSideNavBar, b as isBottomTabBar } from "../../../chunks/UserSettingStore.js";
import { p as page } from "../../../chunks/stores.js";
import { u as useTimestampToString, R as RankingMedia, a as useMediaDetails } from "../../../chunks/RankingMedia.js";
import { u as useCreateLink } from "../../../chunks/useCreateLink.js";
import { I as Image } from "../../../chunks/Image.js";
import { D as Dot } from "../../../chunks/Dot.js";
import { g as getCharacterDetails, a as getStaffDetails } from "../../../chunks/index3.js";
import { c as createQuery } from "../../../chunks/createQuery.js";
import { C as CharacterCard } from "../../../chunks/CharacterCard.js";
import { S as StaffVoiceActingRoleCard } from "../../../chunks/StaffVoiceActingRoleCard.js";
var DetailsModalStackTypes = /* @__PURE__ */ ((DetailsModalStackTypes2) => {
  DetailsModalStackTypes2[DetailsModalStackTypes2["Media"] = 0] = "Media";
  DetailsModalStackTypes2[DetailsModalStackTypes2["Character"] = 1] = "Character";
  DetailsModalStackTypes2[DetailsModalStackTypes2["Staff"] = 2] = "Staff";
  return DetailsModalStackTypes2;
})(DetailsModalStackTypes || {});
const currentModal = writable(null);
const mediaDetailsModal = writable(null);
const characterDetailsModal = writable(null);
const staffDetailsModal = writable(null);
const detailsModalStack = writable(null);
const useDetailsModalUpdate = (type, value) => {
  if (!value.isBack) {
    let currentModalValue = null;
    const currentModal_unsubscribe = currentModal.subscribe((value2) => {
      currentModalValue = value2;
    });
    currentModal_unsubscribe();
    if (!!currentModalValue) {
      detailsModalStack.update((modalStackValue) => {
        if (!!modalStackValue)
          modalStackValue.push(currentModalValue);
        else
          modalStackValue = [currentModalValue];
        return modalStackValue;
      });
      if (type !== DetailsModalStackTypes.Media)
        mediaDetailsModal.set(null);
      if (type !== DetailsModalStackTypes.Character)
        characterDetailsModal.set(null);
      if (type !== DetailsModalStackTypes.Staff)
        staffDetailsModal.set(null);
    }
  }
  currentModal.set({
    type,
    value
  });
};
const TopNavbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMainPage;
  let $page, $$unsubscribe_page;
  let $isTopNavbarBgTransparent, $$unsubscribe_isTopNavbarBgTransparent;
  let $isSideNavBar, $$unsubscribe_isSideNavBar;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_isTopNavbarBgTransparent = subscribe(isTopNavbarBgTransparent, (value) => $isTopNavbarBgTransparent = value);
  $$unsubscribe_isSideNavBar = subscribe(isSideNavBar, (value) => $isSideNavBar = value);
  isMainPage = ["/(app)", "/(app)/manga", "/(app)/timeline", "/(app)/browse", "/(app)/library"].includes($page.route.id || "");
  $$unsubscribe_page();
  $$unsubscribe_isTopNavbarBgTransparent();
  $$unsubscribe_isSideNavBar();
  return `<nav class="${[
    "fixed top-0 left-0 right-0 flex justify-between items-center px-2 md:px-5 py-2 text-white bg-neutral-900/95 transition-colors duration-300 z-40",
    $isTopNavbarBgTransparent ? "!bg-transparent" : ""
  ].join(" ").trim()}"><div class="${[
    "flex w-96 lg:justify-between items-center",
    !$isSideNavBar ? "!justify-start" : ""
  ].join(" ").trim()}"><div class="${["flex", !$isSideNavBar ? "!order-2" : ""].join(" ").trim()}">
      <button class="hidden lg:block p-2 rounded-full mr-2 lg:hover:bg-neutral-800"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6 fill-current"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h12M3 6h18M3 18h6"></path></svg></button>

      
      <div class="${["items-end flex lg:flex", !isMainPage ? "hidden" : ""].join(" ").trim()}"><img src="https://anilist.co/img/icons/icon.svg" class="w-10 h-10" alt="logo">
        <span class="text-xs scale-90 pb-6 text-neutral-400">EN</span></div></div>
    
    <div class="${["lg:flex gap-x-4 pr-14", isMainPage ? "hidden" : ""].join(" ").trim()}">
      <button class="${[
    "block drop-shadow-xl p-2 rounded-full lg:bg-neutral-800/40 lg:hover:bg-neutral-800",
    "text-neutral-400 cursor-not-allowed"
  ].join(" ").trim()}"><svg viewBox="0 0 16 16" class="w-6 h-6 lg:w-5 lg:h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path></svg></button>
      
      <button class="${[
    "hidden lg:block drop-shadow-xl p-2 rounded-full lg:bg-neutral-800/40 lg:hover:bg-neutral-800",
    "text-neutral-400 cursor-not-allowed"
  ].join(" ").trim()}"><svg viewBox="0 0 16 16" class="w-5 h-5 fill-current -scale-x-100" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path></svg></button></div></div>

  <div class="flex w-80 justify-end"><ul class="flex justify-center items-center space-x-6">
      <li class="relative group cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6 fill-current"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
        <div class="hidden group-hover:flex absolute -bottom-20 left-1/2 -translate-x-1/2 w-56 justify-center items-center text-sm"><span class="rounded-lg bg-neutral-800 p-2.5">Cài đặt</span></div></li>
      
      <li><button class="rounded-full bg-white text-neutral-900 px-3 md:px-4 py-1.5 inline-flex items-center"><span class="font-medium">Đăng nhập</span></button></li>

      
      </ul></div></nav>`;
});
const memus = writable([
  {
    name: "Anime",
    route: {
      id: "/(app)",
      path: "/"
    },
    icon: `<svg viewBox="0 0 28 28" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6 m-auto fill-current"><path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"></path></svg>`,
    iconActivated: '<svg viewBox="0 0 28 28"  width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6 m-auto fill-current"><path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.164 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.164 11.654C17.612 11.924 17.612 12.575 17.164 12.846M21.75 2.75 6.25 2.75C4.182 2.75 2.5 4.432 2.5 6.5L2.5 18C2.5 20.068 4.182 21.75 6.25 21.75L21.75 21.75C23.818 21.75 25.5 20.068 25.5 18L25.5 6.5C25.5 4.432 23.818 2.75 21.75 2.75"></path></svg>',
    isActive: false
  },
  {
    name: "Manga",
    route: {
      id: "/(app)/manga",
      path: "/manga"
    },
    icon: `<svg viewBox="0 0 20 20" width="24" height="24" class="w-6 h-6 m-auto fill-current opacity-80 scale-90"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M457 368.832a.5.5 0 0 0 .883.323l1.12-1.332a.876.876 0 0 1 .679-.323h3.522a2.793 2.793 0 0 0 2.796-2.784v-10.931a2.793 2.793 0 0 0-2.796-2.785h-3.454a2.75 2.75 0 0 0-2.75 2.75v15.082zm-1.5 0a.5.5 0 0 1-.883.323l-1.12-1.332a.876.876 0 0 0-.679-.323h-3.522a2.793 2.793 0 0 1-2.796-2.784v-10.931a2.793 2.793 0 0 1 2.796-2.785h3.454a2.75 2.75 0 0 1 2.75 2.75v15.082z"></path></g></svg>`,
    iconActivated: '<svg viewBox="0 0 20 20" class="w-6 h-6 m-auto fill-current scale-90"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M457 368.832a.5.5 0 0 0 .883.323l1.12-1.332a.876.876 0 0 1 .679-.323h3.522a2.793 2.793 0 0 0 2.796-2.784v-10.931a2.793 2.793 0 0 0-2.796-2.785h-3.454a2.75 2.75 0 0 0-2.75 2.75v15.082zm-1.5 0a.5.5 0 0 1-.883.323l-1.12-1.332a.876.876 0 0 0-.679-.323h-3.522a2.793 2.793 0 0 1-2.796-2.784v-10.931a2.793 2.793 0 0 1 2.796-2.785h3.454a2.75 2.75 0 0 1 2.75 2.75v15.082z"></path></g></svg>',
    isActive: false
  },
  {
    name: "Phát sóng",
    route: {
      id: "/(app)/timeline",
      path: "/timeline"
    },
    icon: `<?xml version="1.0" encoding="UTF-8"?> <svg class="w-6 h-6 m-auto fill-current" version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none"><polygon points="-1.5848e-13 0 20 0 20 20 -1.5848e-13 20"/><rect x="2" y="5.5" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><line x1="7.5" x2="5.5" y1="5.5" y2="2.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/><line transform="translate(13.5 4) scale(-1 1) translate(-13.5 -4)" x1="14.5" x2="12.5" y1="5.5" y2="2.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/></g><g transform="translate(6 7.5)" fill="currentColor"><rect width="8" height="8" opacity="0"/><rect x="3.25" y="1" width="1.5" height="6" rx=".75"/><rect x=".58333" y="4" width="1.5" height="3" rx=".75"/><rect x="5.9167" y="3" width="1.5" height="4" rx=".75"/></g></svg>`,
    iconActivated: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" class="w-6 h-6 m-auto fill-current"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g><polygon points="-1.58484337e-13 0 20 0 20 20 -1.58484337e-13 20"/></g><g><g><polygon points="-1.58484337e-13 0 20 0 20 20 -1.58484337e-13 20"/><path d="M16,4.75 C17.5187831,4.75 18.75,5.98121694 18.75,7.5 L18.75,7.5 L18.75,15.5 C18.75,17.0187831 17.5187831,18.25 16,18.25 L16,18.25 L4,18.25 C2.48121694,18.25 1.25,17.0187831 1.25,15.5 L1.25,15.5 L1.25,7.5 C1.25,5.98121694 2.48121694,4.75 4,4.75 L4,4.75 Z M10,8.5 C9.58578644,8.5 9.25,8.83578644 9.25,9.25 L9.25,9.25 L9.25,13.75 C9.25,14.1642136 9.58578644,14.5 10,14.5 C10.4142136,14.5 10.75,14.1642136 10.75,13.75 L10.75,13.75 L10.75,9.25 C10.75,8.83578644 10.4142136,8.5 10,8.5 Z M12.6666667,10.5 C12.2524531,10.5 11.9166667,10.8357864 11.9166667,11.25 L11.9166667,11.25 L11.9166667,13.75 C11.9166667,14.1642136 12.2524531,14.5 12.6666667,14.5 C13.0808802,14.5 13.4166667,14.1642136 13.4166667,13.75 L13.4166667,13.75 L13.4166667,11.25 C13.4166667,10.8357864 13.0808802,10.5 12.6666667,10.5 Z M7.33333333,11.5 C6.91911977,11.5 6.58333333,11.8357864 6.58333333,12.25 L6.58333333,12.25 L6.58333333,13.75 C6.58333333,14.1642136 6.91911977,14.5 7.33333333,14.5 C7.7475469,14.5 8.08333333,14.1642136 8.08333333,13.75 L8.08333333,13.75 L8.08333333,12.25 C8.08333333,11.8357864 7.7475469,11.5 7.33333333,11.5 Z" fill="currentColor" fill-rule="nonzero"/><line x1="7.5" y1="5.5" x2="5.5" y2="2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="14.5" y1="5.5" x2="12.5" y2="2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" transform="translate(13.500000, 4.000000) scale(-1, 1) translate(-13.500000, -4.000000) "/></g><g transform="translate(11.916667, 10.500000)"/></g></g></svg>',
    isActive: false
  },
  {
    name: "Khám phá",
    route: {
      id: "/(app)/browse",
      path: "/browse"
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6 m-auto fill-current"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>`,
    iconActivated: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6 m-auto fill-current"><path d="M10 2c-4.411 0-8 3.589-8 8s3.589 8 8 8a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8z"></path></svg>',
    isActive: false
  },
  {
    name: "Thư viện",
    route: {
      id: "/(app)/library",
      path: "/library"
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6 m-auto fill-current"><path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path></svg>`,
    iconActivated: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-6 h-6 m-auto fill-current"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>',
    isActive: false
  }
]);
const footerLinks = [
  { name: "About us", route: { id: "", path: "/" } },
  { name: "Contact us", route: { id: "", path: "/" } },
  { name: "Get App", route: { id: "", path: "/" } },
  { name: "Terms of Service", route: { id: "", path: "/" } },
  { name: "Privacy Policy", route: { id: "", path: "/" } },
  { name: "Infringement Complaint", route: { id: "", path: "/" } }
];
const SideNavbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isSideNavBar, $$unsubscribe_isSideNavBar;
  let $isBottomTabBar, $$unsubscribe_isBottomTabBar;
  let $memus, $$unsubscribe_memus;
  $$unsubscribe_isSideNavBar = subscribe(isSideNavBar, (value) => $isSideNavBar = value);
  $$unsubscribe_isBottomTabBar = subscribe(isBottomTabBar, (value) => $isBottomTabBar = value);
  $$unsubscribe_memus = subscribe(memus, (value) => $memus = value);
  $$unsubscribe_isSideNavBar();
  $$unsubscribe_isBottomTabBar();
  $$unsubscribe_memus();
  return `<aside class="${[
    "w-0 lg:w-56 px-2 fixed inset-0 !top-12 transition-all duration-300 group z-50",
    !$isSideNavBar ? "lg:-ml-60" : ""
  ].join(" ").trim()}" aria-label="Sidebar"><div class="flex flex-col justify-between lg:pr-1 py-2 h-full overflow-y-auto scrollbar-w-1 scrollbar-thin scrollbar-thumb-transparent group-hover:scrollbar-thumb-neutral-500 scrollbar-track-transparent"><div class="flex-col mt-2">
      <ul class="${[
    "fixed bottom-0 left-0 right-0 lg:relative flex justify-between md:justify-evenly lg:justify-start lg:flex-col p-1 lg:p-0 bg-neutral-900 lg:bg-transparent lg:!block",
    !$isBottomTabBar ? "hidden" : ""
  ].join(" ").trim()}">${each($memus, (menu) => {
    return `<li class="flex basis-full flex-col justify-center"><a${add_attribute("href", menu.route.path, 0)} class="${[
      "flex flex-col lg:flex-row md:gap-y-1 items-center text-center lg:text-left p-1 lg:py-2 lg:pl-5 text-sm rounded-xl text-neutral-500 lg:text-white hover:bg-neutral-800",
      (menu.isActive ? "!text-white" : "") + " " + (menu.isActive ? "bg-neutral-800" : "")
    ].join(" ").trim()}"><span><!-- HTML_TAG_START -->${menu.isActive ? menu.iconActivated : menu.icon}<!-- HTML_TAG_END --></span>
              <span class="lg:ml-5 lg:whitespace-nowrap text-xs lg:text-sm scale-75 md:scale-100">${escape(menu.name)}</span></a>
          </li>`;
  })}</ul>

      <ul class="mt-4 border-t border-neutral-800"><li class="flex items-center pl-5 py-3 text font-medium text-[#8a8a8a]">Lối tắt của bạn
        </li>
        <li><a href="/" class="flex items-center py-2 pl-5 text-sm font-normal rounded-xl transition duration-75 hover:bg-neutral-800 text-white group"><button type="button" class="flex rounded-full"><img class="w-8 h-8 rounded-full" src="https://raw.githubusercontent.com/leon-to/youtube.nuxt3.tailwindcss/develop/assets/img/day-trading-radio.jpg" alt="user photo4"></button>

            <span class="ml-5 flex-1 line-clamp-2">JoJo no Kimyou na Bouken: Steel Ball Run</span></a></li>
        <li><a href="/" class="flex items-center py-2 pl-5 text-sm font-normal rounded-xl transition duration-75 hover:bg-neutral-800 text-white group"><button type="button" class="flex rounded-full"><img class="w-8 h-8 rounded-full" src="https://raw.githubusercontent.com/leon-to/youtube.nuxt3.tailwindcss/develop/assets/img/marshmello.jpg" alt="user photo2"></button>
            <span class="ml-5 flex-1 line-clamp-2">Berserk</span>
            <span class="mr-1.5 rounded-full h-1 w-1 bg-sky-500"></span></a></li>
        <li><a href="/" class="flex items-center py-2 pl-5 text-sm font-normal rounded-xl transition duration-75 hover:bg-neutral-800 text-white group"><button type="button" class="flex rounded-full"><img class="w-8 h-8 rounded-full" src="https://raw.githubusercontent.com/leon-to/youtube.nuxt3.tailwindcss/develop/assets/img/vice.jpg" alt="user photo1"></button>
            <span class="ml-5">Ijiranaide, Nagatoro-san 2nd Attack</span></a></li></ul></div>
    <div class="flex flex-col justify-between border-t border-neutral-800"><div class="flex flex-wrap gap-2 text-sm p-4 text-neutral-400">${each(footerLinks, (footerLink) => {
    return `<a${add_attribute("href", footerLink.route.path, 0)}>${escape(footerLink.name)}</a>`;
  })}</div>
      <div class="flex p-4 text-sm text-neutral-400">© ${escape((/* @__PURE__ */ new Date()).getFullYear())} Anilist
      </div></div></div></aside>`;
});
const useDetailsModalHas = () => {
  let isHas = false;
  const detailsModalStack_unsubscribe = detailsModalStack.subscribe(
    (modalStackValue) => {
      isHas = !!modalStackValue && !!modalStackValue.length;
    }
  );
  detailsModalStack_unsubscribe();
  return isHas;
};
const RelationsCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { source } = $$props;
  let { relationType } = $$props;
  const linkMedia = useCreateLink([
    "/",
    { value: source.type, convert: "lowcase" },
    "/details/",
    {
      value: source.title.userPreferred,
      convert: "-"
    },
    "-an",
    source.id
  ]);
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.relationType === void 0 && $$bindings.relationType && relationType !== void 0)
    $$bindings.relationType(relationType);
  return `<a${add_attribute("href", linkMedia, 0)}><div class="w-full h-full flex gap-4 rounded-lg bg-neutral-500/20 overflow-hidden">
    <div class="w-28 shrink-0"><div class="aspect-w-2 aspect-h-3">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: source.coverImage.large,
      backgroundColor: source.coverImage.color
    },
    {},
    {}
  )}</div></div>
    
    <div class="w-full flex flex-col justify-evenly"><div class="flex flex-col gap-2">
        <span class="font-medium">${escape(relationType)}</span>
        
        <h3 class="font-medium text-xl">${escape(source.title.userPreferred)}</h3></div>
      
      <div class="flex gap-2 items-center"><span>${escape(source.format)}</span>
        ${validate_component(Dot, "Dot").$$render($$result, { backgroundColor: source.coverImage.color }, {}, {})}
        <span>${escape(source.status)}</span></div></div></div></a>`;
});
const CharacerVerticalCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { source } = $$props;
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  return `<div class="col-span-1 overflow-hidden"><a class="w-full h-full"${add_attribute(
    "href",
    useCreateLink([
      "/character/",
      {
        value: source.node.name.userPreferred,
        convert: "-"
      },
      "-an",
      source.node.id
    ]),
    0
  )}><div class="w-full h-full flex flex-col gap-4 rounded-lg">
      <div class="aspect-w-1 aspect-h-1 rounded-full overflow-hidden">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: source.node.image.large,
      alt: source.node.name.userPreferred
    },
    {},
    {}
  )}</div>

      
      <div class="flex flex-col gap-1 items-center justify-center text-center"><span class="max-w-full font-medium 3xl:text-lg break-words">${escape(source.node.name.userPreferred)}</span>
        <span class="text-neutral-400">${escape(source.role)}</span></div></div></a></div>`;
});
const MediaDetailsModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { source } = $$props;
  let { isMobile } = $$props;
  let bestRank = null;
  let nextAiringEpisode = null;
  const linkDetail = useCreateLink([
    "/",
    { value: source.type, convert: "lowcase" },
    "/details/",
    {
      value: source.title.userPreferred,
      convert: "-"
    },
    "-an",
    source.id
  ]);
  const linkView = useCreateLink([
    "/",
    { value: source.type, convert: "lowcase" },
    `/${source.type === "ANIME" ? "view" : "read"}/`,
    "123412/",
    {
      value: source.title.userPreferred,
      convert: "-"
    },
    "-an",
    source.id
  ]);
  if (!!source.rankings.length)
    bestRank = source.rankings.sort((a, b) => a.rank - b.rank)[0];
  if (!!source.nextAiringEpisode)
    nextAiringEpisode = `Episode ${source.nextAiringEpisode.episode} on ${useTimestampToString(source.nextAiringEpisode.airingAt)}`;
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.isMobile === void 0 && $$bindings.isMobile && isMobile !== void 0)
    $$bindings.isMobile(isMobile);
  return `<div class="w-full h-full flex flex-col">
  ${!isMobile ? `<div class="aspect-w-16 aspect-h-9 rounded-t-lg overflow-hidden z-0">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: source.bannerImage || source.coverImage.extraLarge
    },
    {},
    {}
  )}
      <div class="w-full h-full bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
      ${!isMobile && !!!source.bannerImage ? `<div class="absolute inset-0 flex flex-col justify-end md:px-6 lg:px-12 pb-20"><div class="w-40"><div class="aspect-w-3 aspect-h-5 md:aspect-w-2 md:aspect-h-3"><div class="w-full h-full rounded-lg shadow-lg shadow-black overflow-hidden">${validate_component(Image, "Image").$$render($$result, { src: source.coverImage.extraLarge }, {}, {})}</div></div></div></div>` : ``}</div>` : ``}

  <div class="w-full flex flex-col-reverse md:flex-col md:-mt-16 z-10">
    <div class="w-full flex flex-col md:flex-row gap-x-3 md:gap-x-4 px-3 md:px-6 lg:px-12 md:pb-6">
      <a${add_attribute("href", linkView, 0)}><button class="w-full md:w-40 bg-neutral-100 py-2 my-3 md:my-0 text-black font-bold font-lexenddeca rounded-md inline-flex justify-center items-center shrink-0 transition-opacity duration-300 hover:opacity-80">${source.type === "ANIME" ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-6 h-6 3xl:w-7 3xl:h-7"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path></svg>` : `<svg viewBox="0 0 20 20" class="fill-current w-6 h-6 3xl:w-7 3xl:h-7 scale-90"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M457 368.832a.5.5 0 0 0 .883.323l1.12-1.332a.876.876 0 0 1 .679-.323h3.522a2.793 2.793 0 0 0 2.796-2.784v-10.931a2.793 2.793 0 0 0-2.796-2.785h-3.454a2.75 2.75 0 0 0-2.75 2.75v15.082zm-1.5 0a.5.5 0 0 1-.883.323l-1.12-1.332a.876.876 0 0 0-.679-.323h-3.522a2.793 2.793 0 0 1-2.796-2.784v-10.931a2.793 2.793 0 0 1 2.796-2.785h3.454a2.75 2.75 0 0 1 2.75 2.75v15.082z"></path></g></svg>`}
          <span class="ml-2 3xl:text-lg">${escape(source.type === "ANIME" ? "Phát" : "Đọc")}</span></button></a>
      
      <a class="w-full"${add_attribute("href", linkDetail, 0)}><button class="w-full py-4 md:py-2 text-white font-medium inline-flex justify-center md:justify-between items-center border-t md:border-none border-neutral-800 transition-colors duration-300 hover:text-neutral-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current w-6 h-6 3xl:w-7 3xl:h-7"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
          <span class="ml-3 3xl:text-lg">Thông tin khác</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="hidden md:block fill-current w-6 h-6 3xl:w-7 3xl:h-7 ml-auto"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></button></a></div>
    
    <div class="flex gap-3 md:gap-6 lg:gap-10 p-3 md:pt-4 md:pb-0 md:px-6 lg:px-12">
      ${isMobile ? `<div class="w-24 md:w-40 shrink-0"><div class="aspect-w-3 aspect-h-5 md:aspect-w-2 md:aspect-h-3"><div class="w-full h-full rounded-lg overflow-hidden">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: source.coverImage.extraLarge,
      backgroundColor: source.coverImage.color
    },
    {},
    {}
  )}</div></div></div>` : ``}
      
      <div class="w-full flex flex-col gap-y-1 md:gap-y-4"><div class="w-full grid grid-cols-8 md:gap-x-10"><div class="col-span-full md:col-span-5 flex flex-col gap-1 md:gap-3">
            
            <div class="text-xl md:text-2xl lg:text-2xl 3xl:text-3xl font-bold font-lexenddeca mr-7 md:mr-0"><h3 class="line-clamp-2 !leading-tight">${escape(source.title.userPreferred)}</h3></div>
            
            <div class="flex gap-x-3 lg:gap-x-4"><div class="w-full flex items-center gap-y-1 gap-x-3 lg:gap-x-4 text-sm md:text-base 3xl:text-lg text-neutral-400 overflow-x-auto scrollbar-none"><span class="shrink-0 bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded text-xs md:text-sm uppercase">${escape(source.format || source.type)}</span>
                ${source.season ? `<span class="shrink-0 bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded text-xs md:text-sm lowercase first-letter:uppercase">${escape(source.season)} ${escape(source.seasonYear)}</span>` : ``}
                ${source.episodes ? `<span class="shrink-0">${escape(source.episodes)} episodes</span>` : ``}
                ${source.duration ? `<span class="shrink-0">${escape(source.duration)} mins</span>` : ``}
                ${source.volumes ? `<span class="shrink-0">${escape(source.volumes)} volumes</span>` : ``}
                ${source.chapters ? `<span class="shrink-0">${escape(source.chapters)} chapters</span>` : ``}</div></div>
            
            ${!isMobile && !!bestRank ? `<div class="md:text-base 3xl:text-lg font-medium">${validate_component(RankingMedia, "RankingMedia").$$render($$result, { source: bestRank }, {}, {})}</div>` : ``}
            
            ${!!nextAiringEpisode ? `<div class="flex flex-wrap items-center gap-x-3 lg:gap-x-4 text-sm md:text-base 3xl:text-lg text-rose-500">
                <span class="line-clamp-1">${escape(nextAiringEpisode)}</span></div>` : ``}</div>
          <div class="col-span-3"><div class="flex flex-col gap-1 md:gap-2 ml-auto">
              ${!isMobile ? `
                ${source.status ? `<div><span class="text-neutral-400 font-medium">Status:</span>
                    <span>${escape(source.status)}</span></div>` : ``}
                
                ${source.genres.length ? `<div><span class="text-neutral-400 font-medium">Genres:</span>
                    ${each(source.genres, (genre) => {
    return `<span class="after:content-[',_'] last:after:content-[]">${escape(genre)}</span>`;
  })}</div>` : ``}
                
                ${source.studios.nodes.length ? `<div><span class="text-neutral-400 font-medium">Studios:</span>
                    ${each(source.studios.nodes, (studio) => {
    return `<span class="after:content-[',_'] last:after:content-[]">${escape(studio.name)}</span>`;
  })}</div>` : ``}` : ``}</div></div></div>

        
        <div class="text-sm md:text-base 3xl:text-lg line-clamp-4"><!-- HTML_TAG_START -->${source.description || ""}<!-- HTML_TAG_END --></div>
        <div></div></div></div></div>

  ${!isMobile ? `<div class="w-full border-t-2 border-neutral-800"></div>
    
    ${source.relations.edges.length ? `<div class="w-full flex flex-col md:px-6 lg:px-12 pt-10 pb-6">
        <div class="w-full mb-6"><span class="text-2xl font-bold font-lexenddeca">Relations</span></div>
        
        <div class="w-full flex flex-col gap-y-6 gap-x-6">${each(source.relations.edges, (edge) => {
    return `${validate_component(RelationsCard, "RelationsCard").$$render(
      $$result,
      {
        relationType: edge.relationType,
        source: edge.node
      },
      {},
      {}
    )}`;
  })}</div></div>` : ``}
    
    ${source.characters.edges.length ? `<div class="w-full border-t-2 border-neutral-800"></div>
      <div class="w-full flex flex-col md:px-6 lg:px-12 pt-10 pb-6">
        <div class="w-full mb-6"><span class="text-2xl font-bold font-lexenddeca">Characters</span></div>
        <div class="w-full grid grid-cols-4 3xl:grid-cols-5 gap-y-10 gap-x-6">${each(source.characters.edges, (edge) => {
    return `${validate_component(CharacerVerticalCard, "CharacerVerticalCard").$$render($$result, { source: edge }, {}, {})}`;
  })}</div></div>` : ``}` : ``}</div>`;
});
const RelationsCardSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full h-full flex gap-4 rounded-lg bg-neutral-500/20 overflow-hidden animate-pulse">
  <div class="w-28 shrink-0"><div class="aspect-w-2 aspect-h-3 bg-neutral-700"></div></div>
  
  <div class="w-full flex flex-col justify-evenly"><div class="flex flex-col gap-2">
      <div class="w-20 h-4 bg-neutral-700 rounded"></div>
      
      <div class="w-full h-4 bg-neutral-700 rounded"></div></div>
    
    <div class="w-28 h-4 bg-neutral-700 rounded"></div></div></div>`;
});
const MediaDetailsModalSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isMobile } = $$props;
  if ($$props.isMobile === void 0 && $$bindings.isMobile && isMobile !== void 0)
    $$bindings.isMobile(isMobile);
  return `<div class="w-full h-full flex flex-col">
  ${!isMobile ? `<div class="aspect-w-16 aspect-h-9 mb-6 z-0"></div>` : ``}

  <div class="w-full flex flex-col-reverse md:flex-col md:-mt-16 z-10">
    <div class="w-full flex flex-col md:flex-row gap-x-3 md:gap-x-4 px-3 md:px-6 lg:px-12 md:pb-6">
      <div class="w-full md:w-40 h-10 bg-neutral-800 py-2 my-3 md:my-0 rounded-md shrink-0 animate-pulse"></div>
      
      <div class="w-full md:w-40 h-10 py-4 md:py-2 rounded-md shrink-0 border-t md:border-none border-neutral-800"></div></div>

    
    <div class="flex gap-3 md:gap-6 lg:gap-10 p-3 md:pt-4 md:pb-0 md:px-6 lg:px-12">
      ${isMobile ? `<div class="w-24 shrink-0"><div class="aspect-w-3 aspect-h-5 md:aspect-w-2 md:aspect-h-3"><div class="w-full h-full rounded-lg bg-neutral-800 overflow-hidden"></div></div></div>` : ``}
      
      <div class="w-full flex flex-col gap-y-4">
        <div class="w-full h-4 md:h-6 bg-neutral-800 rounded"></div>
        
        <div class="w-40 h-4 md:h-6 bg-neutral-800 rounded"></div>

        
        <div class="w-full h-20 md:h-40 bg-neutral-800 rounded-lg"></div>
        <div></div></div></div></div>

  
  ${!isMobile ? `<div class="w-full border-t-2 border-neutral-800"></div>
    <div class="w-full flex flex-col md:px-6 lg:px-12 pt-10 pb-6">
      <div class="w-full mb-6"><div class="w-32 h-4 md:h-6 bg-neutral-800 rounded animate-pulse"></div></div>
      
      <div class="w-full flex flex-col gap-y-6 gap-x-6">${each(Array(2), (noUse) => {
    return `${validate_component(RelationsCardSkeleton, "RelationsCardSkeleton").$$render($$result, {}, {}, {})}`;
  })}</div></div>` : ``}</div>`;
});
const MediaDetailsModalWrap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let isSuccess = false;
  let source;
  let isMobile = window.innerWidth < 768;
  const isBack = useDetailsModalHas();
  const mediaDetails = useMediaDetails({ id: options.value.id });
  const mediaDetails_unsubscribe = mediaDetails.subscribe((data) => {
    data.isError;
    isSuccess = data.isSuccess;
    if (data.data) {
      source = data.data;
    }
  });
  onDestroy(() => {
    window?.document.querySelector("html")?.classList.remove("!overflow-hidden");
    isBottomTabBar.set(true);
    mediaDetails_unsubscribe();
  });
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  return `
<div class="${[
    "fixed inset-0 w-full h-full z-50 bg-background/60 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-w-1",
    isSuccess ? "lg:scrollbar-thumb-neutral-500" : ""
  ].join(" ").trim()}"><div class="w-full xl:w-3/5 4xl:w-2/4 h-full flex flex-col mx-auto pt-12 md:px-4"><div class="w-full h-fit flex md:grow flex-col mt-auto rounded-t-lg bg-neutral-900 relative">
      ${isBack ? `<button class="absolute top-2 left-3 md:top-4 md:left-4 bg-neutral-700 rounded-full md:p-1 z-20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current w-7 h-7"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg></button>` : ``}
      
      <button class="absolute top-2 right-3 md:top-4 md:right-4 bg-neutral-700 rounded-full md:p-1 z-20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current w-7 h-7"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg></button>
      ${isSuccess ? `${validate_component(MediaDetailsModal, "MediaDetailsModal").$$render($$result, { isMobile, source }, {}, {})}` : `${validate_component(MediaDetailsModalSkeleton, "MediaDetailsModalSkeleton").$$render($$result, { isMobile }, {}, {})}`}</div></div></div>`;
});
const useCharacterDetails = (args, fields, options) => {
  return createQuery(
    ["characters-details", { args }],
    () => getCharacterDetails(args, fields),
    options
  );
};
const useAnilistDescriptionsFromat = (description) => {
  if (!description)
    return "";
  let convertedText = description;
  convertedText = convertedText.replace(
    /__(.*?):__ (.*?)\n|__(.*?):__ (.*?)!~/g,
    '<p><span class="mr-1">$1:</span>$2</p>'
  );
  convertedText = convertedText.replace(
    /\*\*(.*?):\*\* (.*?)\n|\*\*(.*?):\*\* (.*?)!~/g,
    '<p><span class="mr-1">$1:</span>$2</p>'
  );
  convertedText = convertedText.replace(/\[(.*?)\]\((.*?)\)/g, "$1");
  convertedText = convertedText.replace(/~!|!~/g, "");
  convertedText = convertedText.replace(/\n/g, "<br>");
  return convertedText;
};
const CharacterDetailsModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { source } = $$props;
  const moreLink = useCreateLink([
    "/character/",
    {
      value: source.name?.userPreferred || "",
      convert: "-"
    },
    "-an",
    source.id
  ]);
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  return `<div class="w-full h-full flex flex-col lg:flex-row gap-x-6 gap-y-10 p-4 px-3 md:px-6 lg:md:px-6 lg:px-10 py-10 mx-auto z-10"><div class="w-52 h-52 shrink-0 mx-auto rounded-full overflow-hidden">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: source.image?.large || "",
      alt: source.name?.userPreferred || ""
    },
    {},
    {}
  )}</div>
  <div class="w-full flex flex-col gap-6 lg:mt-4 overflow-hidden"><div class="w-full flex flex-col items-center lg:items-start gap-y-2"><h1 class="text-2xl md:text-4xl font-bold font-lexenddeca max-w-full break-words">${escape(source.name?.userPreferred)}</h1>
      <div class="text-sm md:text-base">${source.name?.native ? `<span class="last:after:content-[''] after:content-[',_']">${escape(source.name?.native)}</span>` : ``}
        ${each(source.name?.alternative || [], (alternative) => {
    return `<span class="last:after:content-[''] after:content-[',_']">${escape(alternative)}</span>`;
  })}
        ${each(source.name?.alternativeSpoiler || [], (alternativeSpoiler) => {
    return `<span class="last:after:content-[''] after:content-[',_'] font-medium">${escape(alternativeSpoiler)}</span>`;
  })}</div></div>

    
    <div class="flex flex-col"><div><span class="mr-2">Favourites:</span>${escape(source.favourites)}</div>
      ${!!source.dateOfBirth?.month ? `<div><span class="mr-2">Birthday:</span>${escape(source.dateOfBirth.day)}/${escape(source.dateOfBirth.month)}</div>` : ``}
      ${!!source.age ? `<div><span class="mr-2">Age:</span>${escape(source.age)}</div>` : ``}
      ${!!source.gender ? `<div><span class="mr-2">Gender:</span>${escape(source.gender)}</div>` : ``}
      <!-- HTML_TAG_START -->${useAnilistDescriptionsFromat(source?.description || "")}<!-- HTML_TAG_END --></div>

    
    <div class="flex flex-col">
      <div class="w-full mb-4"><h3 class="text-xl lg:text-2xl font-bold font-lexenddeca w-full break-words">Anime/Manga featuring ${escape(source.name?.userPreferred)}</h3></div>
      <div class="flex flex-col gap-2 overflow-hidden">${each(source.media?.edges || [], (edge) => {
    return `${validate_component(CharacterCard, "CharacterCard").$$render($$result, { source: edge }, {}, {})}`;
  })}</div></div>

    
    
    ${source.media?.edges?.length === 25 ? `<div class="w-full py-6"><a class="w-full h-full"${add_attribute("href", moreLink, 0)}><button class="w-full py-4 md:py-2 text-white font-medium inline-flex justify-center md:justify-between items-center transition-colors duration-300 hover:text-neutral-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current w-6 h-6 3xl:w-7 3xl:h-7"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
            <span class="ml-3 3xl:text-lg">Xem thêm</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="hidden md:block fill-current w-6 h-6 3xl:w-7 3xl:h-7 ml-auto"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></button></a></div>` : ``}</div></div>`;
});
const CharacterDetailsModalSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full h-full flex flex-col lg:flex-row gap-x-6 gap-y-10 p-4 px-3 md:px-6 lg:md:px-6 lg:px-10 py-10 mx-auto z-10 animate-pulse"><div class="w-52 h-52 shrink-0 mx-auto rounded-full bg-neutral-500/20"></div>
  <div class="w-full flex flex-col gap-6 lg:mt-4"><div class="flex flex-col items-center lg:items-start gap-y-2"><div class="w-60 h-6 bg-neutral-500/20 rounded"></div>
      <div class="w-20 h-4 bg-neutral-500/20 rounded"></div></div>
    <div class="hidden lg:block w-full h-12 rounded bg-neutral-500/20"></div>
    <div class="hidden lg:block w-full h-28 rounded bg-neutral-500/20"></div></div></div>`;
});
const ChracterDetailsModalWrap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let isSuccess = false;
  let source;
  const isBack = useDetailsModalHas();
  const characterDetails = useCharacterDetails({ id: options.value.id });
  const characterDetails_unsubscribe = characterDetails.subscribe((data) => {
    data.isError;
    isSuccess = data.isSuccess;
    if (data.data) {
      source = data.data;
    }
  });
  onDestroy(() => {
    window?.document.querySelector("html")?.classList.remove("!overflow-hidden");
    isBottomTabBar.set(true);
    characterDetails_unsubscribe();
  });
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  return `
<div class="${[
    "fixed inset-0 w-full h-full z-50 bg-background/60 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-w-1",
    isSuccess ? "lg:scrollbar-thumb-neutral-500" : ""
  ].join(" ").trim()}"><div class="w-full xl:w-2/3 3xl:w-2/4 h-full flex flex-col mx-auto pt-12 md:px-4"><div class="w-full h-fit flex grow flex-col rounded-t-lg bg-neutral-900">
      <div class="fixed inset-0 blur-3xl bg-cover bg-center bg-no-repeat opacity-10"${add_styles({
    "background-image": `url("${options.value.image}")`
  })}></div>
      <div class="w-full h-full shadow shadow-neutral-900 relative">
        ${isBack ? `<button class="absolute top-2 left-3 md:top-4 md:left-4 bg-neutral-700 rounded-full md:p-1 z-20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current w-7 h-7"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg></button>` : ``}
        
        <button class="absolute top-2 right-3 md:top-4 md:right-4 bg-neutral-700 rounded-full md:p-1 z-20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current w-7 h-7"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg></button>
        ${isSuccess ? `${validate_component(CharacterDetailsModal, "CharacterDetailsModal").$$render($$result, { source }, {}, {})}` : `${validate_component(CharacterDetailsModalSkeleton, "CharacterDetailsModalSkeleton").$$render($$result, {}, {}, {})}`}</div></div></div></div>`;
});
const useStaffDetails = (args, fields, options) => {
  return createQuery(
    ["characters-details", { args }],
    () => getStaffDetails(args, fields),
    options
  );
};
const StaffDetailsModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { source } = $$props;
  const moreLink = useCreateLink([
    "/staff/",
    {
      value: source.name?.userPreferred || "",
      convert: "-"
    },
    "-an",
    source.id
  ]);
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  return `<div class="w-full h-full flex flex-col lg:flex-row gap-x-6 gap-y-10 p-4 px-3 md:px-6 lg:md:px-6 lg:px-10 py-10 mx-auto z-10"><div class="w-52 h-52 shrink-0 mx-auto rounded-full overflow-hidden">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: source.image?.large || "",
      alt: source.name?.userPreferred || ""
    },
    {},
    {}
  )}</div>
  <div class="w-full flex flex-col gap-6 lg:mt-4"><div class="flex flex-col items-center lg:items-start gap-y-2"><h1 class="text-2xl md:text-4xl font-bold font-lexenddeca">${escape(source.name?.userPreferred)}</h1>
      <div class="text-sm md:text-base">${source.name?.native ? `<span class="last:after:content-[''] after:content-[',_']">${escape(source.name?.native)}</span>` : ``}
        ${each(source.name?.alternative || [], (alternative) => {
    return `<span class="last:after:content-[''] after:content-[',_']">${escape(alternative)}</span>`;
  })}</div></div>

    
    <div class="flex flex-col"><div><span class="mr-2">Favourites:</span>${escape(source.favourites)}</div>
      ${source.dateOfBirth?.month ? `<div><span class="font-medium mr-2">Birthday:</span>${escape(source.dateOfBirth.day)}/${escape(source.dateOfBirth.month)}/${escape(source.dateOfBirth.year)}</div>` : ``}
      ${source.age ? `<div><span class="font-medium mr-2">Age:</span>${escape(source.age)}</div>` : ``}
      ${source.gender ? `<div><span class="font-medium mr-2">Gender:</span>${escape(source.gender)}</div>` : ``}
      ${source.yearsActive ? `<div><span class="font-medium mr-2">Years active:</span>${escape(source.yearsActive[0] || "?")} - ${escape(source.yearsActive[1] || "present")}</div>` : ``}
      ${source.homeTown ? `<div><span class="font-medium mr-2">Hometown:</span>${escape(source.homeTown)}</div>` : ``}
      ${source.bloodType ? `<div><span class="font-medium mr-2">Blood Type:</span>${escape(source.bloodType)}</div>` : ``}
      <!-- HTML_TAG_START -->${useAnilistDescriptionsFromat(source?.description || "")}<!-- HTML_TAG_END --></div>

    
    <div class="flex flex-col">
      <div class="w-full mb-4"><h3 class="text-xl lg:text-2xl font-bold font-lexenddeca">The voice acting roles of ${escape(source.name?.userPreferred)}</h3></div>
      <div class="flex flex-col gap-2 overflow-hidden">${each(source.characterMedia?.edges || [], (edge) => {
    return `${validate_component(StaffVoiceActingRoleCard, "StaffVoiceActingRoleCard").$$render($$result, { source: edge }, {}, {})}`;
  })}</div></div>

    
    
    ${source.characterMedia?.pageInfo?.hasNextPage ? `<div class="w-full py-6"><a class="w-full h-full"${add_attribute("href", moreLink, 0)}><button class="w-full py-4 md:py-2 text-white font-medium inline-flex justify-center md:justify-between items-center transition-colors duration-300 hover:text-neutral-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current w-6 h-6 3xl:w-7 3xl:h-7"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg>
            <span class="ml-3 3xl:text-lg">Xem thêm</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="hidden md:block fill-current w-6 h-6 3xl:w-7 3xl:h-7 ml-auto"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></button></a></div>` : ``}</div></div>`;
});
const StaffDetailsModalWrap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let isSuccess = false;
  let source;
  const isBack = useDetailsModalHas();
  const details = useStaffDetails({ id: options.value.id });
  const details_unsubscribe = details.subscribe((data) => {
    data.isError;
    isSuccess = data.isSuccess;
    if (data.data) {
      source = data.data;
    }
  });
  onDestroy(() => {
    window?.document.querySelector("html")?.classList.remove("!overflow-hidden");
    isBottomTabBar.set(true);
    details_unsubscribe();
  });
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  return `
<div class="${[
    "fixed inset-0 w-full h-full z-50 bg-background/60 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-w-1",
    isSuccess ? "lg:scrollbar-thumb-neutral-500" : ""
  ].join(" ").trim()}"><div class="w-full xl:w-2/3 3xl:w-2/4 h-full flex flex-col mx-auto pt-12 md:px-4"><div class="w-full h-fit flex grow flex-col rounded-t-lg bg-neutral-900">
      <div class="fixed inset-0 blur-3xl bg-cover bg-center bg-no-repeat opacity-10"${add_styles({
    "background-image": `url("${options.value.image}")`
  })}></div>
      <div class="w-full h-full shadow shadow-neutral-900 relative">
        ${isBack ? `<button class="absolute top-2 left-3 md:top-4 md:left-4 bg-neutral-700 rounded-full md:p-1 z-20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current w-7 h-7"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg></button>` : ``}
        
        <button class="absolute top-2 right-3 md:top-4 md:right-4 bg-neutral-700 rounded-full md:p-1 z-20"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current w-7 h-7"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg></button>
        ${isSuccess ? `${validate_component(StaffDetailsModal, "StaffDetailsModal").$$render($$result, { source }, {}, {})}` : `${validate_component(CharacterDetailsModalSkeleton, "CharacterDetailsModalSkeleton").$$render($$result, {}, {}, {})}`}</div></div></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isSideNavBar, $$unsubscribe_isSideNavBar;
  $$unsubscribe_isSideNavBar = subscribe(isSideNavBar, (value) => $isSideNavBar = value);
  let mediaModal = null;
  let isShowMediaDetailsModal = false;
  let characterModal = null;
  let isShowCharacterDetailsModal = false;
  let staffModal = null;
  let isShowStaffDetailsModal = false;
  const mediaDetailsModal_unsubscribe = mediaDetailsModal.subscribe((value) => {
    if (!!value) {
      mediaModal = {
        type: DetailsModalStackTypes.Media,
        value
      };
      useDetailsModalUpdate(DetailsModalStackTypes.Media, value);
    }
    isShowMediaDetailsModal = !!value;
  });
  const characterDetailsModal_unsubscribe = characterDetailsModal.subscribe((value) => {
    if (!!value) {
      characterModal = {
        type: DetailsModalStackTypes.Character,
        value
      };
      useDetailsModalUpdate(DetailsModalStackTypes.Character, value);
    }
    isShowCharacterDetailsModal = !!value;
  });
  const staffDetailsModal_unsubscribe = staffDetailsModal.subscribe((value) => {
    if (!!value) {
      staffModal = {
        type: DetailsModalStackTypes.Staff,
        value
      };
      useDetailsModalUpdate(DetailsModalStackTypes.Staff, value);
    }
    isShowStaffDetailsModal = !!value;
  });
  onDestroy(() => {
    mediaDetailsModal_unsubscribe();
    characterDetailsModal_unsubscribe();
    staffDetailsModal_unsubscribe();
  });
  $$unsubscribe_isSideNavBar();
  return `<div class="flex flex-col min-h-screen h-full w-full">${validate_component(TopNavbar, "TopNavbar").$$render($$result, {}, {}, {})}
  <div class="flex flex-row w-full h-full mb-20">${validate_component(SideNavbar, "SideNavbar").$$render($$result, {}, {}, {})}
    
    <div class="${[
    "flex flex-col w-full h-full transition-[padding] duration-300",
    $isSideNavBar ? "lg:pl-60" : ""
  ].join(" ").trim()}">${mediaModal && isShowMediaDetailsModal ? `${validate_component(MediaDetailsModalWrap, "MediaDetailsModalWrap").$$render($$result, { options: mediaModal }, {}, {})}` : ``}
      ${characterModal && isShowCharacterDetailsModal ? `${validate_component(ChracterDetailsModalWrap, "ChracterDetailsModalWrap").$$render($$result, { options: characterModal }, {}, {})}` : ``}
      ${staffModal && isShowStaffDetailsModal ? `${validate_component(StaffDetailsModalWrap, "StaffDetailsModalWrap").$$render($$result, { options: staffModal }, {}, {})}` : ``}
      ${slots.default ? slots.default({}) : ``}
      </div>
    </div></div>`;
});
export {
  Layout as default
};
