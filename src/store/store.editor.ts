import { defineStore } from "pinia";
import { computed, reactive, Ref, ref, toRaw } from "vue";
import { JSONContent } from "@tiptap/vue-3";

export const useEditorStore = defineStore('editor', () => {
  const JSONContent: Ref<JSONContent[] | undefined> = ref([]);
  const headingNode: Ref<JSONContent[] | null>  = ref([]);

  return {
    JSONContent,
    headingNode
  };
});