<template>
  <slot />
</template>

<script setup lang="ts">
import { useUserStore } from "@app/store/store.user";
import { useEventStore } from "@app/store/store.event";
import { storeToRefs } from "pinia";

const storeEvent = useEventStore();
const { notifyStack } = storeToRefs(storeEvent);

const store = useUserStore();
const { loadUserTokenFromDB } = store;

try {
  await loadUserTokenFromDB();
} catch (e) {
  notifyStack.value.push(e.message);

  setTimeout(() => {
    window.location.href = "/security/login";
  }, 1500);
}
</script>

<style scoped></style>
