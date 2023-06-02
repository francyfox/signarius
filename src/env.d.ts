/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly VITE_STORAGE_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
