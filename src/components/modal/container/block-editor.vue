<template>
  <div class="block-editor col _h-gap-sm">
    <template v-if="editor">
      <bubble-menu  class="block-editor--bubble-menu"
                    :tippy-options="{ duration: 300 }"
                    :editor="editor">
        <ul class="row _h-fw-w _h-gap-sm">
          <template v-if="editor">
            <li v-for="btn in SchemaBubbleMenu(editor)">
              <menu-bar-btn v-bind="btn"/>
            </li>
          </template>
        </ul>
      </bubble-menu>
    </template>
    <menu-bar :editor="editor" class="block-editor--bar"/>
    <editor-content :editor="editor" class="block-editor--content content" />
    <div class="block-editor--counter _h-d-f _t-fz-text _c-white">
      <span class="_h-d-f">
        {{ editor?.storage.characterCount.characters() }} characters
        /
        {{ editor?.storage.characterCount.words()}} words
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  useEditor,
  EditorContent,
  BubbleMenu,
} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import CharacterCount from '@tiptap/extension-character-count'
import Paragraph from '@tiptap/extension-paragraph'
import Image from '@tiptap/extension-image'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import MenuBar from "@components/global/editor/menu-bar.vue"
import MenuBarBtn from "@components/global/editor/btn/menu-bar-btn.vue"
import { SchemaBubbleMenu } from "@app/schema/editor/schema.editor.bar"

const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  extensions: [
    StarterKit,
    Paragraph,
    Link.configure(),
    CharacterCount.configure(),
    TextStyle,
    Color,
    Image
  ],
})
console.log(editor)
</script>

<style lang="postcss">
@import "../../../styles/components/block-editor.css";
</style>