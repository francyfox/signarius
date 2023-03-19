<template>
  <div class="container _h-p-2 __fill-white">
    <Suspense>
      <provider-post-collection>
        <post-list/>
      </provider-post-collection>
      <template #fallback>
        Post List is loading...
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import PostList from "@components/dashboard/post/post-list.vue";
import ProviderPostCollection from "@components/provider/provider-postCollection.vue";
</script>