<script setup lang="ts">
import { ref } from "vue";
import { FnSchema } from "@francyfox/fn-forms/src/lib";
import RegisterSchema from "@components/form/security/register/register.schema";
import SgnConfig from "@components/provider/config/sgn-config.vue";

const formRef = ref<FormInst | null>(null);
const formData = ref({
  user: {
    email: "7info7web@gmail.com",
    password: "123",
  },
});
</script>

<template>
  <div class="max-w-md mx-auto md:px-0 px-2">
    <sgn-config>
      <h1 class="text-4xl font-light mb-8">Sign UP</h1>
      <fn-schema v-model:data="formData" :schema="RegisterSchema" />
    </sgn-config>
  </div>
</template>

<style scoped lang="postcss"></style>
