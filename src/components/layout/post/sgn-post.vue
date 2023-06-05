<script setup lang="ts">
import SgnConfig from "@components/provider/config/sgn-config.vue";
import { storeToRefs } from "pinia";
import { usePost } from "@app/module/store/store.post";
import { useConfigStore } from "@app/module/store/store.config";
import { formatDate } from "@app/utils/utils.date";

const props = defineProps<{
  slug: string;
}>();
const configStore = useConfigStore();
const { message } = configStore;
const store = usePost();
const { getPost } = store;
const { data } = storeToRefs(store);

try {
  const response = await getPost(props.slug);
  data.value = response.data[0];
} catch (e) {
  message.error(e.message);
}
</script>

<template>
  <Suspense>
    <div class="flex flex-col align-start max-w-screen-xl">
      <div
        class="flex mr-auto bg-white/[.06] shadow-lg rounded-lg px-2 max-w-md md:max-w-2xl"
      >
        <div class="flex gap-4 py-3">
          <figure class="flex">
            <img
              width="80"
              height="80"
              :src="`http://127.0.0.1:8055/assets/${data.user_created.avatar}`"
              :alt="data.user_created.id"
              class="rounded"
            />
          </figure>
          <div class="flex flex-col justify-center">
            <div class="text">
              <strong>Author: </strong>
              {{
                `${data.user_created.first_name} ${data.user_created.last_name}`
              }}
              <code
                class="px-2 py-0.5 bg-black/[0.6] text-gray-200 items-center justify-center rounded"
                >{{ data.user_created.title }}</code
              >
            </div>
            <div class="text">
              <strong>Created: </strong>
              <code>
                <time :datetime="data.date_created"
                  >{{ formatDate(new Date(data.date_created)) }}
                </time>
              </code>
            </div>
            <div class="text">
              <strong>Updated: </strong>
              <code v-if="data.date_updated">
                <time :datetime="data.date_updated"
                  >{{ formatDate(new Date(data.date_updated)) }}
                </time>
              </code>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div
          class="post-content px-4 lg:px-0 mt-12 max-w-screen-xl mx-auto text-xl leading-relaxed"
          v-for="block in data.textblock"
          v-html="block.item.text"
        ></div>
      </main>
    </div>
    <template #fallback>Post is loading...</template>
  </Suspense>
</template>

<style scoped lang="postcss"></style>
