export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app.css","favicon.png","lootsafe.png","satellite.png","shapeshift.png","splash.png","youtube.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.7vryYu8w.js",app:"_app/immutable/entry/app.C3-36-zs.js",imports:["_app/immutable/entry/start.7vryYu8w.js","_app/immutable/chunks/ObkNxNBw.js","_app/immutable/chunks/DqLC-EYz.js","_app/immutable/chunks/6X48J5Ym.js","_app/immutable/entry/app.C3-36-zs.js","_app/immutable/chunks/DqLC-EYz.js","_app/immutable/chunks/DLitaYgr.js","_app/immutable/chunks/C51Mjhqs.js","_app/immutable/chunks/B7NSW5TJ.js","_app/immutable/chunks/6X48J5Ym.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
