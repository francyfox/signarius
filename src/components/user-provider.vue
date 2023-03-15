<template>
  <Suspense>
    <slot/>
    <template #fallback>

    </template>
  </Suspense>

</template>

<script setup lang="ts">
const urlChunks = window.location.href.split('/')
const userId = Number(urlChunks[urlChunks.findIndex(path => path === 'user') + 1])
</script>

<style scoped>

</style>