<script setup lang="ts">
import { ref } from "vue";
import { FormInst } from "naive-ui";
import PostSchema from "./post.schema";
import SgnConfig from "@components/provider/config/sgn-config.vue";
import LoginSubmitHandler from "@components/form/security/login/login.submit-handler";
import SgnTiptap from "@components/tiptap/sgn-tiptap.vue";

const editorShow = ref(true);
const formRef = ref<FormInst | null>(null);
const formData = ref();
const option = {
  submitBtn: {
    innerHTML: "Next",
  },
};
</script>

<template>
  <div class="max-w-md mx-auto md:px-0 px-2">
    <sgn-config>
      <form-create
        ref="formRef"
        v-model="formData"
        :rule="PostSchema"
        :option="option"
        @submit="LoginSubmitHandler"
      >
      </form-create>
      <n-button @click="editorShow = true">Content editor</n-button>
      <n-modal v-model:show="editorShow">
        <n-card
          style="max-width: 1024px"
          title="Content editor"
          :bordered="false"
          :mask-closable="true"
          size="huge"
          role="dialog"
          aria-modal="true"
        >
          <template #header-extra>
            <n-button @click="editorShow = false">Close</n-button>
          </template>
          <sgn-tiptap />
          <template #footer> * Auto-save works </template>
        </n-card>
      </n-modal>
    </sgn-config>
  </div>
</template>

<style scoped lang="postcss"></style>
