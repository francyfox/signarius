<template>
  <div class="menu-bar">
    <ul class="row _h-fw-w _h-gap-sm">
      <template v-if="editor">
        <li v-for="btn in SchemaEditorBar(editor)">
          <keep-alive>
            <menu-bar-item :editor="editor" :btn="btn" />
          </keep-alive>
        </li>
        <popup :list="headerMenu" :is-open="headerOpened">
          <button type="button" @click.prevent="headerOpened = !headerOpened">
            <span class="mdi mdi-format-header-pound"></span>
          </button>
        </popup>
        <popup component="image-browse" :is-open="imageOpened" :editor="editor">
          <button type="button" @click.prevent="imageOpened = !imageOpened">
            <span class="mdi mdi-image"></span>
          </button>
        </popup>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { SchemaEditorBar } from "./tiptap.schema";
import { Editor } from "@tiptap/vue-3";
import MenuBarItem from "@components/tiptap/btn/menu-bar-item.vue";
import { ref } from "vue";
import Popup from "@components/global/popup/popup.vue";

const props = defineProps<{
  editor: Editor;
}>();

const headerOpened = ref(false);
const imageOpened = ref(false);

const headerMenu = [
  {
    text: "Header h1",
    click: () => props.editor.chain().focus().toggleHeading({ level: 1 }).run(),
    active: () => props.editor.isActive("heading", { level: 1 }),
  },
  {
    text: "Header h2",
    click: () => props.editor.chain().focus().toggleHeading({ level: 2 }).run(),
    active: () => props.editor.isActive("heading", { level: 2 }),
  },
  {
    text: "Header h3",
    click: () => props.editor.chain().focus().toggleHeading({ level: 3 }).run(),
    active: () => props.editor.isActive("heading", { level: 3 }),
  },
  {
    text: "Header h4",
    click: () => props.editor.chain().focus().toggleHeading({ level: 4 }).run(),
    active: () => props.editor.isActive("heading", { level: 4 }),
  },
  {
    text: "Header h5",
    click: () => props.editor.chain().focus().toggleHeading({ level: 5 }).run(),
    active: () => props.editor.isActive("heading", { level: 5 }),
  },
  {
    text: "Header h6",
    click: () => props.editor.chain().focus().toggleHeading({ level: 6 }).run(),
    active: () => props.editor.isActive("heading", { level: 6 }),
  },
];
</script>
