/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../astro.4dce62ea.mjs';
import 'html-escaper';
import { $ as $$BaseLayout } from './index.astro.8f4c4792.mjs';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import './403.astro.8584808e.mjs';
/* empty css                           */import 'vue';
import 'pinia';
import 'naive-ui';
import 'vue/server-renderer';
import '@directus/sdk';
import 'secure-ls';
import '@vicons/material';
/* empty css                           */
const $$Astro = createAstro("https://example.com");
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Sign In" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "Login", null, { "client:only": "vue", "client:component-hydration": "only", "client:component-path": "src/components/form/security/login/sgn-login.vue", "client:component-export": "default" })}
` })}`;
}, "/home/fox/PhpstormProjects/signarius/src/pages/security/login.astro");

const $$file = "/home/fox/PhpstormProjects/signarius/src/pages/security/login.astro";
const $$url = "/security/login";

export { $$Login as default, $$file as file, $$url as url };
