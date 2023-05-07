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
	() => import('./nodes/27')
];

export const server_loads = [];

export const dictionary = {
		"/(app)": [6,[2]],
		"/(app)/anime/details/[url]": [7,[2,3]],
		"/(app)/anime/details/[url]/characters": [8,[2,3]],
		"/(app)/anime/details/[url]/recommendations": [9,[2,3]],
		"/(app)/anime/details/[url]/relations": [10,[2,3]],
		"/(app)/anime/details/[url]/staff": [11,[2,3]],
		"/(app)/anime/details/[url]/trailer": [12,[2,3]],
		"/(app)/anime/view/[idEpisode]/[urlAnime]": [13,[2]],
		"/(app)/browse": [14,[2]],
		"/(app)/character/[urlCharacter]": [15,[2]],
		"/(app)/library": [16,[2]],
		"/(app)/manga": [17,[2]],
		"/(app)/manga/details/[url]": [18,[2,4]],
		"/(app)/manga/details/[url]/characters": [19,[2,4]],
		"/(app)/manga/details/[url]/recommendations": [20,[2,4]],
		"/(app)/manga/details/[url]/relations": [21,[2,4]],
		"/(app)/manga/details/[url]/staff": [22,[2,4]],
		"/(app)/manga/details/[url]/trailer": [23,[2,4]],
		"/(app)/manga/read/[idChapter]/[urlManga]": [24,[5]],
		"/(app)/staff/[urlStaff]": [25,[2]],
		"/(app)/studio/[urlStudio]": [26,[2]],
		"/(app)/timeline": [27,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';