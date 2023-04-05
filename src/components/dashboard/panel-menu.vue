<template>
  <nav class="menu __panel-menu">
    <li v-for="(item, index) in SchemaLeftSide">
      <a :href="`/user/${id}/${item.link}`" :class="{'is-active': currentActiveIndex === index }">
        <span :class="`mdi mdi-${item.icon}`"></span>
        {{ item.name }}
      </a>

      <a v-if="item.hasAdd"
         :href="`/user/${id}/${item.link}/add`"
         class="action"
      >
        <span class="mdi mdi-plus-box"></span>
      </a>
    </li>
  </nav>
</template>

<script setup lang="ts">
import SchemaLeftSide from "@app/schema/menu/schema.left-side";
import { useUserStore } from "@app/store/store.user";
import { storeToRefs } from 'pinia'

const store = useUserStore();
const { id } = storeToRefs(store);
const routeName = (): string => {
  return window.location.pathname.split("/")[3];
}
const activeIndex = (routeName: string): number => {
  return SchemaLeftSide.findIndex((i) => i.link === routeName);
}

const currentActiveIndex = activeIndex(routeName());
</script>

<style lang="postcss">
@import "../../styles/components/menu/menu.css";
</style>