<template>
  <header class="dashboard-bar">
    <div class="container">
      <div class="row">
        <Avatar/>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Avatar from "./avatar.vue";
</script>

<style lang="postcss">
@import "../../styles/dashboard/components/dashboard-bar.css";
</style>