<script setup lang="ts">
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/vue-3";
import MenuBarBtn from "@components/tiptap/btn/menu-bar-btn.vue";
import { SchemaBubbleMenu } from "./tiptap.schema";
import { Editor } from "@tiptap/vue-3";
import SgnTiptapTreeNode from "@components/tiptap/tree-node/sgn-tree-node.vue";
import { useTiptapStore } from "@app/module/store/store.tiptap";
import { storeToRefs } from "pinia";
import { extensions } from "@components/tiptap/tiptap.extensions";
import { PaletteFilled } from "@vicons/material";
import SgnTiptapMenuBar from "@components/tiptap/sgn-tiptap-menu-bar.vue";

const store = useTiptapStore();
const { JSONContent, HTMLContent, headingNode } = storeToRefs(store);

withDefaults(
  defineProps<{
    simplify: boolean;
    hasTree: boolean;
  }>(),
  {
    simplify: false,
    hasTree: true,
  }
);

const editor = useEditor({
  content:
    "<h2> test </h2> <p>Test message</p> <h3>Test</h3> <p> Lorem ipsum</p>",
  extensions,
  onCreate: ({ editor }) => {
    const json = editor.getJSON().content;
    JSONContent.value = json;
    headingNode.value = json ? json.filter((i) => i.type === "heading") : null;
  },
  onUpdate: ({ editor }) => {
    const json = editor.getJSON().content;
    JSONContent.value = json;
    headingNode.value = json ? json.filter((i) => i.type === "heading") : null;
  },
});

function showTextBubble(editor: Editor) {
  return editor.isActive("paragraph");
}
</script>

<template>
  <div class="block-list grid grid-cols-4 gap-4">
    <div class="block-editor col-span-3">
      <template v-if="editor">
        <bubble-menu
          class="block-editor--bubble-menu"
          :tippy-options="{
            placement: 'bottom',
            duration: 200,
          }"
          :editor="editor"
          :should-show="({ editor: e }) => e.isActive('paragraph')"
        >
          <ul
            class="flex flex-wrap bg-zinc-800 shadow-sm border border-slate-300 gap-4 pt-2 pb-1 px-2 rounded"
          >
            <template v-if="editor">
              <li v-for="btn in SchemaBubbleMenu(editor)">
                <menu-bar-btn v-bind="btn" />
              </li>
            </template>
          </ul>
        </bubble-menu>
      </template>
      <sgn-tiptap-menu-bar :editor="editor" class="block-editor--bar" />
      <editor-content
        :editor="editor"
        class="post-content block mb-2 w-full text-lg text-slate-300 border-0 bg-white/5 focus:ring-0 dark:text-white dark:placeholder-gray-400 rounded"
      />
      <div class="flex">
        <span class="flex p-1 text-slate-300 text-sm bg-white/5 rounded">
          {{ editor?.storage.characterCount.characters() }} characters /
          {{ editor?.storage.characterCount.words() }} words
        </span>
      </div>
    </div>
    <sgn-tiptap-tree-node v-if="hasTree" />
  </div>
</template>

<style lang="postcss">
@import "/src/styles/post-content.pcss";
.ProseMirror {
  padding: 0.75rem;
  border-radius: 0.25rem;
  transition: box-shadow 0.1s ease-in-out;
  max-height: 300px;
  overflow-y: auto;
}

.ProseMirror-focused {
  outline: none;
  box-shadow: 0 0 0 2px rgb(203 213 225/0.3);
}
</style>
