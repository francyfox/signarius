import type { App } from 'vue';
import { createPinia } from 'pinia'
import VueDirectus from 'vue-directus';
import * as gql from 'gql-query-builder'
import { createAutoAnimatePlugin } from '@formkit/addons'
import { plugin, defaultConfig } from '@formkit/vue'
import { DIRECTUS_HOST } from "@app/consts";

const pinia = createPinia()
export default (app: App) => {
    app.config.globalProperties.$filters = {
        truncate(text, stop, clamp) {
            return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
        }
    }

    app.use(pinia)
    app.config.globalProperties.$gql = gql
    app.use(plugin, defaultConfig({
        plugins: [
            createAutoAnimatePlugin()
        ]
    }))

    app.use(VueDirectus, {
        apiUrl: DIRECTUS_HOST,
        auth: "storage",
        transport: {},
        storage: {},
    })
}