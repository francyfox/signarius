import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useEventStore = defineStore('event', () => {
  const notifyStack: Ref<Array<string>> = ref([]);

  return { notifyStack };
});