<template>
  <div class="popup">
    <slot/>
    <div class="popup--menu col _h-gap-smx"
         :class="{ 'is-active': isOpen }"
    >
      <template v-if="list">
        <li v-for="item in list" class="_h-d-f">
          <a href="#"
             class="_h-d-f"
             :class="{ 'is-active': item.active() ? item.active(): null }"
             @click.prevent="item.click"
          >
            {{ item.text }}
          </a>
        </li>
      </template>
      <template v-else>
        <popup-component :editor="editor" @close="isOpen = false"/>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Editor } from "@tiptap/vue-3";

const props = withDefaults(defineProps<{
  component?: string,
  isOpen: boolean
  editor?: Editor,
  list?: Array<{
    active: () => boolean,
    click: () => any,
    text: string
  }>
}>(), {
  isOpen: false
});

const PopupComponent = defineAsyncComponent(() =>
    import(`../../../components/global/popup/container/${props.component}.vue`)
)

</script>

<style lang="postcss">
@import "../../../styles/components/popup.css";
</style>