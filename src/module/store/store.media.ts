import { defineStore } from "pinia";
import { ref } from "vue";
import { useDirectus } from "@app/const";

export const useMedia = defineStore("media", () => {
  const files = ref();
  const sdk = useDirectus;

  async function createStorageFile(formData) {
    const file = await sdk.files.createOne(formData);

    return file;
  }

  return {
    files,
    createStorageFile,
  };
});
