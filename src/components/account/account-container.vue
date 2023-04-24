<template>
  <div class="container _h-p-2 __fill-white">
      <form-kit v-model="form" type="form" :actions="false" :errors="errors" @submit="handleSubmit">
		    <form-kit-schema :schema="SchemaAccount"/>
<!--		    <form-kit type="submit" :disabled="(form.url.length === 0)" label="Paste" />-->
      </form-kit>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, Ref } from "vue";
import FormkitSchemaGenerator from "../../../console/module/formkit/formkit.schema-generator";
import { DirectusUsers } from "@app/types";
import SchemaAccount from "@schema/schema.directus_users.json";

console.log(SchemaAccount)

const errors: Ref<Array<string>> = ref([]);
const form = ref({

});

async function handleSubmit () {

}
</script>

<style scoped>

</style>