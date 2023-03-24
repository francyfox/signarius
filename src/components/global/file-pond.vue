<script setup lang="ts">
import vueFilePond from "vue-filepond";
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import { ref } from "vue";

const FilePond = vueFilePond(
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
);

const props = withDefaults(defineProps<{
  name: string,
  className?: string,
  labelIdle?: string,
  allowMultiple?: boolean,
  acceptedFileTypes?: string,
  files?: any,
  init?: any
  addFile?: any
}>(), {
  allowMultiple: false,
  acceptedFileTypes: 'image/jpeg, image/png',
});

const fileInput = ref()
const filesData = ref<Array<string>>([])

function filesChange() {
  filesData.value = fileInput.value.getFiles();
  console.log(filesData.value)
}

</script>

<template>
  <file-pond
      ref="fileInput"
      v-bind="props"
      v-on:addfile="filesChange"
  />
</template>

<style lang="postcss">
.filepond--wrapper {
  max-width: 420px;
  box-sizing: border-box;
}
.filepond--item {
  width: calc(50% - 0.5em);
}

.filepond--drip,
.filepond--drip-blob,
.filepond--file-action-button,
.filepond--file,
.filepond--item-panel {
  border-radius: 3px;
}

.filepond--panel-root {
  background-color: var(--c-dark-900);
}

.filepond--drop-label {
  color: rgb(var(--c-rgb-white));
}
</style>