<template>
  <keep-alive>
    <menu-bar-component v-bind="btn" />
  </keep-alive>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const props = defineProps<{
  btn: any;
}>();

const MenuBarComponent = defineAsyncComponent(
  () =>
    import(`/src/components/tiptap/btn/menu-bar-item.vue/${props.btn.type}.vue`)
);
</script>
