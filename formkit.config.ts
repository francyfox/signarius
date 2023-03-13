import { DefaultConfigOptions } from '@formkit/vue'
import { createAutoAnimatePlugin } from '@formkit/addons'

const config: DefaultConfigOptions = {
    locale: 'ru',
    plugins: [
        createAutoAnimatePlugin()
    ]
}

export default config