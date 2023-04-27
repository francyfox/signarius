<template>
  <div class="container _h-p-2 __fill-white">
    <div class="account-info">
      <div class="row _h-gap-sm">
        <figure class="avatar">
          <Avatar :width="200" :heigth="200" />
          <figcaption>
            {{ directus_user.first_name }}
            {{ directus_user.last_name }}
          </figcaption>
        </figure>
        <div class="bio">
          <h2 class="_t-fz-h2 _h-mb-1">Bio:</h2>
          <ul class="col _h-gap-sm">
            <li>
              <strong>ID: </strong>
              <copy-clipboard :text="directus_user.id" />
            </li>
            <li>
              <strong>Email: </strong>
              <a :href="`mailto:${directus_user.email}`">
                {{ directus_user.email }}
              </a>
            </li>
            <li v-if="directus_user.location">
              <strong>Location: </strong>
              <span> {{ directus_user.location }}</span>
            </li>
            <li v-if="directus_user.title">
              <strong>Job: </strong>
              <span> {{ directus_user.title }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@app/store/store.user";
import { storeToRefs } from "pinia";
import Avatar from "@components/dashboard/avatar.vue";
import { error } from "astro/dist/core/logger/core";
import CopyClipboard from "@components/global/copyClipboard.vue";

const store = useUserStore();
const { directus_user } = storeToRefs(store);
</script>

<style lang="postcss">
@import "../../styles/components/account.css";
</style>
