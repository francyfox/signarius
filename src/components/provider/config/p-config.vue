<script setup lang="ts">
import { darkTheme } from "naive-ui";
</script>

<template>
  <n-config-provider :theme="darkTheme" abstract>
    <slot />
  </n-config-provider>
</template>

<style lang="postcss">
@import "base.pcss";
</style>
