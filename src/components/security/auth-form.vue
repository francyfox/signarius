<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useDirectus } from "vue-directus";
import { FormKitSchema } from '@formkit/vue'
import SchemaAuth from '../../schema/form/schema.auth'
import { openDB } from "idb";
import { SchemaDb } from "../../schema/schema.db";

const sdk = useDirectus();
const errors = ref<string[]>([]);
const data = reactive({
  email: '7info7web@gmail.com',
  password: '123'
})


const handleSubmit = async (formData, node) => {
  const { email, password } = formData;

  try {
    const _db = await openDB<SchemaDb>('sa-db', 1);
    const response = await sdk.auth.login({ email, password });
    _db.onversionchange = () => {
      console.log('sdsd')
      _db.createObjectStore('token', { keyPath: 'id' });
      const transaction = _db.transaction('token', 'readwrite')
      const users = transaction.objectStore('token')
      const request = users.add(response.access_token)
      console.log(request)
    }
  } catch (e) {
    errors.value = []
    errors.value.push(e.message);
  }
}

</script>

<template>
  <FormKit type="form" v-model="data" :errors="errors" submit-label="Login" @submit="handleSubmit">
    <FormKitSchema :schema="SchemaAuth"/>
  </FormKit>
</template>