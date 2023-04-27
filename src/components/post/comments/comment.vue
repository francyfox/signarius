<template>
    <div class="comment">
      <comment-editor/>
      <comment-list/>
    </div>
</template>

<script setup lang="ts">
import CommentList from "@components/post/comments/comment-list.vue";
import CommentEditor from "@components/post/comments/comment-editor.vue";
</script>

<style lang="postcss">
@import "../../../styles/components/comment.css";
</style>