<script setup lang="ts">
import SgnConfig from "@components/provider/config/sgn-config.vue";
import { storeToRefs } from "pinia";
import { usePost } from "@app/module/store/store.post";
import { useConfigStore } from "@app/module/store/store.config";
import { DIRECTUS_HOST } from "@app/const";

const configStore = useConfigStore();
const { message } = configStore;
const store = usePost();
const { getPostCollection } = store;
const { postList } = storeToRefs(store);

try {
  const response = await getPostCollection();
  postList.value = response.data;
} catch (e) {
  message.error(e.message);
}
</script>

<template>
  <sgn-config>
    <div class="grid grid-cols-3 gap-4">
      <Suspense>
        <n-card v-for="post in postList" :title="post.header">
          <template #cover>
            <n-image :src="`${DIRECTUS_HOST}/assets/${post.miniature}`" />
          </template>
          {{ post.descriptor }}
          <div class="flex mt-5">
            <a
              class="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-slate-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
              :href="`/post/${post.slug}`"
            >
              I wanna see more ->
            </a>
          </div>
        </n-card>
        <template #fallback>
          <n-card>
            <template #cover>
              <div class="box-border p-5">
                <n-skeleton width="100%" height="260px" class="" />
              </div>
            </template>
            <template #header>
              <n-skeleton text width="60%" />
              <template> Lorem Ipsum</template>
            </template>
            <n-skeleton text :repeat="6" />
            <template>
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit,<br />
              sed do eiusmod tempor incididunt<br />
              ut labore et dolore magna aliqua.<br />
              Ut enim ad minim veniam,<br />
              quis nostrud exercitation ullamco
            </template>
          </n-card>
        </template>
      </Suspense>
    </div>
  </sgn-config>
</template>

<style scoped lang="postcss"></style>
