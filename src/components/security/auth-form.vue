<template>
  <form action="#" method="post">
    <fieldset class="row _h-ai-c _h-gap-md">
      <label for="email">
        E-mail
      </label>
      <input v-model="form.email"
             type="email"
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
      <input v-model="form.password"
             type="password"
             id="password"
             name="password"
             minlength="3"
             required
      >
    </fieldset>

    <button @click.prevent="send" type="submit">Auth</button>
  </form>
</template>

<script>
import { defineComponent } from 'vue'
// import { gql } from 'apollo-boost';
// import { Query } from 'vue-apollo'
export default defineComponent({
  data () {
    return {
      form: {
        email: 'test',
        password: ''
      }
    }
  },
  methods: {
    send () {
      alert(this.$data.form.email)
    }
  }
})
</script>

<style scoped>

</style>