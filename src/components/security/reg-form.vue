<script setup lang="ts">
import { reactive, ref } from "vue";
import { FormKitSchema } from "@formkit/vue";
import SchemaAccount from "@schema/schema.directus_users.json";
import { storeToRefs } from "pinia";
import { useUserStore } from "@app/store/store.user";
import { useEventStore } from "@app/store/store.event";
import { useEditorStore } from "@app/store/store.editor";

const data = ref({});
const errors = ref<string[]>([]);
const storeEvent = useEventStore();
const { notifyStack } = storeToRefs(storeEvent);
const fileStore = useEditorStore();
const { fileUpload } = fileStore; // #TODO: need separate
const { miniature } = storeToRefs(fileStore);

const store = useUserStore();
const { register } = store;

const handleSubmit = async () => {
  try {
    if (data.value.avatar?.length !== 0) {
      await fileUpload(
        data.value.avatar[0].file.name,
        data.value.avatar[0].file
      );

      const { avatar, ...formData } = data.value;
      const formWithFile = { ...formData, avatar: miniature.value };

      await register(formWithFile);
      notifyStack.value.push("Registration complete");
    } else {
      const { avatar, ...formData } = data.value;
      await register(formData);
    }
  } catch (e) {
    notifyStack.value.push(e.message);
  }
};
</script>

<template>
  <FormKit
    type="form"
    v-model="data"
    :errors="errors"
    submit-label="Register"
    @submit="handleSubmit"
  >
    <form-kit-schema :schema="SchemaAccount" />
  </FormKit>
</template>

<style scoped></style>
