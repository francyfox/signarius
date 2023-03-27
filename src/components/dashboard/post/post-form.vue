<template>
  <div class="container _h-p-2 __fill-white">
    <FormKit type="form" v-model="data" :errors="errors" submit-label="Add" @submit="handleSubmit">
      <FormKitSchema :schema="SchemaPost"/>
      <div class="formkit-wrapper">
        <label class="formkit-label">
          Miniature
        </label>
        <FilePond name="miniature"/>
      </div>
      <div class="formkit-outer">
        <div class="formkit-wrapper">
          <label class="formkit-label">
            Block List
          </label>
          <Blocklist/>
        </div>
      </div>
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import SchemaPost from "@app/schema/form/schema.post";
import FilePond from "@components/global/file-pond.vue";
import Blocklist from "@components/dashboard/post/blocklist.vue";

const errors = ref<string[]>([]);
const data = reactive({});


async function handleSubmit() {

}
</script>