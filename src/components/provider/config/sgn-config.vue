<script setup lang="ts">
import { useConfigStore } from "@app/module/store/store.config";
import { storeToRefs } from "pinia";
import {
  darkTheme,
  lightTheme,
  createDiscreteApi,
  ConfigProviderProps,
} from "naive-ui";
import { ref, computed } from "vue";

const store = useConfigStore();
const { message, theme } = storeToRefs(store);

const themeRef = ref<"light" | "dark">("dark");
const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
  theme: themeRef.value === "light" ? lightTheme : darkTheme,
}));

const discreteApi = createDiscreteApi(
  ["message", "dialog", "notification", "loadingBar"],
  {
    configProviderProps: configProviderPropsRef,
  }
);

theme.value = configProviderPropsRef.value.theme;
message.value = discreteApi.message;
</script>

<template>
  <n-config-provider :theme="configProviderPropsRef.theme">
    <slot />
  </n-config-provider>
</template>

<style lang="postcss"></style>
