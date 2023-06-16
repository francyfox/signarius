<script setup lang="ts">
import SgnConfig from "@components/provider/config/sgn-config.vue";
import PortfolioSchema from "@components/porfolio/portfolio.schema";
import { ref } from "vue";
import { FormInst } from "naive-ui";
import { useConfigStore } from "@app/module/store/store.config";

const formRef = ref<FormInst | null>(null);
const isSuccess = ref(false);
const formData = ref({
  fullname: "",
});
const option = {
  submitBtn: {
    innerHTML: "Send",
  },
};

async function portfolioSubmitHandler(data) {
  const configStore = useConfigStore();
  const { message } = configStore;

  if (message === null) {
    throw new Error("Message provider not found");
  }

  const messageReactive = message.loading("Verifying", {
    duration: 0,
  });

  try {
    // TODO: need install
    // @ts-ignore
    const slapform = new Slapform();
    await slapform.submit({
      form: "GuavBBpkw",
      data,
    });
    isSuccess.value = true;

    message.success(`Success! Message sent`);
  } catch (e: Error | any) {
    message.error(e.message);
  }

  messageReactive.destroy();
}
</script>

<template>
  <sgn-config>
    <form-create
      ref="formRef"
      v-model="formData"
      v-if="!isSuccess"
      :rule="PortfolioSchema"
      :option="option"
      @submit="portfolioSubmitHandler(formData)"
    ></form-create>
    <p v-else class="text-lg">
      Great! Dear {{ formData.fullname }}, thanks for filling out my form!
      <br />
      I will look over your message and get back to you by tomorrow
    </p>
  </sgn-config>
</template>

<style scoped lang="postcss"></style>
