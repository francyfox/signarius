import type { App } from "vue";
import naive from "naive-ui";
import { createPinia } from "pinia";

const pinia = createPinia();
export default (app: App) => {
  app.use(pinia);
  app.use(naive);
};
