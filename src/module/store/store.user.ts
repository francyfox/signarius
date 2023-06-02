import { defineStore } from "pinia";
import { useDirectus, useSecureLS } from "@app/const";
import { ref, Ref } from "vue";
import { DirectusUsers } from "@app/directusTypes";
import { ILoginSchema } from "@components/form/security/login/login.schema";

export const useUserStore = defineStore("user", () => {
  const sdk = useDirectus;
  const ls = useSecureLS;
  const data: Ref<DirectusUsers | null> = ref(null);
  const lsUser = ls.get("user") as DirectusUsers;

  if (lsUser) {
    data.value = lsUser;
  }

  function isAuth(): boolean {
    return !!data.value;
  }
  async function auth(formData: ILoginSchema) {
    const { email, password } = formData;
    await sdk.auth.login({ email, password });
    const user = (await sdk.users.me.read()) as unknown as DirectusUsers;
    data.value = user;
    ls.set("user", user);
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
    window.location.href = "/";
  }

  return {
    data,
    auth,
    register,
    refresh,
    logout,
  };
});
