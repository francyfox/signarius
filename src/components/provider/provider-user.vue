<template>
  <error-msg provider="user" :error="error"/>
  <slot/>
</template>

<script setup lang="ts">
import { useUserStore } from "@app/store/store.user";
import { useEventStore } from "@app/store/store.event";
import { storeToRefs } from "pinia";

const storeEvent = useEventStore();
const { notifyStack } = storeToRefs(storeEvent);

const store = useUserStore();
const { loadUserDataFromDB } = store;

const urlChunks = window.location.href.split('/')
const userId = urlChunks[urlChunks.findIndex(path => path === 'user') + 1]

try {
  await loadUserDataFromDB(userId)
} catch (e) {
  notifyStack.value.push(e.message)
}
</script>

<style scoped>

</style>