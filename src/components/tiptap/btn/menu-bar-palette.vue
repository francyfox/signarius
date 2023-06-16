<template>
  <n-space>
    <n-button
      :title="`Set ${label}`"
      @click="editor.chain().focus().setColor(paletteColor).run()"
    >
      <n-icon size="24" :component="icon" />
    </n-button>
    <n-button class="btn-palette" :title="`${label} settings`">
      <span class="unvisible">#0000000</span>
      <n-color-picker
        v-model:value="paletteColor"
        class="btn-palette--picker"
      />
    </n-button>
  </n-space>
</template>

<script setup lang="ts">
import { Editor } from "@tiptap/vue-3";
import { computed, ref, Ref, withDefaults } from "vue";
import { TuneFilled } from "@vicons/material";

const props = withDefaults(
  defineProps<{
    label: string;
    icon: any;
    editor: Editor;
    color: () => string;
    click?: null | (() => boolean);
    isActive?: null | (() => boolean);
    disabled?: () => boolean;
  }>(),
  {
    click: () => null,
    isActive: () => null,
    disabled: () => false,
  }
);

const paletteColor: Ref<string> = ref("#FFFFFF");
</script>

<style scoped lang="postcss">
.btn-palette {
  position: relative;
}

.btn-palette--picker {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100%;
}
</style>
