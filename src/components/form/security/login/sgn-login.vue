<script setup lang="ts">
import { ref } from "vue";
import LoginSchema from "@components/form/security/login/login.schema";
import SgnConfig from "@components/provider/config/sgn-config.vue";
import { FormInst } from "naive-ui";
import LoginSubmitHandler from "@components/form/security/login/login.submit-handler";

const formRef = ref<FormInst | null>(null);
const formData = ref({
  email: "laura_ashra@gmail.ru",
  password: "123",
});
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
    <sgn-config>
      <h1 class="text-4xl font-light mb-8">Sign in</h1>
      <form-create
        ref="formRef"
        v-model="formData"
        :rule="LoginSchema"
        :option="option"
        @submit="LoginSubmitHandler"
      ></form-create>
    </sgn-config>
  </div>
</template>

<style scoped lang="postcss"></style>
