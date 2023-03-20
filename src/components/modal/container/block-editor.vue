<template>
  <div class="block-editor">
    <menu-bar :editor="editor" class="block-editor--bar"/>
    <editor-content :editor="editor" class="block-editor--content" />
  </div>
</template>

<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Bold from '@tiptap/extension-bold'
import MenuBar from "@components/global/editor/menu-bar.vue";

const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  extensions: [
    StarterKit,
    Link.configure(),
    Bold
  ],
})
</script>

<style lang="postcss">

</style>