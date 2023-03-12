import type { App } from 'vue';
import VueDirectus from 'vue-directus';
import * as gql from 'gql-query-builder'
import axios, { AxiosInstance } from 'axios';

const gqlAxios: AxiosInstance = axios.create({
    baseURL: "http://0.0.0.0:8055/graphql",
    headers: {
        'Access-Control-Allow-Origin': "*",
        "Content-type": "application/json"
    },
});

export default (app: App) => {
    app.config.globalProperties = {
        $gql: gql,
        $axiosGQL: gqlAxios
    }
    app.use(VueDirectus, {
        apiUrl: 'http://0.0.0.0:8055/',
        auth: "storage",
        transport: {},
        storage: {},
    })
}