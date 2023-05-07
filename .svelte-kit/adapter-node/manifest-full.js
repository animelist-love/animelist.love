export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","manifest.json","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.71d96bba.js","imports":["_app/immutable/entry/start.71d96bba.js","_app/immutable/chunks/index.28a8b093.js","_app/immutable/chunks/singletons.0329af1e.js","_app/immutable/chunks/index.c00baded.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.92ac8097.js","imports":["_app/immutable/entry/app.92ac8097.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.28a8b093.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js'),
			() => import('./nodes/26.js'),
			() => import('./nodes/27.js')
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/anime/details/[url]",
				pattern: /^\/anime\/details\/([^/]+?)\/?$/,
				params: [{"name":"url","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/anime/details/[url]/characters",
				pattern: /^\/anime\/details\/([^/]+?)\/characters\/?$/,
				params: [{"name":"url","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/anime/details/[url]/recommendations",
				pattern: /^\/anime\/details\/([^/]+?)\/recommendations\/?$/,
				params: [{"name":"url","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/anime/details/[url]/relations",
				pattern: /^\/anime\/details\/([^/]+?)\/relations\/?$/,
				params: [{"name":"url","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(app)/anime/details/[url]/staff",
				pattern: /^\/anime\/details\/([^/]+?)\/staff\/?$/,
				params: [{"name":"url","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(app)/anime/details/[url]/trailer",
				pattern: /^\/anime\/details\/([^/]+?)\/trailer\/?$/,
				params: [{"name":"url","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(app)/anime/view/[idEpisode]/[urlAnime]",
				pattern: /^\/anime\/view\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"idEpisode","optional":false,"rest":false,"chained":false},{"name":"urlAnime","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(app)/browse",
				pattern: /^\/browse\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(app)/character/[urlCharacter]",
				pattern: /^\/character\/([^/]+?)\/?$/,
				params: [{"name":"urlCharacter","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(app)/library",
				pattern: /^\/library\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(app)/manga",
				pattern: /^\/manga\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(app)/manga/details/[url]",
				pattern: /^\/manga\/details\/([^/]+?)\/?$/,
				params: [{"name":"url","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4], errors: [1,,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(app)/manga/details/[url]/characters",
				pattern: /^\/manga\/details\/([^/]+?)\/characters\/?$/,
				params: [{"name":"url","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4], errors: [1,,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(app)/manga/details/[url]/recommendations",
				pattern: /^\/manga\/details\/([^/]+?)\/recommendations\/?$/,
				params: [{"name":"url","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4], errors: [1,,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(app)/manga/details/[url]/relations",
				pattern: /^\/manga\/details\/([^/]+?)\/relations\/?$/,
				params: [{"name":"url","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4], errors: [1,,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(app)/manga/details/[url]/staff",
				pattern: /^\/manga\/details\/([^/]+?)\/staff\/?$/,
				params: [{"name":"url","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4], errors: [1,,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(app)/manga/details/[url]/trailer",
				pattern: /^\/manga\/details\/([^/]+?)\/trailer\/?$/,
				params: [{"name":"url","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,4], errors: [1,,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(app)/manga/read/[idChapter]/[urlManga]",
				pattern: /^\/manga\/read\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"idChapter","optional":false,"rest":false,"chained":false},{"name":"urlManga","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,5], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(app)/staff/[urlStaff]",
				pattern: /^\/staff\/([^/]+?)\/?$/,
				params: [{"name":"urlStaff","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(app)/studio/[urlStudio]",
				pattern: /^\/studio\/([^/]+?)\/?$/,
				params: [{"name":"urlStudio","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(app)/timeline",
				pattern: /^\/timeline\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 27 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
