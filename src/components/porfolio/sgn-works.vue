<script setup lang="ts">
import { works } from "./portfolio.works";
import SgnConfig from "@components/provider/config/sgn-config.vue";
</script>

<template>
  <sgn-config>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <n-card v-for="work in works" :title="work.title">
        <template #cover>
          <n-image :src="work.poster" />
        </template>
        {{ work.bio }}

        <template #footer>
          <div class="flex">
            <a
              :href="work.url"
              rel="noopener noreferrer"
              target="_blank"
              class="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 border border-slate-300 rounded shadow outline-none hover:bg-teal-600 hover:shadow-md focus:outline-none ease"
            >
              Link
            </a>
          </div>
        </template>
      </n-card>
    </div>
  </sgn-config>
</template>

<style scoped lang="postcss"></style>
