<template>
 <menu-bar-component v-bind="btn"/>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const props = defineProps<{
  btn: any
}>()

const MenuBarComponent = defineAsyncComponent(() =>
    import(`../../../global/editor/btn/${props.btn.type}.vue`)
)

</script>

<style scoped>

</style>