<template>
  <div class="comment--list">
    <template v-for="block in data">
      <comment-item :data="block" />
    </template>
  </div>
</template>

<script setup lang="ts">
import CommentItem from "@components/post/comments/comment-item.vue";
import { Textblock } from "@app/types";

defineProps<{
  data: Textblock[];
}>();
</script>

<style scoped></style>
