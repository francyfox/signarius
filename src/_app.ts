import type { App } from "vue";
import naive from "naive-ui";
import { createPinia } from "pinia";
import formCreate from "@form-create/naive-ui";
import VueCookies from "vue-cookies";

const pinia = createPinia();
export default (app: App) => {
  app.use(VueCookies, { expires: "7d", sameSite: "Strict" });
  app.use(pinia);
  app.use(naive);
  app.use(formCreate);
};
