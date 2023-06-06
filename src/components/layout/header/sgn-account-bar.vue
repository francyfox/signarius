<script setup lang="ts">
import { useUserStore } from "@app/module/store/store.user";
import { storeToRefs } from "pinia";
import UAvatar from "@components/user/sgn-avatar.vue";
import { DIRECTUS_HOST } from "@app/const";
import { ref } from "vue";
import SgnConfig from "@components/provider/config/sgn-config.vue";
import { AccountBoxRound } from "@vicons/material";

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
  <sgn-config>
    <div class="flex items-center space-x-4">
      <div class="items-center h-full text-slate-300">
        <a
          href="/security/login"
          v-if="!data"
          class="mr-5 font-medium hover:text-white"
          >Login</a
        >
        <a
          href="/security/register"
          v-if="!data"
          class="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-slate-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
        >
          Sign Up
        </a>
      </div>
      <n-popover v-if="data" placement="bottom" trigger="click">
        <template #trigger>
          <n-button size="large">
            <span class="avatar flex items-center gap-2">
              <span class="text-white text-lg"
                >{{ data.first_name }} {{ data.last_name }}</span
              >
              <n-icon :component="AccountBoxRound" size="24" />
            </span>
          </n-button>
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
      <u-avatar
        v-if="data"
        :name="`${data.first_name} ${data.last_name}`"
        :url="`${DIRECTUS_HOST}/assets/${data.avatar}`"
        status-class="bg-lime-500"
      />
    </div>
  </sgn-config>
</template>

<style scoped lang="postcss"></style>
