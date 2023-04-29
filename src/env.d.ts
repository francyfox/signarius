/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly PUBLIC_DIRECTUS_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
