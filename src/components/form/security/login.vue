<script setup lang="ts">
import { ref } from "vue";
import { FnSchema } from "@francyfox/fn-forms/dist/fn-forms.js";
import LoginSchema from "@components/form/security/login.schema";

const formData = ref();
</script>

<template>
  tse
  <fn-schema v-model:data="formData" :schema="LoginSchema" />
</template>

<style scoped lang="postcss"></style>
