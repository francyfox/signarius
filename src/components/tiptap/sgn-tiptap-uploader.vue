<script setup lang="ts">
import { ArchiveFilled } from "@vicons/material";
import { ref, Ref } from "vue";
import { Editor } from "@tiptap/vue-3";
import { isImgUrl } from "@app/utils/utils.check";
import { UploadFileInfo } from "naive-ui";

const props = defineProps<{
  editor: Editor;
}>();

const images: Ref<UploadFileInfo[]> = ref();

async function addImage() {
  const valid = await isImgUrl(form.value.url);
}
</script>

<template>
  {{ images }}
  <n-upload multiple directory-dnd :max="5" :file-list="images">
    <n-upload-dragger>
      <div style="margin-bottom: 12px">
        <n-icon size="48" :depth="3" :component="ArchiveFilled" />
      </div>
      <n-text style="font-size: 16px">
        Click or drag a file to this area to upload
      </n-text>
      <n-p depth="3" style="margin: 8px 0 0 0"> Allows any image formats </n-p>
    </n-upload-dragger>
  </n-upload>
</template>

<style scoped lang="postcss"></style>
