<template>
  <Suspense>
    <provider-user>
      <notify-stack/>
      <dashboard-header/>
      <section class="section-dashboard">
        <aside class="left-panel">
          <panel-menu/>
        </aside>
        <slot/>
        <aside class="right-panel"></aside>
      </section>
    </provider-user>
    <template #fallback>
      User data is loading...
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import DashboardHeader from "@components/dashboard/dashboard-header.vue";
import ProviderUser from "@components/provider/provider-user.vue";
import PanelMenu from "@components/dashboard/panel-menu.vue";
import NotifyStack from "@components/global/notify-stack.vue";
</script>

<style scoped>

</style>