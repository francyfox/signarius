<template>
  <div class="menu-bar">
    <ul class="row _h-fw-w _h-gap-sm">
      <template v-if="editor">
        <li v-for="btn in SchemaEditorBar(editor)">
          <keep-alive>
            <menu-bar-item :editor="editor"
                           :btn="btn"
            />
          </keep-alive>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">

import { SchemaEditorBar } from "@app/schema/editor/schema.editor.bar";
import { Editor } from "@tiptap/vue-3";
import MenuBarItem from "@components/global/editor/btn/menu-bar-item.vue";

const props = defineProps<{
  editor: Editor
}>()

</script>

<style scoped>

</style>