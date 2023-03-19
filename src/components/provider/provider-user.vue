<template>
  <slot/>
</template>

<script setup lang="ts">
import { useUserStore } from "@app/store/store.user";
const store = useUserStore();
const { loadUserDataFromDB } = store;

const urlChunks = window.location.href.split('/')
const userId = urlChunks[urlChunks.findIndex(path => path === 'user') + 1]

loadUserDataFromDB(userId)
</script>

<style scoped>

</style>