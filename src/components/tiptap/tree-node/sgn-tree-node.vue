<template>
  <ul class="list-modify col-span-1">
    <template v-if="headingNode.length !== 0">
      <li
        v-for="(item, index) in headingNode"
        :key="index"
        class="row _h-gap-smx"
      >
        <button
          class="flex bg-transparent text-slate-300 text-lg"
          :class="isActive(index)"
          type="button"
          :title="item.type + ' ' + item.attrs.level"
          @click="activeIndex = index"
        >
          <span v-if="item.content">
            {{ treeRowIcon(headingNode, index) }}
            #{{ index }}. {{ item.content[0].text }}
          </span>
        </button>
      </li>
    </template>
    <template v-else>
      <span class="text-white text-lg">--- Block List is empty</span>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { reactive, Ref, ref, toRaw } from "vue";
import { useTiptapStore } from "@app/module/store/store.tiptap";
import { storeToRefs } from "pinia";
import { treeRowIcon } from "@components/tiptap/tree-node/tree-node.icon";

const store = useTiptapStore();
const { headingNode } = storeToRefs(store);
// const node = ref();
// node.value = toRaw(headingNode.value);
// const treeDir = new TreeDirRowGenerator(headingNode);

interface ListModifyItem {
  attrs: {
    level: number;
  };
  content: Array<{ text: string; type: string }>;
  type: string;
}

const activeIndex = ref(0);
const isActive = (index: number) => {
  return index === activeIndex.value ? "is-active" : null;
};
</script>
