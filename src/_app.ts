import type { App } from 'vue';
import VueDirectus from 'vue-directus';
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'


const apolloClient = new ApolloClient({
    uri: 'http://0.0.0.0:8055/graphql'
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

export default (app: App) => {
    app.use(apolloProvider),
    app.use(VueDirectus, {
        apiUrl: 'http://0.0.0.0:8055/',
        auth: "storage",
        transport: {},
        storage: {},
    })
}