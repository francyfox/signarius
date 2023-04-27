import type { App } from "vue";
import { createPinia } from "pinia";
import * as gql from "gql-query-builder";
import { createAutoAnimatePlugin } from "@formkit/addons";
import { plugin, defaultConfig } from "@formkit/vue";
import VueTippy from "vue-tippy";
import "tippy.js/dist/tippy.css";

const pinia = createPinia();
export default (app: App) => {
  app.config.globalProperties.$filters = {
    truncate(text, stop, clamp) {
      return text
        ? text.slice(0, stop) + (stop < text.length ? clamp || "..." : "")
        : "";
    },
  };

  app.use(pinia);
  app.config.globalProperties.$gql = gql;
  app.use(VueTippy, {
    directive: "tippy", // => v-tippy
    component: "tippy", // => <tippy/>
    componentSingleton: "tippy-singleton", // => <tippy-singleton/>,
    defaultProps: {
      placement: "auto-end",
      allowHTML: true,
      hideOnClick: false,
    }, // => Global default options * see all props
  });
  app.use(
    plugin,
    defaultConfig({
      plugins: [createAutoAnimatePlugin()],
    })
  );
};
