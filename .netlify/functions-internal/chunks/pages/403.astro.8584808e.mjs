/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, e as renderHead } from '../astro.4dce62ea.mjs';
import 'html-escaper';

const $$Astro$1 = createAstro("https://example.com");
const $$HeadMeta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeadMeta;
  return renderTemplate`<meta charset="UTF-8">
<meta name="description" content="Free Web tutorials">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="John Doe">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="naive-ui-style">
<meta name="vueuc-style">
<meta name="generator"${addAttribute(Astro2.generator, "content")}>`;
}, "/home/fox/PhpstormProjects/signarius/src/components/head-meta.astro");

const $$Astro = createAstro("https://example.com");
const $$403 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$403;
  return renderTemplate`<html lang="en">
<head>
    ${renderComponent($$result, "HeadMeta", $$HeadMeta, {})}
    <title> Access Denied </title>
${renderHead($$result)}</head>
<body class="min-h-full text-slate-100 m-0">
<main class="h-screen w-full flex flex-col justify-center items-center bg-zinc-800">
    <h1 class="text-9xl font-extrabold text-white tracking-widest">403</h1>
    <div class="subtext bg-[#FF6A3D] px-2 text-xl rounded rotate-12 absolute">
        Access Denied
    </div>
    <div class="mt-5 text-xl text-white no-underline">
        You shall not pass, Go to <a class="text-white" href="/">Home</a> or <a class="text-white" href="/security/login">Login</a>
    </div>
</main>
</body></html>`;
}, "/home/fox/PhpstormProjects/signarius/src/pages/403.astro");

const $$file = "/home/fox/PhpstormProjects/signarius/src/pages/403.astro";
const $$url = "/403";

const _403 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$403,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$HeadMeta as $, _403 as _ };
