import { Directus } from "@directus/sdk";
import { CustomDirectusTypes } from "@app/directusTypes";
import SecureLS from "secure-ls";

export const REFRESH_TOKEN_NAME = "directus_refresh_token";
export const DIRECTUS_HOST = import.meta.env.PUBLIC_DIRECTUS_HOST;
export const useDirectus = new Directus<CustomDirectusTypes>(DIRECTUS_HOST, {
  auth: {
    mode: "cookie",
    autoRefresh: true,
    msRefreshBeforeExpires: 30000,
    staticToken: "",
  },
  storage: {
    prefix: "",
    mode: "LocalStorage",
  },
  // transport: {
  //   params: {},
  //   headers: {},
  //   onUploadProgress: (ProgressEvent) => {},
  // },
});

export const useSecureLS = new SecureLS({
  encodingType: "rc4",
  encryptionSecret: import.meta.env.VITE_STORAGE_SECRET,
});
