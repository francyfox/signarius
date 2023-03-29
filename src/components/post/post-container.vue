<template>
  <div class="container _h-p-2 __fill-white">
    <Suspense>
      <provider-post>
        <post-body v-bind="post"/>
      </provider-post>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs} from 'pinia';
import PostBody from "@components/post/post-body.vue";
import ProviderPost from "@components/provider/provider-post.vue";
import { usePostCollectionStore } from "@app/store/store.post.collection";

const store = usePostCollectionStore();
const { post } = storeToRefs(store);
</script>

<style scoped>

</style>