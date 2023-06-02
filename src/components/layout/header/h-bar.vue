<script setup lang="ts">
import { useUserStore } from "@app/module/store/store.user";
import { storeToRefs } from "pinia";
import UAvatar from "@components/user/u-avatar.vue";
import { DIRECTUS_HOST } from "@app/const";
import { ref } from "vue";
import PConfig from "@components/provider/config/p-config.vue";

const store = useUserStore();
const { data } = storeToRefs(store);
const { logout } = store;
const showPopover = ref(false);

const pages = [
  {
    url: "#",
    name: "Settings",
  },
  {
    url: "dasboard/my-posts",
    name: "My posts",
  },
];
</script>

<template>
  <p-config>
    <div class="flex items-center space-x-4">
      <div class="items-center h-full text-slate-300">
        <a href="/security/login" class="mr-5 font-medium hover:text-white"
          >Login</a
        >
        <a
          href="/security/register"
          class="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-slate-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
        >
          Sign Up
        </a>
      </div>
      <n-popover placement="bottom" trigger="click">
        <template #trigger>
          <a href="#" @click.prevent>
            <u-avatar
              v-if="data"
              :name="`${data.first_name} ${data.last_name}`"
              :url="`${DIRECTUS_HOST}/assets/${data.avatar}`"
              status-class="bg-black"
            />
          </a>
        </template>
        <div
          class="menu flex flex-col justify-start space-y-2 m-2 text-slate-300"
        >
          <a
            v-for="page in pages"
            :href="page.url"
            class="mr-5 font-medium hover:text-white"
          >
            {{ page.name }}
          </a>
          <n-button @click="logout">Logout</n-button>
        </div>
      </n-popover>
    </div>
  </p-config>
</template>

<style scoped lang="postcss"></style>
