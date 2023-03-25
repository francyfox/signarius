<template>
  <div class="_h-d-f error _c-white _t-fz-h6">
    <div class="_h-d-f __fill-error _h-p-1">
      <strong>[{{ provider }}]</strong> - {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  provider?: string
  error: string
}>();
</script>

<style scoped>

</style>