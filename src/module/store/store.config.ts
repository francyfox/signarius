import { defineStore } from "pinia";
import { ref } from "vue";

export const useConfigStore = defineStore("config", () => {
  const theme = ref();
  const message = ref();

  return {
    theme,
    message,
  };
});
