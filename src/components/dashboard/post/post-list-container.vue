<template>
  <div class="container _h-p-2 __fill-white">
    <!--    <template v-if="notifyStack[0] === 'You don\'t have permission to access this.'">-->
    <!--        <h1 class="_t-fz-h1">401</h1> <br>-->
    <!--        <h4 class="_t-fz-h4">{{ notifyStack[0] }}</h4>-->
    <!--    </template>-->
    <Suspense>
      <provider-post-collection>
        <post-list />
      </provider-post-collection>
      <template #fallback> Post List is loading... </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import PostList from "@components/dashboard/post/post-list.vue";
import ProviderPostCollection from "@components/provider/provider-postCollection.vue";

import { useEventStore } from "@app/store/store.event";
import { storeToRefs } from "pinia";

const store = useEventStore();
const { notifyStack } = storeToRefs(store);
</script>
