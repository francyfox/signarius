<template>
  <code class="_h-ai-c _h-gap-smx" @click="copyClipboard(text)">
    <tippy
      :content="tippyMsg"
      @click="clickHandle"
      v-tippy="{
        duration: 200,
        animation: 'shift-toward-subtle',
        moveTransition: 'transform 0.2s ease-in-out',
        placement: 'bottom',
      }"
    >
      <span class="mdi mdi-content-cut"></span>
      {{ text }}
    </tippy>
  </code>
</template>

<script setup lang="ts">
import { Tippy } from "vue-tippy";
import { ref } from "vue";

const props = defineProps<{
  text: string;
}>();
const tippyMsg = ref("Click to copy");

function clickHandle() {
  tippyMsg.value = "copied ✓";

  setTimeout(() => {
    tippyMsg.value = "Click to copy";
  }, 1500);
}

async function copyClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    console.error("Cant copy to clipboard");
  }
}
</script>

<style scoped>
code {
  display: inline-flex;
  cursor: pointer;
}

.mdi {
  font-size: var(--t-fz-help);
}
</style>
