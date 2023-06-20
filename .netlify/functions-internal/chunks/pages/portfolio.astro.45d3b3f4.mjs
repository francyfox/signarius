/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.4dce62ea.mjs';
import 'html-escaper';
import { S as SgnConfig, _ as _export_sfc, $ as $$BaseLayout } from './index.astro.8f4c4792.mjs';
import { useSSRContext, defineComponent, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import './403.astro.8584808e.mjs';
/* empty css                           */import 'pinia';
import 'naive-ui';
import '@directus/sdk';
import 'secure-ls';
import '@vicons/material';
/* empty css                           */
const works = [
  {
    title: "Ar-parts (auto-rus)",
    url: "https://www.auto-rus.ru/",
    poster: "https://res.cloudinary.com/dr5gcup5n/image/upload/v1686127191/2023-06-07_14-35_xepheu",
    bio: "Сайт выполнен на laravel. Нужно было доверстать сайт, до меня была выполнена только главная страница. Сверстал остальные страницы, переписал функционал магазина с jquery на native js. Выполнил пожелание от клиента, сделать реализацию корзины как у Ozon, пошаговая форма оформления заказа, фильтр подбора деталей. Создал сборку на laravel mix webpack для чанкование стилей, скриптов, минификации. Сделал gitlab ci скрипт для автодеплоя в продакшен, написал автотесты на Cypress для прохождения форм и публикации артефактов в Sentry"
  },
  {
    title: "Etf-Flashtrade #GIT",
    poster: "https://res.cloudinary.com/dr5gcup5n/image/upload/v1686127191/2023-06-07_14-38_lreq0u",
    url: "https://github.com/francyfox/etf-flashtrade.ru2",
    bio: "Верстка сайта по макету. Заказчик приостановил проект после презентации верстки, на второй этап (бекенд) не выделили средства. (проблемы с санкциями). Вёрстка выполнена на bootstrap, наработки выложил на гит"
  },
  {
    title: "Lummetti",
    poster: "https://res.cloudinary.com/dr5gcup5n/image/upload/v1686128706/2023-06-07_15-03_nefogw",
    url: "https://www.lumetti.ru/",
    bio: "Переверстка шапки, подвала, страницы товара. Адаптация некоторых секций, модальное окно поиск городов (для переключения субдоменов)"
  },
  {
    title: "I-keys",
    poster: "https://res.cloudinary.com/dr5gcup5n/image/upload/v1686128706/2023-06-07_15-04_jpnvm0",
    url: "https://new.i-keys.ru/landing",
    bio: "Верстка лендинга и внутренних страниц"
  },
  {
    title: "Darall menu #GIT",
    poster: "https://res.cloudinary.com/dr5gcup5n/image/upload/v1686128707/2023-06-07_15-04_1_f6zelj",
    url: "https://github.com/francyfox/darall-menu",
    bio: "Пэт проект для darall. Реализация приложения меню, для бэкенда использовал Express + Prisma. Для фронтенда Vue NaiveUI"
  }
];

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sgn-works",
  setup(__props, { expose: __expose }) {
    __expose();
    function modifyImage(str, mode) {
      return str.replace("/upload/", `/upload/${mode}/`);
    }
    const __returned__ = { modifyImage, get works() {
      return works;
    }, SgnConfig };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_n_card = resolveComponent("n-card");
  const _component_n_image = resolveComponent("n-image");
  _push(ssrRenderComponent($setup["SgnConfig"], _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"${_scopeId}><!--[-->`);
        ssrRenderList($setup.works, (work) => {
          _push2(ssrRenderComponent(_component_n_card, {
            title: work.title
          }, {
            cover: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_n_image, {
                  src: $setup.modifyImage(work.poster, "f_auto,w_500,h_250,c_scale/"),
                  lazy: true,
                  "object-fit": "cover",
                  "preview-src": work.poster
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_n_image, {
                    src: $setup.modifyImage(work.poster, "f_auto,w_500,h_250,c_scale/"),
                    lazy: true,
                    "object-fit": "cover",
                    "preview-src": work.poster
                  }, null, 8, ["src", "preview-src"])
                ];
              }
            }),
            footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="flex"${_scopeId2}><a${ssrRenderAttr("href", work.url)} rel="noopener noreferrer" target="_blank" class="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 border border-slate-300 rounded shadow outline-none hover:bg-teal-600 hover:shadow-md focus:outline-none ease"${_scopeId2}> Link </a></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex" }, [
                    createVNode("a", {
                      href: work.url,
                      rel: "noopener noreferrer",
                      target: "_blank",
                      class: "px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 border border-slate-300 rounded shadow outline-none hover:bg-teal-600 hover:shadow-md focus:outline-none ease"
                    }, " Link ", 8, ["href"])
                  ])
                ];
              }
            }),
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` ${ssrInterpolate(work.bio)} `);
              } else {
                return [
                  createTextVNode(" " + toDisplayString(work.bio) + " ", 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" }, [
            (openBlock(true), createBlock(Fragment, null, renderList($setup.works, (work) => {
              return openBlock(), createBlock(_component_n_card, {
                title: work.title
              }, {
                cover: withCtx(() => [
                  createVNode(_component_n_image, {
                    src: $setup.modifyImage(work.poster, "f_auto,w_500,h_250,c_scale/"),
                    lazy: true,
                    "object-fit": "cover",
                    "preview-src": work.poster
                  }, null, 8, ["src", "preview-src"])
                ]),
                footer: withCtx(() => [
                  createVNode("div", { class: "flex" }, [
                    createVNode("a", {
                      href: work.url,
                      rel: "noopener noreferrer",
                      target: "_blank",
                      class: "px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 border border-slate-300 rounded shadow outline-none hover:bg-teal-600 hover:shadow-md focus:outline-none ease"
                    }, " Link ", 8, ["href"])
                  ])
                ]),
                default: withCtx(() => [
                  createTextVNode(" " + toDisplayString(work.bio) + " ", 1)
                ]),
                _: 2
              }, 1032, ["title"]);
            }), 256))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/porfolio/sgn-works.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SgnWorks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro("https://example.com");
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portfolio;
  return renderTemplate`

${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Portfolio" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<div class="py-6 px-3 lg:px-0">
        <div class="text-6xl font-light mb-8">
            Portfolio
        </div>
        <div class="text-lg">
            <p class="text-3xl mb-6">
                <span># <a href="https://drive.google.com/file/d/1iqnVri9oDR7SJNOPNJY1pjV-makTbHCL/view?usp=sharing" target="_blank" class="underline hover:no-underline">CV</a></span>
                |
                # <a href="https://hh.kz/resume/1a91a626ff044cf3650039ed1f414e65743168" target="_blank" class="underline hover:no-underline">HeadHunter</a>
                |
                # <a href="https://github.com/francyfox" class="underline hover:no-underline" target="_blank">Github</a>
            </p>
            <p>
                Hi, my name is Danil. Vue/JS frontend developer from Qazaqstan. Nice see you on my page. <br>
            </p>

            <ol class="list-decimal pl-5 pt-5">
                <li><a href="#myWorks" class="underline hover:no-underline">My works</a></li>
                <li><a href="#feedback" class="underline hover:no-underline">Feedback</a></li>
            </ol>
        </div>
    </div>
    <div id="myWorks" class="py-8 px-3 lg:px-0">
        <div class="text-4xl font-light mb-8">
            My works
        </div>
        ${renderComponent($$result2, "SgnWorks", SgnWorks, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/porfolio/sgn-works.vue", "client:component-export": "default" })}
    </div>

    <div id="feedback" class="py-8 px-3 lg:px-0">
        <div class="max-w-md mx-auto md:px-0">
            <div class="text-4xl font-light mb-8">
                Feedback
            </div>
            ${renderComponent($$result2, "SgnFeedback", null, { "client:only": "vue", "client:component-hydration": "only", "client:component-path": "@components/porfolio/sgn-feedback.vue", "client:component-export": "default" })}
        </div>

    </div>

` })}`;
}, "/home/fox/PhpstormProjects/signarius/src/pages/portfolio.astro");

const $$file = "/home/fox/PhpstormProjects/signarius/src/pages/portfolio.astro";
const $$url = "/portfolio";

export { $$Portfolio as default, $$file as file, $$url as url };
