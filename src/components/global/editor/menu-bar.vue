<template>
  <div class="menu-bar">
    <ul class="row _h-fw-w _h-gap-sm">
      <template v-if="editor">
        <li v-for="btn in SchemaEditorBar(editor)">
          <menu-bar-btn :label="btn.label"
                        :mdi="btn.mdi"
                        :action="btn.action"
                        :is-active="btn.isActive"
          />
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import MenuBarBtn from "@components/global/editor/menu-bar-btn.vue";
import { SchemaEditorBar } from "@app/schema/editor/schema.editor.bar";
import { Editor } from "@tiptap/vue-3";

const props = defineProps<{
  editor: Editor
}>()

</script>

<style scoped>

</style>