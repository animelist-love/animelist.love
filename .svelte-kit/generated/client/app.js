export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31')
];

export const server_loads = [0];

export const dictionary = {
		"/(app)": [7,[2]],
		"/(app)/anime/details/[url]": [8,[2,3]],
		"/(app)/anime/details/[url]/characters": [9,[2,3]],
		"/(app)/anime/details/[url]/recommendations": [10,[2,3]],
		"/(app)/anime/details/[url]/staff": [11,[2,3]],
		"/(app)/anime/details/[url]/trailer": [12,[2,3]],
		"/(app)/anime/details/[url]/watch": [13,[2,3]],
		"/(app)/anime/view/[idEpisode]/[urlAnime]": [14,[2]],
		"/(app)/browse/anime": [15,[2,4]],
		"/(app)/browse/characters": [16,[2,4]],
		"/(app)/browse/manga": [17,[2,4]],
		"/(app)/browse/staff": [18,[2,4]],
		"/(app)/character/[url]": [19,[2]],
		"/(app)/library": [20,[2]],
		"/(app)/manga": [21,[2]],
		"/(app)/manga/details/[url]": [22,[2,5]],
		"/(app)/manga/details/[url]/characters": [23,[2,5]],
		"/(app)/manga/details/[url]/recommendations": [24,[2,5]],
		"/(app)/manga/details/[url]/relations": [25,[2,5]],
		"/(app)/manga/details/[url]/staff": [26,[2,5]],
		"/(app)/manga/details/[url]/trailer": [27,[2,5]],
		"/(app)/manga/read/[idChapter]/[urlManga]": [28,[6]],
		"/(app)/staff/[url]": [29,[2]],
		"/(app)/studio/[url]": [30,[2]],
		"/(app)/timeline": [31,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';