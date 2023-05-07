/* global "ANICRUSH_" */

const expected = new Set([
	'SOCKET_PATH',
	'HOST',
	'PORT',
	'ORIGIN',
	'XFF_DEPTH',
	'ADDRESS_HEADER',
	'PROTOCOL_HEADER',
	'HOST_HEADER',
	'BODY_SIZE_LIMIT'
]);

if ("ANICRUSH_") {
	for (const name in process.env) {
		if (name.startsWith("ANICRUSH_")) {
			const unprefixed = name.slice("ANICRUSH_".length);
			if (!expected.has(unprefixed)) {
				throw new Error(
					`You should change envPrefix (${"ANICRUSH_"}) to avoid conflicts with existing environment variables — unexpectedly saw ${name}`
				);
			}
		}
	}
}

/**
 * @param {string} name
 * @param {any} fallback
 */
function env(name, fallback) {
	const prefixed = "ANICRUSH_" + name;
	return prefixed in process.env ? process.env[prefixed] : fallback;
}

export { env };
