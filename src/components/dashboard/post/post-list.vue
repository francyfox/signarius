<template>
  <div class="row _h-gap-md _h-fw-w _h-ai-fs _h-100 __scrolled">
    <template v-for="post in posts">
      <Suspense>
        <Post v-bind="post"/>
      </Suspense>
    </template>
  </div>
</template>

<script setup lang="ts">
import Post from "@components/dashboard/post/post.vue";
import { usePostCollectionStore } from "@app/store/store.post.collection";
import { storeToRefs } from "pinia";

const store = usePostCollectionStore();
const { posts } = storeToRefs(store);
</script>

<style scoped>

</style>