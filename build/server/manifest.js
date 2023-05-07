const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","manifest.json","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.71d96bba.js","imports":["_app/immutable/entry/start.71d96bba.js","_app/immutable/chunks/index.28a8b093.js","_app/immutable/chunks/singletons.0329af1e.js","_app/immutable/chunks/index.c00baded.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.92ac8097.js","imports":["_app/immutable/entry/app.92ac8097.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.28a8b093.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-f2095703.js').then(function (n) { return n._; }),
			() => import('./chunks/1-cfaf1ef2.js'),
			() => import('./chunks/2-7de8e682.js'),
			() => import('./chunks/3-55f9a0fd.js'),
			() => import('./chunks/4-2824314a.js'),
			() => import('./chunks/5-d06cb3e4.js'),
			() => import('./chunks/6-940096ea.js'),
			() => import('./chunks/7-48d493cc.js'),
			() => import('./chunks/8-e78c4b1c.js'),
			() => import('./chunks/9-b3e037c1.js'),
			() => import('./chunks/10-47e74134.js'),
			() => import('./chunks/11-e83b7121.js'),
			() => import('./chunks/12-e3d7e9cd.js'),
			() => import('./chunks/13-dfc5c019.js'),
			() => import('./chunks/14-d0d27f6b.js'),
			() => import('./chunks/15-f7797ae6.js'),
			() => import('./chunks/16-ab3220c9.js'),
			() => import('./chunks/17-77559b9d.js'),
			() => import('./chunks/18-140a53af.js'),
			() => import('./chunks/19-fa8ef734.js'),
			() => import('./chunks/20-2cc25b02.js'),
			() => import('./chunks/21-54415967.js'),
			() => import('./chunks/22-4f1dc836.js'),
			() => import('./chunks/23-da3af699.js'),
			() => import('./chunks/24-16a63ded.js'),
			() => import('./chunks/25-da0aa897.js'),
			() => import('./chunks/26-c98d7a76.js'),
			() => import('./chunks/27-647156fe.js')
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

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
