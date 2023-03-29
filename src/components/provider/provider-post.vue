<template>
  <slot/>
</template>

<script setup lang="ts">
import { usePostCollectionStore } from "@app/store/store.post.collection";
import { useEventStore } from "@app/store/store.event";
import { storeToRefs } from "pinia";

const store = usePostCollectionStore();
const { loadPostFromSdk } = store;
const storeEvent = useEventStore();
const { notifyStack } = storeToRefs(storeEvent);

const postId = (): string => {
  return window.location.pathname.split("/")[2];
}

try {
  await loadPostFromSdk(postId())
} catch (e) {
  notifyStack.value.push(e.message)
}
</script>

<style scoped>

</style>