import type { App } from 'vue';
import { createPinia } from 'pinia'
import VueDirectus from 'vue-directus';
import * as gql from 'gql-query-builder'
import { createAutoAnimatePlugin } from '@formkit/addons'
import { plugin, defaultConfig } from '@formkit/vue'

const pinia = createPinia()
export default (app: App) => {
    app.use(pinia)
    app.config.globalProperties.$gql = gql
    app.use(plugin, defaultConfig({
        plugins: [
            createAutoAnimatePlugin()
        ]
    }))

    app.use(VueDirectus, {
        apiUrl: 'http://0.0.0.0:8055/',
        auth: "storage",
        transport: {},
        storage: {},
    })
}