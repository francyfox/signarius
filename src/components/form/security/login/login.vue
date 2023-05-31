<script setup lang="ts">
import { ref } from "vue";
import LoginSchema from "@components/form/security/login/login.schema";
import PConfig from "@components/provider/config/p-config.vue";
import { FormInst } from "naive-ui";

// console.log(window.$message);
// window.$message.info("te");

const formRef = ref<FormInst | null>(null);
const formData = ref({
  user: {
    email: "7info7web@gmail.com",
    password: "1",
  },
});

const value = ref();
const option = {
  submitBtn: {
    innerHTML: "Next",
  },
};

try {
  await formRef.value?.validate();
} catch (e) {
  console.log(e);
}
</script>

<template>
  <div class="max-w-md mx-auto md:px-0 px-2">
    <p-config>
      <h1 class="text-4xl font-light mb-8">Sign in</h1>
      <form-create
        ref="formRef"
        v-model="value"
        :rule="LoginSchema"
        :option="option"
      ></form-create>
      <pre style="text-align: left">{{ value }}</pre>
    </p-config>
  </div>
</template>

<style scoped lang="postcss"></style>
