<template>
  <div class="post h-card col _h-gap-lg _h-p-2 __fill-white">
    <a :href="'post/' + id" class="u-url _h-d-f">
      <picture>
        <img width="280" height="150" :src="img" :alt="name">
      </picture>
    </a>

    <a :href="'post/' + id" class="title p-name _t-fz-h6">
      {{ name }}
    </a>
    <div class="text p-note _t-fz-text">
      {{ desc }}
    </div>
    <ul class="tag-list">
      <li>Badge</li>
      <li>Badge 2</li>
      <li>Badge 3</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { usePostCollectionStore } from "@app/store/store.post.collection";
const store = usePostCollectionStore();

const { postImageURL } = store;

const post = defineProps<{
  id: string,
  name: string,
  desc?: string
  miniature: string
}>();

const img = postImageURL(post.miniature);
</script>

<style lang="postcss">
@import "../../../styles/dashboard/components/post.css";
</style>