<template>
  <div class="avatar _h-d-f">
    <img :src="avatar" alt="" :width="width" :height="heigth" />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@app/store/store.user";
import { storeToRefs } from "pinia";

withDefaults(
  defineProps<{
    width: number;
    heigth: number;
  }>(),
  {
    width: 50,
    heigth: 50,
  }
);

const store = useUserStore();
const { avatar } = storeToRefs(store);
</script>
