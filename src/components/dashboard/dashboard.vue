<template>
  <Suspense>
    <provider-user>
      <dashboard-header/>
      <section class="section-dashboard">
        <aside class="left-panel">
          <panel-menu/>
        </aside>
        <div class="container __fill-white">
          <div class="row _h-jc-c _h-gap-md">
            <div class="col _h-jc-c _h-gap-lg __fill-white">

            </div>
          </div>
        </div>
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
</script>

<style scoped>

</style>