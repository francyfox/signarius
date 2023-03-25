<template>
  <div class="popup--container">
    <form-kit type="form" :actions="false" :errors="errors" @submit="handleSubmit">
      <file-pond name="editorFile"/>
      <form-kit type="url"
                v-model="form.url"
                label="Url"
                name="url"
      />
      <FormKit type="submit" :disabled="(form.url.length === 0)" label="Paste" />
    </form-kit>
  </div>
</template>

<script setup lang="ts">
import FilePond from "@components/global/file-pond.vue";
import { ref, Ref } from "vue";
import { Editor } from "@tiptap/vue-3";
import { isImgUrl } from "@app/helpers";

const props = defineProps<{
  editor: Editor
}>();
const emit = defineEmits(['close'])

const editorFile = ref()
const form = ref({
  file: '',
  url: 'http://localhost:3000/img/logo_mini.svg'
});

const errors: Ref<Array<string>> = ref([])

async function handleSubmit() {
  const valid = await isImgUrl(form.value.url);
  if (form.value.url.length !== 0 && valid) {
    props.editor.commands.setMedia({
      src: form.value.url,
      'media-type': 'img',
      width: '300',
      height: '300'
    });
    form.value.url = '';
    emit('close');
  } else {
    errors.value = [];
    errors.value.push('Url is not valid');
  }
}

</script>

<style scoped>

</style>