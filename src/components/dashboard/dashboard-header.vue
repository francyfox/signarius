<template>

  <header class="dashboard-bar">
    <div class="container">
      <div class="row _h-gap-md">
        <Avatar/>
        <div class="_h-d-f _h-ai-c _h-gap-sm">
          <a class="_h-d-f _c-white" href="">
            <strong class="_c-white">
              <span v-if="fullname">
                  {{ fullname }}
              </span>
              <span v-else>
                NoName
              </span>
            </strong>
          </a>
        </div>


        <form action="/search" method="get" class="_h-d-f ">
          <input type="search">
          <button type="submit">Find</button>
        </form>

        <button type="button"
                class="btn __sm __primary _h-ai-c _c-white _t-fz-text"
                title="logout"
                style="margin-left: auto"
                @click.prevent="logout"
        >
          <span class="mdi mdi-logout"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useUserStore } from "@app/store/store.user";
import { storeToRefs } from 'pinia'
import Avatar from "./avatar.vue";
import { IndexDBUser } from "@app/module/db/db.user";

const store = useUserStore();
const { fullname } = storeToRefs(store)

function logout() {
  IndexDBUser.delete().then(() => window.location.href = '/security/login')
}
</script>

<style lang="postcss">
@import "../../styles/dashboard/components/dashboard-bar.css";
</style>