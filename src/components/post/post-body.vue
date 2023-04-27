<template>
  <div class="post-wrap">
    <div class="post-body _h-mb-2">
      <div class="comment _h-mb-2" v-if="isCommentShow">
        <comment-list :data="comments" />
      </div>

      <div v-else class="content">
        <div class="row _h-mb-1">
          <figure class="_h-d-f _h-ai-c _h-gap-sm">
            <img
              width="30"
              height="30"
              :src="`http://127.0.0.1:8055/assets/${user_created.avatar}`"
              :alt="user_created.id"
            />
            <figcaption>
              <strong>Author: </strong>
              {{ `${user_created.first_name} ${user_created.last_name}` }}
              <code class="__fill-error">{{ user_created.title }}</code>
            </figcaption>
          </figure>
        </div>
        <div class="_h-d-f _h-mb-2">
          <strong>Status:</strong> <code>{{ status }}</code>
        </div>
        <div class="row _h-gap-sm _h-mb-1">
          <strong>Created: </strong>
          <code>
            <time :datetime="date_created"
              >{{ formatDate(new Date(date_created)) }}
            </time>
          </code>
          <strong>Updated: </strong>
          <code v-if="date_updated">
            <time :datetime="date_updated"
              >{{ formatDate(new Date(date_updated)) }}
            </time>
          </code>
        </div>
        <h1 class="_h-mb-1">{{ header }}</h1>

        <main>
          <div
            class="post-body--block content"
            v-for="block in textblock"
            v-html="block.item.text"
          ></div>
        </main>
      </div>
    </div>
    <div class="row _h-gap-sm">
      <comment-btn />
      <button
        type="button"
        class="btn __primary __sm _h-gap-sm"
        @click="isCommentShow = !isCommentShow"
      >
        <span class="mdi mdi mdi-pac-man"></span>
        <span v-if="!isCommentShow">Show comments</span>
        <span v-else>Show post</span>
      </button>
      <comment-editor style="margin-left: auto" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Comment from "@components/post/comments/comment.vue";
import { ref } from "vue";
import CommentEditor from "@components/post/comments/comment-editor.vue";
import CommentList from "@components/post/comments/comment-list.vue";
import Avatar from "@components/dashboard/avatar.vue";

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
  comments: Array<{ item: { text: string } }>;
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
@import "../../styles/components/comment.css";
</style>
