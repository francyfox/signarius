<template>

  <header class="dashboard-bar">
    <div class="container">
      <div class="row _h-gap-md">
        <Avatar/>
        <a class="_h-d-f _h-ai-c" href="">
          <strong class="_c-white">
            {{ fullname }}
          </strong>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useUserStore } from "@app/store/store";
import { storeToRefs } from 'pinia'
import Avatar from "./avatar.vue";

const store = useUserStore();
const { fullname } = storeToRefs(store)
</script>

<style lang="postcss">
@import "../../styles/dashboard/components/dashboard-bar.css";
</style>