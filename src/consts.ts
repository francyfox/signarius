// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import { Directus } from "@directus/sdk";
import { CustomDirectusTypes } from "./types";

export const REFRESH_TOKEN_NAME = "directus_refresh_token";

export const DIRECTUS_HOST = import.meta.env.PUBLIC_DIRECTUS_HOST;

export const useDirectus = new Directus<CustomDirectusTypes>(DIRECTUS_HOST, {
  auth: {
    mode: "cookie",
    autoRefresh: true,
    msRefreshBeforeExpires: 30000,
    staticToken: "",
  },
});
