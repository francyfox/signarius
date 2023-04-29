import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { IndexDBUser, User } from "@app/module/db/db.user";
import { useDirectus } from "@app/consts";
import { getCookie, setCookie } from "@app/helpers";
import { DIRECTUS_HOST, REFRESH_TOKEN_NAME } from "@app/consts";
import { DirectusUsers } from "@app/types";

export const useUserStore = defineStore("user", () => {
  const id = ref("");
  const avatar = ref("/img/logo_mini.svg");
  const fullname = ref("");
  const token = ref("");
  const sdk = useDirectus;
  const directus_user: Ref<User | null> = ref(null);

  async function setUserData(user: User) {
    if (user.avatar) {
      id.value = user.id;
      avatar.value =
        user.avatar !== null
          ? `${DIRECTUS_HOST}/assets/${user.avatar}`
          : "/img/logo_mini.svg";
      fullname.value = `${user?.first_name} ${user?.last_name}`;
      token.value = user.token;
      directus_user.value = user;
    } else {
      throw new Error("user.avatar is undefined");
    }
  }

  async function loadUserTokenFromDB() {
    const user = await IndexDBUser.users.toCollection().first();
    if (user) {
      await setUserData(user);
    }
  }

  async function auth(email: string, password: string) {
    const response = await sdk.auth.login({ email, password });
    const userClient = await IndexDBUser.users.where({ email }).first();
    const userServer = (await sdk.users.me.read()) as unknown as User;

    userServer.token = response.access_token;
    setCookie(REFRESH_TOKEN_NAME, response.refresh_token, {
      expires: 60 * 60,
      secure: true,
    });
    await setUserData(userServer);

    if (userClient) {
      await IndexDBUser.users.update(userClient.id!, userServer);
    } else {
      await IndexDBUser.users.add(userServer);
    }
  }

  async function register(form) {
    await sdk.users.createOne(form);
  }

  async function refresh() {
    await sdk.auth.refresh();
  }

  return {
    id,
    avatar,
    fullname,
    directus_user,
    setUserData,
    loadUserTokenFromDB,
    auth,
    register,
    refresh,
  };
});
