<template>
  <div class="post-body">
    <h1>{{ header }}</h1>
    <div class="row _h-gap-sm">
      <code>Created: <time :datetime="date_created">{{ formatDate(new Date(date_created))}}</time></code>
      <code v-if="date_updated">Updated: <time :datetime="date_updated">{{ date_updated }}</time></code>
    </div>
    <main>
      <div class="post-body--block content" v-for="block in textblock" v-html="block.item.text"></div>
    </main>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id:           string;
  status:       string;
  sort:         null;
  user_created: string;
  date_created: Date;
  user_updated: string;
  date_updated: Date;
  header:       string;
  miniature:    string;
  descriptor:   string;
  textblock:    Array<{ item: { text: string }}>;
}>()

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

// 👇️ format as "YYYY-MM-DD hh:mm:ss"
// You can tweak the format easily
function formatDate(date: Date) {
  return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')
  );
}
</script>

<style scoped>

</style>