<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useDirectus } from "vue-directus";
import { FormKitSchema } from '@formkit/vue'
import SchemaAuth from '../../schema/form/schema.auth'
import { UserStore } from "../../module/user/user.store";
import { User } from "../../module/user/user.store";

const sdk = useDirectus();
const errors = ref<string[]>([]);
const data = reactive({
  email: '7info7web@gmail.com',
  password: '123'
})

const handleSubmit = async (formData, node) => {
  const { email, password } = formData;

  try {
    const response = await sdk.auth.login({ email, password });
    const userClient = await UserStore.users.where({ email }).first();
    const userServer = await sdk.users.me.read() as User;
    userServer.token = response.access_token;

    if (userClient) {
      await UserStore.users.update(userClient.id!, userServer);
    } else {
      await UserStore.users.add(userServer);
    }
    window.location.href = `/user/${userServer.id}/dashboard`
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