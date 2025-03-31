import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.wNkICssO.js","_app/immutable/chunks/C51Mjhqs.js","_app/immutable/chunks/DqLC-EYz.js","_app/immutable/chunks/DU1We8Ep.js"];
export const stylesheets = ["_app/immutable/assets/Works.DpL4kwep.css"];
export const fonts = [];
