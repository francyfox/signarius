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
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "Register", null, { "client:only": "vue", "client:component-hydration": "only", "client:component-path": "src/components/form/security/register/sgn-register.vue", "client:component-export": "default" })}
` })}`;
}, "/home/fox/PhpstormProjects/signarius/src/pages/security/register.astro");

const $$file = "/home/fox/PhpstormProjects/signarius/src/pages/security/register.astro";
const $$url = "/security/register";

export { $$Register as default, $$file as file, $$url as url };
