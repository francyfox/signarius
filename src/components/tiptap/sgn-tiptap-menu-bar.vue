<template>
  <ul
    class="flex flex-wrap items-center bg-zinc-800 shadow-sm gap-2 pt-2 pb-1 px-2 mb-2 rounded"
  >
    <template v-if="editor">
      <li v-for="btn in SchemaEditorBar(editor)">
        <keep-alive>
          <menu-bar-item :editor="editor" :btn="btn" />
        </keep-alive>
      </li>
      <n-popover v-if="headerMenu" placement="bottom" trigger="click">
        <template #trigger>
          <n-button>
            <n-icon size="24" :component="TitleFilled"></n-icon>
          </n-button>
        </template>
        <ul class="flex flex-col gap-2">
          <li v-for="header in headerMenu">
            <n-button @click="header.click" :secondary="header.active()">{{
              header.text
            }}</n-button>
          </li>
        </ul>
      </n-popover>

      <n-popover v-if="imageOpened" placement="bottom" trigger="click">
        <template #trigger
          >fff
          <n-button>
            <n-icon size="24" :component="ImageRound" />
          </n-button>
        </template>
        <n-upload
          multiple
          directory-dnd
          action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
          :max="5"
        >
          <n-upload-dragger>
            <div style="margin-bottom: 12px">
              <n-icon size="48" :depth="3">
                <archive-icon />
              </n-icon>
            </div>
            <n-text style="font-size: 16px">
              Click or drag a file to this area to upload
            </n-text>
            <n-p depth="3" style="margin: 8px 0 0 0">
              Strictly prohibit from uploading sensitive information. For
              example, your bank card PIN or your credit card expiry date.
            </n-p>
          </n-upload-dragger>
        </n-upload>
      </n-popover>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { SchemaEditorBar } from "./tiptap.schema";
import { Editor } from "@tiptap/vue-3";
import MenuBarItem from "@components/tiptap/btn/menu-bar-item.vue";
import { TitleFilled, ImageRound } from "@vicons/material";
import { ref } from "vue";

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
