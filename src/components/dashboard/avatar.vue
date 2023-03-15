<template>
  <div class="avatar _h-d-f">
    <img :src="userAvatar" alt="" width="50" height="50">
  </div>

</template>

<script setup lang="ts">
import { User, UserStore } from "../../module/user/user.store";
import { computed, defineProps, PropType } from "vue";

const props = defineProps({
  user: Object as PropType<User>
})

const userAvatar = computed(() => {
  return (props.user)
      ? `http://127.0.0.1:8055/assets/${props.user.avatar}`
      : ``
})
</script>