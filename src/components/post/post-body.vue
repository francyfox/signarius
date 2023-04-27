<template>
  <div class="post-wrap">
    <comment class="_h-mb-2" v-if="isCommentShow" />
    <div v-else class="post-body _h-mb-2">
      <h1>{{ header }}</h1>
      <div class="row _h-gap-sm _h-mb-3">
        <code
          >Created:
          <time :datetime="date_created"
            >{{ formatDate(new Date(date_created)) }}
          </time>
        </code>
        <code v-if="date_updated"
          >Updated:
          <time :datetime="date_updated"
            >{{ formatDate(new Date(date_updated)) }}
          </time>
        </code>
      </div>
      <main>
        <div
          class="post-body--block content"
          v-for="block in textblock"
          v-html="block.item.text"
        ></div>
      </main>
    </div>
    <comment-btn @click="isCommentShow = !isCommentShow" />
  </div>
</template>

<script setup lang="ts">
import CommentBtn from "@components/post/comments/comment-btn.vue";
import Comment from "@components/post/comments/comment.vue";
import { ref } from "vue";

defineProps<{
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
  textblock: Array<{ item: { text: string } }>;
}>();

const isCommentShow = ref(false);

function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

// 👇️ format as "YYYY-MM-DD hh:mm:ss"
// You can tweak the format easily
function formatDate(date: Date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-") +
    " " +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(":")
  );
}
</script>

<style lang="postcss">
@import "../../styles/components/post.css";
</style>
