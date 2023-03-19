<script setup lang="ts">
import { reactive, ref } from 'vue'
import { FormKitSchema } from '@formkit/vue'
import { useUserStore } from "@app/store/store.user";
import { storeToRefs } from 'pinia'
import SchemaAuth from '../../schema/form/schema.auth'

const store = useUserStore();
const { auth } = store;
const { id } = storeToRefs(store);
const errors = ref<string[]>([]);
const data = reactive({
  email: 'test@mail.ru',
  password: '123'
})

const handleSubmit = async (formData, node) => {
  const { email, password } = formData;

  try {
    await auth(email, password);

    window.location.href = `/user/${id.value}/dashboard`
  } catch (e) {
    errors.value = [];
    errors.value.push(e.message);
  }
}

</script>

<template>
  <FormKit type="form" v-model="data" :errors="errors" submit-label="Login" @submit="handleSubmit">
    <FormKitSchema :schema="SchemaAuth"/>
  </FormKit>
</template>