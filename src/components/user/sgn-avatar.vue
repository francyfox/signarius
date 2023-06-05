<script setup lang="ts">
defineProps<{
  statusClass?: string;
  name: string;
  url: string;
}>();
</script>

<template>
  <div class="relative">
    <img class="w-10 h-10 rounded" :src="url" :alt="name" />
    <span
      :class="`absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 ${statusClass} border-2 border-white dark:border-gray-800 rounded-full`"
    ></span>
  </div>
</template>

<style scoped lang="postcss"></style>
