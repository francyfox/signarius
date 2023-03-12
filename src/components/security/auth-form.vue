<template>
  <form action="#" method="post">
    <fieldset class="row _h-ai-c _h-gap-md">
      <label for="email">
        E-mail
      </label>
      <input v-model="form.email.value" type="email"
             id="email"
             name="email"
             required
      >
      {{ form.email }}
    </fieldset>
    <fieldset class="row _h-ai-c _h-gap-md">
      <label for="password">
        Password
      </label>
      <input v-model="form.password.value"
             type="password"
             id="password"
             name="password"
             minlength="3"
             required
      >
    </fieldset>

    <button @click.prevent="auth" type="submit">Auth</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDirectus } from "vue-directus";

const sdk = useDirectus();
const form = {
  email: ref('7info7web@gmail.com'),
  password: ref('123')
}
const auth = async () => {
  const email = form.email.value;
  const password = form.password.value;

  console.log(sdk);
  const response = await sdk.auth.login({ email, password });
  console.log(response);
}

</script>

<style scoped>

</style>