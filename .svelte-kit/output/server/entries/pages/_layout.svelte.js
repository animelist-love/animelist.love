import { c as create_ssr_component, o as onDestroy, a as add_styles, v as validate_component } from "../../chunks/index2.js";
import { QueryClient } from "@tanstack/query-core";
import { s as setQueryClientContext } from "../../chunks/context.js";
const QueryClientProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { client = new QueryClient() } = $$props;
  setQueryClientContext(client);
  onDestroy(() => {
    client.unmount();
  });
  if ($$props.client === void 0 && $$bindings.client && client !== void 0)
    $$bindings.client(client);
  return `${slots.default ? slots.default({}) : ``}`;
});
const LoadingBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isLoading = false } = $$props;
  let width = 0;
  let progress;
  let stepSizes = [0, 5e-3, 0.01, 0.02];
  const randomStep = stepSizes[Math.floor(Math.random() * stepSizes.length)];
  const getIncrement = (number) => {
    if (number >= 0 && number < 20)
      return 10;
    else if (number >= 20 && number < 50)
      return 4;
    else if (number >= 50 && number < 80)
      return 2;
    else if (number >= 80 && number < 99)
      return 0.05;
    return 0;
  };
  const randomTime = () => Math.floor(Math.random() * 60);
  const start = () => {
    width = width + getIncrement(width) + randomStep;
    progress = setInterval(
      () => {
        if (width >= 96)
          clearInterval(progress);
        width = width + getIncrement(width) + randomStep;
      },
      randomTime()
    );
  };
  const end = () => {
    setTimeout(
      () => {
        clearInterval(progress);
        width = 100;
        setTimeout(
          () => {
            width = 0;
          },
          300
        );
      },
      300
    );
  };
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  {
    if (isLoading) {
      clearInterval(progress);
      width = 0;
      start();
    } else
      end();
  }
  return `<div class="fixed top-0 left-0 right-0 w-full h-0.5 z-50"><div class="bg-rose-500 h-full transition-[width] duration-100"${add_styles({ "width": `${width}%` })}></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let isLoadingBar = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(QueryClientProvider, "QueryClientProvider").$$render($$result, { client: data.queryClient }, {}, {
    default: () => {
      return `${validate_component(LoadingBar, "LoadingBar").$$render($$result, { isLoading: isLoadingBar }, {}, {})}
  <div class="font-worksans">${slots.default ? slots.default({}) : ``}</div>`;
    }
  })}`;
});
export {
  Layout as default
};
