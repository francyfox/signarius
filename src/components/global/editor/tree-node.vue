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
          {{ treeLevelIcon({
            prevLvl: headingNode[index - 1]?.attrs.level,
            nextLvl: headingNode[index + 1]?.attrs.level,
            index,
            lvl: headingNode[index].attrs.level,
            length: headingNode.length
          })}}
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
import { empty } from "@apollo/client";
const store = useEditorStore();
const { headingNode } = storeToRefs(store);

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

enum TreePositionIcon {
  root = '├──',
  middle = '├──',
  bottom = '└──',
  next = '──',
  down = '│',
  empty = '\u00a0 \u00a0 \u00a0 \u00a0'
}

const treeLevelIcon = (opt: {
  prevLvl: number,
  nextLvl: number,
  index: number,
  lvl: number,
  length: number
}): string => {
  const {
    prevLvl,
    nextLvl,
    index,
    length,
    lvl,
  } = opt;

  let out = '';

  if (index === 0 && nextLvl <= lvl) {
    out += TreePositionIcon.root;
  }

  if (index === 0 && nextLvl > lvl) {
    out += TreePositionIcon.bottom;
  }

  if (lvl > prevLvl || lvl === prevLvl) {
    for (let i = 0; i < lvl - 2; i++) {
      out += TreePositionIcon.empty;
    }

    if (lvl < nextLvl || lvl !== nextLvl) {
      out += TreePositionIcon.bottom;
    }

    if (lvl === nextLvl) {
      out += TreePositionIcon.middle;
    }
  }

  if (index === length - 1 && prevLvl > lvl) {
    out += TreePositionIcon.next;
  }

  if (index === length - 1 && prevLvl < lvl) {
    out += TreePositionIcon.bottom;
  }

  return out;
}

</script>

<style lang="postcss">
@import "../../../styles/components/editor/tree-node.css";
</style>