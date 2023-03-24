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
import { ref } from "vue";
import { Editor } from "@tiptap/vue-3";

const props = defineProps<{
  editor: Editor
}>();
const emit = defineEmits(['close'])

console.log(props.editor);
const editorFile = ref()
const form = ref({
  file: '',
  url: 'http://localhost:3000/img/logo_mini.svg'
});

const errors = ref([])

function handleSubmit() {
  if (form.value.url.length !== 0) {
    props.editor.commands.setImage({ src: form.value.url });
    form.value.url = '';
    emit('close');
  }
}

</script>

<style scoped>

</style>