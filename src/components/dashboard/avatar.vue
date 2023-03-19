<template>
  <div class="avatar _h-d-f">
    <img :src="avatar" alt="" width="50" height="50">
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@app/store/store.user";
import { storeToRefs } from 'pinia'

const store = useUserStore();
const { avatar } = storeToRefs(store);
</script>