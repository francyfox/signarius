import { DefaultConfigOptions } from '@formkit/vue'
import { createAutoAnimatePlugin } from '@formkit/addons'
// @ts-ignore
import { generateClasses } from '@formkit/themes'

const config: DefaultConfigOptions = {
    locale: 'ru',
    plugins: [
        createAutoAnimatePlugin()
    ],
    config: {
        classes: generateClasses({
            submit: {
                input: 'btn __primary'
            }
        })
    }
}

export default config