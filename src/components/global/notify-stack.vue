<template>
  <div class="notify-stack">
    <ul class="notify-stack--list">
      <li v-for="(item, index) in notifyStack" :key="index">
        <strong>Notify #{{ index }}: </strong> {{ item }}
        <button type="button" class="close _h-d-f _h-ai-c">
          <span class="mdi mdi-close"></span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useEventStore } from "@app/store/store.event";
import { storeToRefs } from "pinia";

const store = useEventStore();
const { notifyStack } = storeToRefs(store);
</script>

<style lang="postcss">
@import "../../styles/components/notify.css";
</style>