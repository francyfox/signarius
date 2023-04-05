import { defineStore } from "pinia";
import { useDirectus } from "@app/consts";
import { ref } from "vue";

export const useFileStore = defineStore('file', () => {
  const sdk = useDirectus;

  async function upload(el: HTMLFormElement) {
    await sdk.files.createOne(el)
  }
});