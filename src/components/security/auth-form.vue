<template>
  <form action="#">
    <fieldset class="row _h-ai-c _h-gap-md">
      <label for="email">
        E-mail
      </label>
      <input type="email" id="email" name="email" required>
    </fieldset>
    <fieldset class="row _h-ai-c _h-gap-md">
      <label for="password">
        Password
      </label>
      <input type="password" id="password" name="password" required>
    </fieldset>

    <button type="submit">Auth</button>
  </form>
</template>

<script>
export default {
  name: "auth-form"
}
</script>

<style scoped>

</style>