import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from "@astrojs/vue";
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), vue({
    appEntrypoint: '/src/_app'
  }),
    AutoImport({
    imports: ['vue', {
      'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
    }]
  }),
    Components({
    resolvers: [NaiveUiResolver()]
  }), tailwind({
    applyBaseStyles: true
  })],
  vite: {
    css: {
      devSourcemap: true
    }
  },
  output: "server",
  adapter: vercel({})
});