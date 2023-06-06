<script setup lang="ts">
import { ref } from "vue";
import { FormInst } from "naive-ui";
import PostSchema from "./post.schema";
import SgnConfig from "@components/provider/config/sgn-config.vue";
import LoginSubmitHandler from "@components/form/security/login/login.submit-handler";

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
      ></form-create>
    </sgn-config>
  </div>
</template>

<style scoped lang="postcss"></style>
