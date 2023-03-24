<template>
  <button type="button"
          :title="label"
          @click.prevent="click"
          :disabled="disabled()"
          :class="{ 'is-active': isActive() ? isActive(): null }"
  >
    <span :class="`mdi mdi-${mdi}`"></span>
  </button>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  label: string,
  mdi: string,
  click?: null | (() => boolean),
  isActive?: (() => null) | (() => boolean),
  disabled?: (() => null) | (() => boolean),
}>(), {
  click: () => null,
  isActive: () => null,
  disabled: () => false
});

console.log(props.click)
</script>

<style scoped>

</style>