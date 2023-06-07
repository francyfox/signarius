<script setup lang="ts">
import SgnConfig from "@components/provider/config/sgn-config.vue";
import PortfolioSchema from "@components/porfolio/portfolio.schema";
import { ref } from "vue";
import { FormInst } from "naive-ui";
import portfolioSubmitHandler from "@components/porfolio/portfolio.submit-handler";

const formRef = ref<FormInst | null>(null);
const formData = ref();
const option = {
  submitBtn: {
    innerHTML: "Send",
  },
};
</script>

<template>
  <sgn-config>
    <form-create
      ref="formRef"
      v-model="formData"
      :rule="PortfolioSchema"
      :option="option"
      @submit="portfolioSubmitHandler(formData)"
    ></form-create>
  </sgn-config>
</template>

<style scoped lang="postcss"></style>
