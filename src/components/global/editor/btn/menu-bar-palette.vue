<template>
  <div class="btn-palette _h-d-f _h-ai-c" :style="{ 'box-shadow': `0 0 0 2px ${paletteColor}` }">
    <button type="button"
            class="btn-palette--action"
            :title="label"
            @click="editor.chain().focus().setColor(paletteColor).run()"
    >
      <span :class="`mdi mdi-${mdi}`"></span>
    </button>
    <button type="button"
            class="btn-palette--arrow"
            :title="`${label} settings`"
    >
      <span class="mdi mdi-tune-vertical"></span>
      <input
          type="color"
          @input="inputHandler($event.target.value)"
          :value="color"
      >
    </button>
  </div>

</template>

<script setup lang="ts">
import { Editor } from "@tiptap/vue-3";
import { computed, ref } from "vue";

const props = withDefaults(defineProps<{
  label: string,
  mdi: string,
  editor: Editor
  color: () => string,
  click?: null | (() => boolean),
  isActive?: null | (() => boolean),
  disabled?: () => boolean
}>(), {
  click: () => null,
  isActive: () => null,
  disabled: () => false
})

const paletteColor = ref('#FFFFFF');

function inputHandler(color: string) {
  paletteColor.value = color;
  props.editor.chain().focus().setColor(color).run();
}

</script>

<style scoped lang="postcss">
.btn-palette {
  border-radius: 3px;

  &--action {
    border-radius: 3px 0 0 3px;
  }

  &--arrow {
    position: relative;
    background: var(--c-dark-800);
    box-shadow: none;
    border-radius: 0 3px 3px 0;

    &:hover {
      background: var(--c-secondary-dark);
    }

    input {
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
}
</style>