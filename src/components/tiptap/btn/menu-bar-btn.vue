<template>
  <n-button
    size="small"
    :title="label"
    @click.prevent="click"
    :disabled="disabled()"
    :tertiary="isActive()"
  >
    <n-icon size="24" :component="icon" />
  </n-button>
</template>

<script setup lang="ts">
import { resolveComponent, h } from "vue";

const props = withDefaults(
  defineProps<{
    label: string;
    icon: object;
    click?: null | (() => boolean);
    isActive?: (() => null) | (() => boolean);
    disabled?: (() => null) | (() => boolean);
  }>(),
  {
    click: () => null,
    isActive: () => null,
    disabled: () => false,
  }
);
</script>
