import { defineStore } from "pinia";
import { useDirectus, useSecureLS } from "@app/const";
import { ref, Ref, inject } from "vue";
import { DirectusUsers } from "@app/directusTypes";
import { ILoginSchema } from "@components/form/security/login/login.schema";
import { VueCookies } from "vue-cookies";

export const useUserStore = defineStore("user", () => {
  const sdk = useDirectus;
  const ls = useSecureLS;
  const data: Ref<DirectusUsers | null> = ref(null);
  const lsUser = ls.get("user") as DirectusUsers;
  const $cookies = inject<VueCookies>("$cookies");

  if (lsUser) {
    data.value = lsUser;
  }

  function isAuth(): boolean {
    return !!data.value;
  }

  async function auth(formData: ILoginSchema) {
    const { email, password } = formData;
    const authResult = await sdk.auth.login({ email, password });
    const user = (await sdk.users.me.read()) as unknown as DirectusUsers;
    data.value = user;
    ls.set("user", user);
    if ($cookies) {
      $cookies.set("sgn_auth_token", authResult.access_token);
      $cookies.set("sgn_expires", authResult.expires);
    }
  }

  async function register(form) {
    const user = await sdk.users.createOne(form);

    if (user) {
      data.value = user;
      ls.set("user", user);
    }
  }

  async function refresh() {
    await sdk.auth.refresh();
  }

  function logout() {
    localStorage.clear();
    if ($cookies) {
      $cookies.remove("sgn_auth_token");
      $cookies.remove("sgn_expires");
    }

    window.location.href = "/";
    data.value = null;
  }

  return {
    data,
    auth,
    register,
    refresh,
    logout,
  };
});
