import { d as slot } from "../../chunks/index.js";
import "clsx";
/* empty css                                               */
function Navigation($$payload) {
  $$payload.out += `<div id="nav" class="svelte-5aos6o"><div class="name svelte-5aos6o"><p>Matthew Wisniewski</p></div> <div class="controls"><a href="#about" class="nav-item svelte-5aos6o">About</a> <a href="#history" class="nav-item svelte-5aos6o">History</a> <a href="#work" class="nav-item svelte-5aos6o">Work</a> <a href="#contact" class="nav-item svelte-5aos6o">Contact</a></div></div>`;
}
function _layout($$payload, $$props) {
  Navigation($$payload);
  $$payload.out += `<!----> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
