export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
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
	() => import('./nodes/13')];

export const server_loads = [];

export const dictionary = {
	"/(app)": [5,[2]],
	"/(app)/anime/details/[urlAnime]": [6,[2]],
	"/(app)/anime/read/[idChapter]/[urlManga]": [7,[3]],
	"/(app)/browse": [8,[2]],
	"/(app)/character/[urlCharacter]": [9,[2]],
	"/(app)/manga": [10,[2]],
	"/(app)/manga/details/[urlManga]": [11,[2]],
	"/(app)/manga/read/[idChapter]/[urlManga]": [12,[4]],
	"/(app)/staff/[urlStaff]": [13,[2]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};