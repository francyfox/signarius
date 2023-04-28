import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from "@astrojs/vue";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        mdx(),
        sitemap(),
        vue({appEntrypoint: '/src/_app'})
    ],
    vite: {
        css: {
            devSourcemap: true,
            noExternal: ['tippy.js'],
        }
    },
    output: "server",
    adapter: vercel({})
});