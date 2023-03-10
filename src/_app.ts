import type { App } from 'vue';
import VueDirectus from 'vue-directus';
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import VueApollo from 'vue-apollo'

const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
    cache,
    uri: 'http://localhost:4042/graphql',
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

export default (app: App) => {
    app.use(VueDirectus, {
        apiUrl: 'http://0.0.0.0:8055/',
        auth: "storage",
        transport: {},
        storage: {},
    })
}