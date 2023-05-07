import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = { url: string }
type RouteId = '/(app)/anime/details/[url]';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../../../$types.js').LayoutData>, keyof import('../../../$types.js').LayoutData> & EnsureDefined<import('../../../$types.js').LayoutData>, keyof LayoutData> & EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/(app)/anime/details/[url]" | "/(app)/anime/details/[url]/characters" | "/(app)/anime/details/[url]/recommendations" | "/(app)/anime/details/[url]/staff" | "/(app)/anime/details/[url]/trailer" | "/(app)/anime/details/[url]/watch"
type LayoutParams = RouteParams & { url?: string }
type LayoutParentData = Omit<EnsureDefined<import('../../../../$types.js').LayoutData>, keyof import('../../../$types.js').LayoutData> & EnsureDefined<import('../../../$types.js').LayoutData>;

export type EntryGenerator = () => Promise<Array<RouteParams>> | Array<RouteParams>;
export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type LayoutServerData = null;
export type LayoutLoad<OutputData extends OutputDataShape<LayoutParentData> = OutputDataShape<LayoutParentData>> = Kit.Load<LayoutParams, LayoutServerData, LayoutParentData, OutputData, LayoutRouteId>;
export type LayoutLoadEvent = Parameters<LayoutLoad>[0];
export type LayoutData = Expand<Omit<LayoutParentData, keyof Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+layout.js').load>>>> & OptionalUnion<EnsureDefined<Kit.AwaitedProperties<Awaited<ReturnType<typeof import('./proxy+layout.js').load>>>>>>;