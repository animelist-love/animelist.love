import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type LayoutRouteId = RouteId | "/(app)" | "/(app)/anime/details/[url]" | "/(app)/anime/details/[url]/characters" | "/(app)/anime/details/[url]/recommendations" | "/(app)/anime/details/[url]/staff" | "/(app)/anime/details/[url]/trailer" | "/(app)/anime/details/[url]/watch" | "/(app)/anime/view/[idEpisode]/[urlAnime]" | "/(app)/browse/anime" | "/(app)/browse/characters" | "/(app)/browse/manga" | "/(app)/browse/staff" | "/(app)/character/[url]" | "/(app)/library" | "/(app)/manga" | "/(app)/manga/details/[url]" | "/(app)/manga/details/[url]/characters" | "/(app)/manga/details/[url]/recommendations" | "/(app)/manga/details/[url]/relations" | "/(app)/manga/details/[url]/staff" | "/(app)/manga/details/[url]/trailer" | "/(app)/manga/read/[idChapter]/[urlManga]" | "/(app)/staff/[url]" | "/(app)/studio/[url]" | "/(app)/timeline" | null
type LayoutParams = RouteParams & { url?: string,idEpisode?: string,urlAnime?: string,idChapter?: string,urlManga?: string }
type LayoutServerParentData = EnsureDefined<{}>;
type LayoutParentData = EnsureDefined<{}>;

export type LayoutServerLoad<OutputData extends Partial<App.PageData> & Record<string, any> | void = Partial<App.PageData> & Record<string, any> | void> = Kit.ServerLoad<LayoutParams, LayoutServerParentData, OutputData, LayoutRouteId>;
export type LayoutServerLoadEvent = Parameters<LayoutServerLoad>[0];
export type LayoutServerData = Expand<OptionalUnion<EnsureDefined<Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+layout.server.js').load>>>>>>;
export type LayoutLoad<OutputData extends OutputDataShape<LayoutParentData> = OutputDataShape<LayoutParentData>> = Kit.Load<LayoutParams, LayoutServerData, LayoutParentData, OutputData, LayoutRouteId>;
export type LayoutLoadEvent = Parameters<LayoutLoad>[0];
export type LayoutData = Expand<Omit<LayoutParentData, keyof Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+layout.js').load>>>> & OptionalUnion<EnsureDefined<Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+layout.js').load>>>>>>;
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;