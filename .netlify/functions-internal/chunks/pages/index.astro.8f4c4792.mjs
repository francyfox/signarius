/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot } from '../astro.4dce62ea.mjs';
import 'html-escaper';
import { $ as $$HeadMeta } from './403.astro.8584808e.mjs';
/* empty css                           */import { ref, useSSRContext, defineComponent, computed, resolveComponent, mergeProps, withCtx, renderSlot as renderSlot$1, withAsyncContext, createVNode, createTextVNode } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { lightTheme, darkTheme, createDiscreteApi } from 'naive-ui';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderSuspense, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { Directus } from '@directus/sdk';
import SecureLS from 'secure-ls';
import { EditRound, DeleteFilled, CommentFilled, ReportProblemRound, DoorbellSharp, FavoriteFilled } from '@vicons/material';
/* empty css                           */
const DIRECTUS_HOST = "http://127.0.0.1:8055";
const useDirectus = new Directus(DIRECTUS_HOST, {
  auth: {
    mode: "cookie",
    autoRefresh: true,
    msRefreshBeforeExpires: 3e4,
    staticToken: ""
  },
  storage: {
    prefix: "",
    mode: "LocalStorage"
  }
  // transport: {
  //   params: {},
  //   headers: {},
  //   onUploadProgress: (ProgressEvent) => {},
  // },
});
new SecureLS({
  encodingType: "rc4",
  encryptionSecret: "BZ4nykHJ"
});

const $$Astro$6 = createAstro("https://example.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  const data = Astro2.locals;
  const pages = [
    {
      link: "/dashboard",
      name: "Dashboard",
      show: data.isAuth
    },
    {
      link: "/post/category/superhot",
      name: "SuperHot Posts",
      show: true
    }
  ];
  pages.filter((i) => !!i.show);
  return renderTemplate`${maybeRenderHead($$result)}<header class="sticky top-0 w-full bg-zinc-800 text-gray-700 shadow-sm body-font z-10 astro-HPNW4VWY">
    <div class="container flex flex-col items-center justify-between py-3 mx-auto md:flex-row astro-HPNW4VWY">
        <div class="site-logo astro-HPNW4VWY">
            <a href="/" class="site-logo--icon rounded flex items-center mb-4 font-medium text-slate-300 title-font md:mb-0 astro-HPNW4VWY">
                <img src="/img/logo_mini.svg" width="90" height="90" class="astro-HPNW4VWY">
            </a>
        </div>
        <nav class="hidden md:flex flex-wrap items-center justify-center pl-6 ml-6 text-slate-300 border-l border-gray-200 gap-5 md:mr-auto astro-HPNW4VWY">
            ${pages.map((i) => i.show && renderTemplate`<a${addAttribute(i.link, "href")} class="text-lg font-medium hover:text-white astro-HPNW4VWY">${i.name}</a>`)}
        </nav>
        ${renderComponent($$result, "HBar", null, { "client:only": "vue", "client:component-hydration": "only", "class": "astro-HPNW4VWY", "client:component-path": "src/components/layout/header/sgn-account-bar.vue", "client:component-export": "default" })}
    </div>
</header>`;
}, "/home/fox/PhpstormProjects/signarius/src/components/header.astro");

const $$Astro$5 = createAstro("https://example.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-zinc-800">
    <div class="container px-6 py-8 mx-auto">
        <hr class="my-10 border-gray-200 dark:border-gray-700">

        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="text-sm text-gray-500 mb-3 sm:mb-0">
                Site content under license
                <a class="text-white underline hover:text-slate-300 hover:no-underline" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.ru">
                    Creative Commons BY-NC-ND
                </a>
            </p>

            <p>
                <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.ru">
                    <img src="https://licensebuttons.net/l/by-nc-nd/3.0/88x31.png">
                </a>
            </p>

            <div class="flex mt-3 -mx-2 sm:mt-0">
                <a href="#" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>

                <a href="#" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                <a href="#" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
            </div>
        </div>
    </div>
</footer>`;
}, "/home/fox/PhpstormProjects/signarius/src/components/footer.astro");

const $$Astro$4 = createAstro("https://example.com");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="min-h-full">
<head>
    ${renderComponent($$result, "HeadMeta", $$HeadMeta, {})}
    <title> ${title} </title>
${renderHead($$result)}</head>
<body class="min-h-full text-slate-100">
<div id="app" class="flex flex-col min-h-screen justify-between">
    ${renderComponent($$result, "Header", $$Header, {})}
    <section class="content my-auto ">
        <div class="container m-auto py-10 ">
            ${renderSlot($$result, $$slots["default"])}
        </div>
    </section>
    ${renderComponent($$result, "Footer", $$Footer, {})}
</div>
</body></html>`;
}, "/home/fox/PhpstormProjects/signarius/src/layouts/base-layout.astro");

