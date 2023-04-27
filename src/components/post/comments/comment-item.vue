<template>
  <div class="comment--item col _h-gap-sm" :style="border">
    <div class="row _h-gap-sm">
      <div class="col _h-gap-sm">
        <figure class="avatar col" :style="`border-color: ${color()}`">
          <img src="/img/logo_mini.svg" alt="" width="50" height="50" />
        </figure>
      </div>
      <div class="col _h-gap-sm">
        <div class="col">
          <div class="row _h-jc-sb _h-gap-sm">
            <div class="col _h-gap-sm">
              <strong>Francy Fox</strong>
              <code class="__fill-error"> Administrator </code>
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
        <div class="post-body--block content">
          <p>
            Длина взрослых самцов - чуть более 2 м, а масса - до 270 кг, самки -
            длиной до 1,5 м и массой - до 50 кг. Щенки рождаются длиной до 65 см
            и весят до 6 кг.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  lvl: number;
}>();

function color() {
  switch (props.lvl) {
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
    return `margin-left: ${props.lvl * 5}px; border-left: 3px solid ${color()}`;
  },
});
</script>

<style scoped></style>
