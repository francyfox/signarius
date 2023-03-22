<template>
  <button type="button"
          :title="label"
          :class="{ 'is-active': isActive ? isActive: null }"
          @click="action"
  >
    <span :class="`mdi mdi-${mdi}`"></span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string,
  mdi: string,
  action: () => boolean,
  isActive: () => boolean
}>()
</script>

<style scoped>

</style>