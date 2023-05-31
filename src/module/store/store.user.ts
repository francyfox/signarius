import { defineStore } from "pinia";
import { useDirectus } from "@app/const";
import { ref, Ref } from "vue";
import { DirectusUsers } from "@app/directusTypes";
import { FormLogin } from "@components/form/security/login/login.schema";

export const useUserStore = defineStore("user", () => {
  const sdk = useDirectus;
  const data: Ref<DirectusUsers | null> = ref(null);

  async function auth(formData: FormLogin) {
    const { email, password } = formData.user;
    await sdk.auth.login({ email, password });
    const user = (await sdk.users.me.read()) as unknown as DirectusUsers;
    data.value = user;
  }
  async function register(form) {
    await sdk.users.createOne(form);
  }

  async function refresh() {
    await sdk.auth.refresh();
  }

  return {
    data,
    auth,
    register,
    refresh,
  };
});