const $$Astro$3 = createAstro("https://example.com");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div class="text-4xl font-light mb-8">
        Related posts
    </div>
    ${renderComponent($$result2, "SgnPostList", null, { "client:only": "vue", "client:component-hydration": "only", "client:component-path": "src/components/post/sgn-post-list.vue", "client:component-export": "default" })}
` })}`;
}, "/home/fox/PhpstormProjects/signarius/src/pages/index.astro");

const $$file$3 = "/home/fox/PhpstormProjects/signarius/src/pages/index.astro";
const $$url$3 = "";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://example.com");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const pages = [
    {
      link: "/post/add",
      name: "Add new post"
    },
    {
      link: "/post/me",
      name: "My posts"
    },
    {
      link: "/post/leader",
      name: "Leader Board"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div class="text-4xl font-light mb-8">
        Dashboard
    </div>
    <div class="flex flex-col align-start max-w-screen-xl">
        ${pages.map((i) => renderTemplate`<a${addAttribute(i.link, "href")} class="text-lg font-medium hover:text-white">${i.name}</a>`)}
    </div>
` })}`;
}, "/home/fox/PhpstormProjects/signarius/src/pages/dashboard/index.astro");

const $$file$2 = "/home/fox/PhpstormProjects/signarius/src/pages/dashboard/index.astro";
const $$url$2 = "/dashboard";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const useConfigStore = defineStore("config", () => {
  const theme = ref();
  const message = ref();
  return {
    theme,
    message
  };
});

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "sgn-config",
  setup(__props, { expose: __expose }) {
    __expose();
    const store = useConfigStore();
    const { message, theme } = storeToRefs(store);
    const themeRef = ref("dark");
    const configProviderPropsRef = computed(() => ({
      theme: themeRef.value === "light" ? lightTheme : darkTheme
    }));
    const discreteApi = createDiscreteApi(
      ["message", "dialog", "notification", "loadingBar"],
      {
        configProviderProps: configProviderPropsRef
      }
    );
    theme.value = configProviderPropsRef.value.theme;
    message.value = discreteApi.message;
    const __returned__ = { store, message, theme, themeRef, configProviderPropsRef, discreteApi };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_n_config_provider = resolveComponent("n-config-provider");
  _push(ssrRenderComponent(_component_n_config_provider, mergeProps({
    theme: $setup.configProviderPropsRef.theme
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot$1(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/provider/config/sgn-config.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SgnConfig = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const $$Astro$1 = createAstro("https://example.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "New post" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div class="max-w-md mx-auto text-6xl font-light mb-8">
        <h1>New post</h1>
    </div>
    ${renderComponent($$result2, "SgnMakePost", null, { "client:only": "vue", "client:component-hydration": "only", "client:component-path": "src/components/form/post/sgn-make-post.vue", "client:component-export": "default" })}
` })}`;
}, "/home/fox/PhpstormProjects/signarius/src/pages/post/add/index.astro");

const $$file$1 = "/home/fox/PhpstormProjects/signarius/src/pages/post/add/index.astro";
const $$url$1 = "/post/add";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const usePost = defineStore("post", () => {
  const sdk = useDirectus;
  const data = ref(null);
  const postList = ref(null);
  ref([]);
  ref([]);
  ref([]);
  async function getPost(slug) {
    const response = await sdk.items("post").readByQuery({
      filter: {
        slug: {
          _eq: slug
        }
      },
      fields: [
        "*",
        "textblock.item.text",
        "user_created.first_name",
        "user_created.last_name",
        "user_created.avatar",
        "user_created.title",
        "comments.item.*",
        "comments.item.user_created.id",
        "comments.item.user_created.first_name",
        "comments.item.user_created.last_name",
        "comments.item.user_created.avatar",
        "comments.item.user_created.title"
      ]
    });
    return response;
  }
  async function getPostCollection() {
    const response = await sdk.items("post").readByQuery({
      sort: [],
      fields: [
        "*",
        "user_created.first_name",
        "user_created.last_name",
        "user_created.avatar",
        "user_created.title"
      ]
    });
    return response;
  }
  return {
    data,
    postList,
    getPostCollection,
    getPost
  };
});

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}
function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate())
  ].join("-") + " " + [
    padTo2Digits(date.getHours()),
    padTo2Digits(date.getMinutes()),
    padTo2Digits(date.getSeconds())
  ].join(":");
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sgn-post",
  props: {
    slug: {}
  },
  async setup(__props, { expose: __expose }) {
    __expose();
    let __temp, __restore;
    const props = __props;
    const configStore = useConfigStore();
    const { message } = configStore;
    const store = usePost();
    const { getPost } = store;
    const { data } = storeToRefs(store);
    try {
      const response = ([__temp, __restore] = withAsyncContext(() => getPost(props.slug)), __temp = await __temp, __restore(), __temp);
      data.value = response.data[0];
    } catch (e) {
      message.error(e.message);
    }
    const __returned__ = { props, configStore, message, store, getPost, data, SgnConfig, get formatDate() {
      return formatDate;
    }, get EditRound() {
      return EditRound;
    }, get DeleteFilled() {
      return DeleteFilled;
    }, get CommentFilled() {
      return CommentFilled;
    }, get ReportProblemRound() {
      return ReportProblemRound;
    }, get DoorbellSharp() {
      return DoorbellSharp;
    }, get FavoriteFilled() {
      return FavoriteFilled;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_n_button = resolveComponent("n-button");
  const _component_n_icon = resolveComponent("n-icon");
  ssrRenderSuspense(_push, {
    fallback: () => {
      _push(`Post is loading...`);
    },
    default: () => {
      _push(`<div class="flex flex-col items-start max-w-screen-xl"><div class="flex flex-row flex-wrap gap-4"><div class="flex mr-auto bg-white/[.06] shadow-lg rounded-lg px-2 max-w-md md:max-w-2xl"><div class="flex gap-4 py-3"><figure class="flex"><img width="80" height="80"${ssrRenderAttr("src", `http://127.0.0.1:8055/assets/${$setup.data.user_created.avatar}`)}${ssrRenderAttr("alt", $setup.data.user_created.id)} class="rounded"></figure><div class="flex flex-col justify-center"><div class="text"><strong>Author: </strong><a${ssrRenderAttr("href", `/profile/${$setup.data.user_created.id}`)} class="inline-flex underline hover:no-underline mr-1">${ssrInterpolate(`${$setup.data.user_created.first_name} ${$setup.data.user_created.last_name}`)}</a><code class="px-2 py-0.5 bg-black/[0.6] text-gray-200 items-center justify-center rounded">${ssrInterpolate($setup.data.user_created.title)}</code></div><div class="text"><strong>Created: </strong><code><time${ssrRenderAttr("datetime", $setup.data.date_created)}>${ssrInterpolate($setup.formatDate(new Date($setup.data.date_created)))}</time></code></div><div class="text"><strong>Updated: </strong>`);
      if ($setup.data.date_updated) {
        _push(`<code><time${ssrRenderAttr("datetime", $setup.data.date_updated)}>${ssrInterpolate($setup.formatDate(new Date($setup.data.date_updated)))}</time></code>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="mr-auto bg-white/[.06] text-white shadow-lg rounded-lg px-2 py-2 mb-5 max-w-md md:max-w-2xl">`);
      _push(ssrRenderComponent($setup["SgnConfig"], { class: "flex flex-row gap-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_n_button, { type: "warning" }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_n_icon, {
                    size: "24",
                    component: $setup.EditRound
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_n_icon, {
                      size: "24",
                      component: $setup.EditRound
                    }, null, 8, ["component"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Edit post `);
                } else {
                  return [
                    createTextVNode(" Edit post ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_n_button, { type: "error" }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_n_icon, {
                    size: "24",
                    component: $setup.DeleteFilled
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_n_icon, {
                      size: "24",
                      component: $setup.DeleteFilled
                    }, null, 8, ["component"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Remove post `);
                } else {
                  return [
                    createTextVNode(" Remove post ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_n_button, { dashed: "" }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_n_icon, {
                    size: "24",
                    component: $setup.CommentFilled
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_n_icon, {
                      size: "24",
                      component: $setup.CommentFilled
                    }, null, 8, ["component"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Show comments `);
                } else {
                  return [
                    createTextVNode(" Show comments ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_n_button, null, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_n_icon, {
                    size: "24",
                    component: $setup.ReportProblemRound
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_n_icon, {
                      size: "24",
                      component: $setup.ReportProblemRound
                    }, null, 8, ["component"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Report `);
                } else {
                  return [
                    createTextVNode(" Report ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_n_button, { dashed: "" }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_n_icon, {
                    size: "24",
                    component: $setup.DoorbellSharp
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_n_icon, {
                      size: "24",
                      component: $setup.DoorbellSharp
                    }, null, 8, ["component"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Subscribe `);
                } else {
                  return [
                    createTextVNode(" Subscribe ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_n_button, { secondary: "" }, {
              icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_n_icon, {
                    size: "24",
                    component: $setup.FavoriteFilled
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_n_icon, {
                      size: "24",
                      component: $setup.FavoriteFilled
                    }, null, 8, ["component"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Favorite `);
                } else {
                  return [
                    createTextVNode(" Favorite ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-2" }, [
                createVNode(_component_n_button, { type: "warning" }, {
                  icon: withCtx(() => [
                    createVNode(_component_n_icon, {
                      size: "24",
                      component: $setup.EditRound
                    }, null, 8, ["component"])
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" Edit post ")
                  ]),
                  _: 1
                }),
                createVNode(_component_n_button, { type: "error" }, {
                  icon: withCtx(() => [
                    createVNode(_component_n_icon, {
                      size: "24",
                      component: $setup.DeleteFilled
                    }, null, 8, ["component"])
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" Remove post ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex flex-col gap-2" }, [
                createVNode(_component_n_button, { dashed: "" }, {
                  icon: withCtx(() => [
                    createVNode(_component_n_icon, {
                      size: "24",
                      component: $setup.CommentFilled
                    }, null, 8, ["component"])
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" Show comments ")
                  ]),
                  _: 1
                }),
                createVNode(_component_n_button, null, {
                  icon: withCtx(() => [
                    createVNode(_component_n_icon, {
                      size: "24",
                      component: $setup.ReportProblemRound
                    }, null, 8, ["component"])
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" Report ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex flex-col gap-2" }, [
                createVNode(_component_n_button, { dashed: "" }, {
                  icon: withCtx(() => [
                    createVNode(_component_n_icon, {
                      size: "24",
                      component: $setup.DoorbellSharp
                    }, null, 8, ["component"])
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" Subscribe ")
                  ]),
                  _: 1
                }),
                createVNode(_component_n_button, { secondary: "" }, {
                  icon: withCtx(() => [
                    createVNode(_component_n_icon, {
                      size: "24",
                      component: $setup.FavoriteFilled
                    }, null, 8, ["component"])
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" Favorite ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><main class="pt-4"><!--[-->`);
      ssrRenderList($setup.data.textblock, (block) => {
        _push(`<div class="post-content px-4 lg:px-0 max-w-screen-xl mx-auto text-xl leading-relaxed">${block.item.text}</div>`);
      });
      _push(`<!--]--></main></div>`);
    },
    _: 1
  });
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/post/sgn-post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SgnPost = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { slug } = Astro2.params;
  const pageTitle = slug.charAt(0).toUpperCase() + slug.slice(1).replaceAll("-", " ");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div class="text-6xl font-light mb-8">
        <h1>${pageTitle}</h1>
    </div>
    ${renderComponent($$result2, "SgnPost", SgnPost, { "slug": slug, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "src/components/post/sgn-post.vue", "client:component-export": "default" })}
` })}`;
}, "/home/fox/PhpstormProjects/signarius/src/pages/post/[slug]/index.astro");

const $$file = "/home/fox/PhpstormProjects/signarius/src/pages/post/[slug]/index.astro";
const $$url = "/post/[slug]";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, SgnConfig as S, _export_sfc as _, index$2 as a, index$1 as b, index as c, index$3 as i, useDirectus as u };
