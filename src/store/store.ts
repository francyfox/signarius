import { defineStore } from "pinia";
import { ref } from "vue";
import { IndexDBUser, User } from "@app/module/db/db.user";
import { useDirectus } from "vue-directus";
import { getCookie, setCookie } from "@app/helpers";
import { REFRESH_TOKEN_NAME } from "@app/consts";

export const useUserStore = defineStore('user', () => {
  const id = ref(null);
  const avatar = ref('/img/logo_mini.svg');
  const fullname = ref('');
  const token = ref('')
  const sdk = useDirectus();

  async function setUserData (user: User) {
    // @ts-ignore
    id.value = user?.id;
    avatar.value = (user.avatar !== null)
      ?  `http://127.0.0.1:8055/${avatar.value}/assets/${user.avatar}`
      : '/img/logo_mini.svg';
    fullname.value = `${user?.first_name} ${user?.last_name}`;
    token.value = user.token;
  }

  async function loadUserDataFromDB (id: string) {
    const user = await IndexDBUser.users.get(id);
    if (user) {
      await setUserData(user)
    }
  }

  async function auth (email: string, password: string) {
    const response = await sdk.auth.login({ email, password });
    const userClient = await IndexDBUser.users.where({ email }).first();
    const userServer = await sdk.users.me.read() as User;

    userServer.token = response.access_token;
    setCookie(REFRESH_TOKEN_NAME , response.refresh_token, { expires: 60*60, secure: true })
    await setUserData(userServer);

    if (userClient) {
      await IndexDBUser.users.update(userClient.id!, userServer);
    } else {
      await IndexDBUser.users.add(userServer);
    }
  }

  async function reAuth () {
    getCookie('')
  }

  return { id, avatar, fullname, setUserData, auth };
})