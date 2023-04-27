<template>
  <div class="comment--item col _h-gap-sm" :style="border">
    <div class="row _h-gap-sm">
      <div class="col _h-gap-sm">
        <figure class="avatar col" :style="`border-color: ${color()}`">
          <img
            width="30"
            height="30"
            :src="`http://127.0.0.1:8055/assets/${data.item.user_created.avatar}`"
            :alt="data.item.user_created.id"
          />
        </figure>
      </div>
      <div class="col _h-gap-sm">
        <div class="col">
          <div class="row _h-jc-sb _h-gap-sm">
            <div class="col _h-gap-sm">
              <strong>{{
                `${data.item.user_created.first_name} ${data.item.user_created.last_name}`
              }}</strong>
              <code class="__fill-error">
                {{ data.item.user_created.title }}
              </code>
            </div>
            <div class="time col _h-gap-sm">
              <code
                >Created:
                <time datetime="2023-04-05T16:36:43.799Z"
                  >2023-04-05 22:36:43
                </time>
              </code>
              <code
                >Updated:
                <time datetime="2023-04-25T08:30:56.876Z"
                  >2023-04-25 14:30:56
                </time>
              </code>
            </div>
            <div class="actions row _h-gap-sm">
              <button type="button" class="btn __sm __primary _h-gap-sm">
                <span class="mdi mdi-comment-edit"></span>
              </button>
              <button type="button" class="btn __sm __secondary _h-gap-sm">
                <span class="mdi mdi-comment-remove"></span>
              </button>
            </div>
          </div>
        </div>
        <div class="post-body--block content" v-html="data.item.text"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Textblock } from "@app/types";

const props = defineProps<{
  data: { item: Textblock };
}>();

function color() {
  switch (props.data.item.comment_lvl) {
    case 0:
      return "orange";
    case 1:
      return "purple";
    case 2:
      return "green";
  }
}

const border = computed({
  get() {
    return `margin-left: ${
      props.data.item.comment_lvl * 5
    }px; border-left: 3px solid ${color()}`;
  },
});
</script>

<style scoped></style>
