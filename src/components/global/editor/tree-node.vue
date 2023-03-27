<template>
  <ul class="list-modify col _h-gap-sm">
    <template v-if="headingNode">
      <li v-for="(item, index) in headingNode" :key="index"
          class="row _h-gap-smx"
      >
        <button class="col btn _h-jc-c __sm __primary _h-clip"
                :class="isActive(index)"
                type="button"
                :title="item.type + ' ' + item.attrs.level"
                @click="activeIndex = index"
        >
        <span v-if="item.content" class="_t-fz-h6">
          <strong>#{{ index }}. {{ item.content[0].text  }}</strong>
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
import { reactive, Ref, ref } from "vue";
import { useEditorStore } from "@app/store/store.editor";
import { storeToRefs } from "pinia";
const store = useEditorStore();
const { JSONContent, headingNode } = storeToRefs(store);

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