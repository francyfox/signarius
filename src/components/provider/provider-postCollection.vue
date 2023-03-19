<template>
  <slot/>
</template>

<script setup lang="ts">
import { usePostCollectionStore } from "@app/store/store.post.collection";

const store = usePostCollectionStore();
const { loadPostsFromSdk } = store;
loadPostsFromSdk();
</script>

<style scoped>

</style>