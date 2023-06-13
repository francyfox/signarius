<script setup lang="ts">
import SgnConfig from "@components/provider/config/sgn-config.vue";
import { storeToRefs } from "pinia";
import { usePost } from "@app/module/store/store.post";
import { useConfigStore } from "@app/module/store/store.config";
import { formatDate } from "@app/utils/utils.date";
import {
  EditRound,
  DeleteFilled,
  CommentFilled,
  ReportProblemRound,
  DoorbellSharp,
  FavoriteFilled,
} from "@vicons/material";

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
    <div class="flex flex-col items-start max-w-screen-xl">
      <div class="flex flex-row flex-wrap gap-4">
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
                <a
                  :href="`/profile/${data.user_created.id}`"
                  class="inline-flex underline hover:no-underline mr-1"
                >
                  {{
                    `${data.user_created.first_name} ${data.user_created.last_name}`
                  }}
                </a>

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
        <div
          class="mr-auto bg-white/[.06] text-white shadow-lg rounded-lg px-2 py-2 mb-5 max-w-md md:max-w-2xl"
        >
          <sgn-config class="flex flex-row gap-2">
            <div class="flex flex-col gap-2">
              <n-button type="warning">
                <template #icon>
                  <n-icon size="24" :component="EditRound" />
                </template>

                Edit post
              </n-button>
              <n-button type="error">
                <template #icon>
                  <n-icon size="24" :component="DeleteFilled" />
                </template>
                Remove post
              </n-button>
            </div>
            <div class="flex flex-col gap-2">
              <n-button dashed>
                <template #icon>
                  <n-icon size="24" :component="CommentFilled" />
                </template>
                Show comments
              </n-button>
              <n-button>
                <template #icon>
                  <n-icon size="24" :component="ReportProblemRound" />
                </template>
                Report
              </n-button>
            </div>
            <div class="flex flex-col gap-2">
              <n-button dashed>
                <template #icon>
                  <n-icon size="24" :component="DoorbellSharp" />
                </template>
                Subscribe
              </n-button>
              <n-button secondary>
                <template #icon>
                  <n-icon size="24" :component="FavoriteFilled" />
                </template>
                Favorite
              </n-button>
            </div>
          </sgn-config>
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
