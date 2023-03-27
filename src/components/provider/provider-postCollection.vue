<template>
  <slot/>
</template>

<script setup lang="ts">
import { usePostCollectionStore } from "@app/store/store.post.collection";
import { useEventStore } from "@app/store/store.event";
import { storeToRefs } from "pinia";

const store = usePostCollectionStore();
const { loadPostsFromSdk } = store;
const storeEvent = useEventStore();
const { notifyStack } = storeToRefs(storeEvent);

try {
  await loadPostsFromSdk();
} catch (e) {
  notifyStack.value.push(e.message);
}
</script>

<style scoped>

</style>