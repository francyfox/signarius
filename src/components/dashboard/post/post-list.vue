<template>
    <div class="_h-100">
      <div class="post-container row _h-gap-md _h-fw-w __scrolled">
        <template v-for="post in posts">
          <Suspense>
            <Post v-bind="post"/>
          </Suspense>
        </template>
      </div>
      </div>
</template>

<script setup lang="ts">
import Post from "@components/dashboard/post/post.vue";
import { usePostCollectionStore } from "@app/store/store.post.collection";
import { storeToRefs } from "pinia";

const store = usePostCollectionStore();
const { posts } = storeToRefs(store);
</script>

<style scoped lang="postcss">
  .post-container {
      max-height: calc(100vh - 54px);
  }
</style>