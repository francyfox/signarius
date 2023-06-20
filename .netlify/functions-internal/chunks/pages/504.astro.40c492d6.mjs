/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, e as renderHead } from '../astro.4dce62ea.mjs';
import 'html-escaper';
import { $ as $$HeadMeta } from './403.astro.8584808e.mjs';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro = createAstro("https://example.com");
const $$504 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$504;
  return renderTemplate`<html lang="en">
<head>
    ${renderComponent($$result, "HeadMeta", $$HeadMeta, {})}
    <title> 404 Not Found </title>
${renderHead($$result)}</head>
<body class="min-h-full text-slate-100 m-0">
<main class="h-screen w-full flex flex-col justify-center items-center bg-zinc-800">
    <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
    <div class="bg-[#FF6A3D] px-2 text-xl rounded rotate-12 absolute">
        Page Not Found
    </div>
    <div class="flex flex-col mt-5 text-3xl text-white no-underline">
        You shall not pass
        <a class="text-white" href="/">Go home</a>
    </div>
</main>
</body></html>`;
}, "/home/fox/PhpstormProjects/signarius/src/pages/504.astro");

const $$file = "/home/fox/PhpstormProjects/signarius/src/pages/504.astro";
const $$url = "/504";

export { $$504 as default, $$file as file, $$url as url };
