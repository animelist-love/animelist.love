import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type RouteId = '/(app)';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<EnsureDefined<import('../$types.js').LayoutData>, keyof LayoutData> & EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/(app)" | "/(app)/anime/details/[url]" | "/(app)/anime/details/[url]/characters" | "/(app)/anime/details/[url]/recommendations" | "/(app)/anime/details/[url]/staff" | "/(app)/anime/details/[url]/trailer" | "/(app)/anime/details/[url]/watch" | "/(app)/anime/view/[idEpisode]/[urlAnime]" | "/(app)/browse/anime" | "/(app)/browse/characters" | "/(app)/browse/manga" | "/(app)/browse/staff" | "/(app)/character/[url]" | "/(app)/library" | "/(app)/manga" | "/(app)/manga/details/[url]" | "/(app)/manga/details/[url]/characters" | "/(app)/manga/details/[url]/recommendations" | "/(app)/manga/details/[url]/relations" | "/(app)/manga/details/[url]/staff" | "/(app)/manga/details/[url]/trailer" | "/(app)/staff/[url]" | "/(app)/studio/[url]" | "/(app)/timeline"
type LayoutParams = RouteParams & { url?: string,idEpisode?: string,urlAnime?: string }
type LayoutParentData = EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageLoad<OutputData extends OutputDataShape<PageParentData> = OutputDataShape<PageParentData>> = Kit.Load<RouteParams, PageServerData, PageParentData, OutputData, RouteId>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageData = Expand<Omit<PageParentData, keyof PageParentData & EnsureDefined<PageServerData>> & OptionalUnion<EnsureDefined<PageParentData & EnsureDefined<PageServerData>>>>;
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;