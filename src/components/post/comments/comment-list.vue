<template>
  <div class="comment--list">
    <comment-item :lvl="0" />
    <comment-item :lvl="1" />
    <comment-item :lvl="1" />
    <comment-item :lvl="2" />
  </div>
</template>

<script setup lang="ts">
import CommentItem from "@components/post/comments/comment-item.vue";
</script>

<style scoped></style>
