<script setup lang="ts">
import { ArchiveFilled } from "@vicons/material";
import { ref, Ref } from "vue";
import { Editor } from "@tiptap/vue-3";
import { UploadCustomRequestOptions, UploadFileInfo } from "naive-ui";
import { useDirectus } from "@app/const";
import { useConfigStore } from "@app/module/store/store.config";
import { DirectusAsset } from "@app/utils/utils.image";
const emit = defineEmits(["uploaded"]);

const props = defineProps<{
  editor: Editor;
}>();

const images: Ref<UploadFileInfo[]> = ref();

function handleChange(data: { fileList: UploadFileInfo[] }) {
  images.value = data.fileList;
}

async function uploadImageToTiptap({ file, data }) {
  const sdk = useDirectus;
  const formData = new FormData();
  const configStore = useConfigStore();
  const { message } = configStore;

  if (data) {
    Object.keys(data).forEach((key) => {
      formData.append(
        key,
        data[key as keyof UploadCustomRequestOptions["data"]]
      );
    });
  }

  formData.append(file.name, file.file as File);

  try {
    const image = await sdk.files.createOne(formData);
    props.editor.commands.setMedia({
      src: new DirectusAsset(image.id).size(600, 600).url,
      "media-type": "img",
      width: "300",
      height: "300",
    });
    emit("uploaded");
  } catch (e) {
    message.error(e.message);
  }
}
</script>

<template>
  <n-upload
    multiple
    directory-dnd
    :max="5"
    :file-list="images"
    @change="handleChange"
    :custom-request="uploadImageToTiptap"
  >
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
