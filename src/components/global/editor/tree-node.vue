<template>
  <ul class="list-modify col _h-gap-sm">
    <template v-if="headingNode">
      <li v-for="(item, index) in headingNode" :key="index"
          class="row _h-gap-smx"
      >
        <button class="list-modify--item _h-clip _h-ai-fs"
                :class="isActive(index)"
                type="button"
                :title="item.type + ' ' + item.attrs.level"
                @click="activeIndex = index"
        >
        <span v-if="item.content" class="_t-fz-h6">
            {{ treeRowIcon(headingNode, index) }}
            #{{ index }}. {{ item.content[0].text  }}
        </span>
        </button>
      </li>
    </template>
    <template v-else>
      Block List is empty
    </template>
  </ul>
</template>

<script setup lang="ts">
import { reactive, Ref, ref, toRaw } from "vue";
import { useEditorStore } from "@app/store/store.editor";
import { storeToRefs } from "pinia";
import { treeRowIcon } from "@app/module/treeNode/treeNode.icon";
const store = useEditorStore();
const { headingNode } = storeToRefs(store);
// const node = ref();
// node.value = toRaw(headingNode.value);
// const treeDir = new TreeDirRowGenerator(headingNode);

interface ListModifyItem {
  attrs: {
    level : number
  },
  content: Array<{ text: string, type: string }>,
  type: string
}

const activeIndex = ref(0);
const isActive = (index: number) => {
  return index === activeIndex.value ? 'is-active' : null;
}

</script>

<style lang="postcss">
@import "../../../styles/components/editor/tree-node.css";
</style>