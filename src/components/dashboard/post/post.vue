<template>
  <div class="post h-card col _h-gap-lg _h-p-2 __fill-white">
    <figure class="_h-d-f _h-ai-c _h-gap-sm">
      <img
        width="30"
        height="30"
        :src="`http://127.0.0.1:8055/assets/${user_created.avatar}`"
        :alt="user_created.id"
      />
      <figcaption>
        <span class="row">
          <strong>Author: </strong>
          {{ `${user_created.first_name} ${user_created.last_name}` }}
        </span>
        <code class="_h-d-f __fill-error">{{ user_created.title }}</code>
      </figcaption>
    </figure>
    <a :href="`/post/${id}`" class="u-url _h-d-f">
      <picture>
        <span class="picture-badge"></span>
        <img width="280" height="150" :src="img" :alt="name" />
      </picture>
    </a>

    <a :href="`/post/${id}`" class="title p-name _t-fz-h6">
      {{ header }}
    </a>
    <div class="text p-note _t-fz-text">
      {{ $filters.truncate(descriptor, 150) }}
    </div>
    <!--    <ul class="tag-list">-->
    <!--      <li>Badge</li>-->
    <!--      <li>Badge 2</li>-->
    <!--      <li>Badge 3</li>-->
    <!--    </ul>-->
  </div>
</template>

<script setup lang="ts">
import { usePostCollectionStore } from "@app/store/store.post.collection";
import { IPost } from "@app/module/post/post.collection";

const store = usePostCollectionStore();

const { postImageURL } = store;

const post = defineProps<{
  id: string;
  status: string;
  sort: null;
  user_created: string;
  date_created: Date;
  user_updated: string;
  date_updated: Date;
  header: string;
  miniature: string;
  descriptor: string;
  blocklist: number[];
}>();

const img = postImageURL(post.miniature);
</script>

<style lang="postcss">
@import "../../../styles/dashboard/components/post.css";
</style>
