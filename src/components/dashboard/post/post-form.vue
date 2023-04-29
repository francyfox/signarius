<template>
  <div class="container _h-p-2 __fill-white">
    <FormKit
      type="form"
      v-model="data.form"
      :errors="errors"
      submit-label="Add"
      @submit="handleSubmit"
    >
      <FormKitSchema :schema="SchemaPost" />
      <!--      <div class="formkit-wrapper">-->
      <!--        <label class="formkit-label">-->
      <!--          Miniature-->
      <!--        </label>-->
      <!--        <FilePond name="miniature"-->
      <!--                  v-model="fileInput"-->
      <!--                  v-on:addfile="filesChange"-->
      <!--        />-->
      <!--      </div>-->
      <div class="formkit-outer">
        <div class="formkit-wrapper">
          <label class="formkit-label"> Block List </label>
          <Blocklist />
        </div>
      </div>
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import SchemaPost from "@app/schema/form/schema.post";
import FilePond from "@components/global/file-pond.vue";
import Blocklist from "@components/dashboard/post/blocklist.vue";
import { useEditorStore } from "@app/store/store.editor";
import { useEventStore } from "@app/store/store.event";
import { storeToRefs } from "pinia";

const storeEvent = useEventStore();
const { notifyStack } = storeToRefs(storeEvent);

interface PostForm {
  status: string;
  header: string;
  descriptor: string;
  file: [];
  miniature: any;
}

const errors = ref<string[]>([]);
const data: { form: PostForm } = reactive({
  form: {
    header: "",
    status: "draft",
    descriptor: "",
    file: [],
    miniature: null,
  },
});
const store = useEditorStore();
const { sendPost, fileUpload } = store;
const { miniature } = storeToRefs(store);

async function handleSubmit() {
  try {
    if (data.form.file.length !== 0) {
      await fileUpload(data.form.file[0].name, data.form.file[0].file);
      if (miniature.value) {
        data.form.miniature = miniature.value;
        await sendPost(data.form);
      }
    } else {
      delete data.form.miniature;
      await sendPost(data.form);
    }
  } catch (e) {
    notifyStack.value.push(e.message);
  }
}
</script>
