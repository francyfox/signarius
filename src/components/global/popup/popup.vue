<template>
  <div class="popup">
    <slot/>
    <div class="popup--menu col _h-gap-smx"
         :class="{ 'is-active': isOpen }"
    >
      <li v-for="item in list" class="_h-d-f">
        <a href="#"
           class="_h-d-f"
           :class="{ 'is-active': item.active() ? item.active(): null }"
           @click.prevent="item.click"
        >
          {{ item.text }}
        </a>
      </li>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  isOpen: boolean
  list: Array<{
    active: () => boolean,
    click: () => any,
    text: string
  }>
}>(), {
  isOpen: false
});
</script>

<style lang="postcss">
@import "../../../styles/components/popup.css";
</style>