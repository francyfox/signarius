<script setup lang="ts">
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/vue-3";
import MenuBarBtn from "@components/tiptap/btn/menu-bar-btn.vue";
import { SchemaBubbleMenu } from "./tiptap.schema";
import { Editor } from "@tiptap/vue-3";
import SgnTiptapTreeNode from "@components/tiptap/tree-node/sgn-tree-node.vue";
import { useTiptapStore } from "@app/module/store/store.tiptap";
import { storeToRefs } from "pinia";
import { extensions } from "@components/tiptap/tiptap.extensions";

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
  <div class="block-list _h-d-f _h-gap-sm">
    <div class="col _h-ai-fs _h-gap-sm _h-w-100">
      <div class="block-editor col _h-gap-sm">
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
            <ul class="row _h-fw-w _h-gap-sm">
              <template v-if="editor">
                <li v-for="btn in SchemaBubbleMenu(editor)">
                  <menu-bar-btn v-bind="btn" />
                </li>
              </template>
            </ul>
          </bubble-menu>
        </template>
        <editor-content
          :editor="editor"
          class="block-editor--content content"
        />
        <div class="block-editor--counter _h-d-f _t-fz-text _c-white">
          <span class="_h-d-f">
            {{ editor?.storage.characterCount.characters() }} characters /
            {{ editor?.storage.characterCount.words() }} words
          </span>
        </div>
      </div>
    </div>
    <sgn-tiptap-tree-node v-if="hasTree" />
  </div>
</template>
