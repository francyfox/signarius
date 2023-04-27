<script setup lang="ts">
async function openModal(id: string) {
  const modal: HTMLDialogElement | null = document.querySelector(id);
  modal?.showModal();
}
</script>

<style scoped></style>

<template>
  <div class="comment--editor col">
    <div class="row _h-gap-sm">
      <button
        class="btn __sm __secondary _h-gap-sm"
        @click="openModal('#formBlockList')"
        type="button"
      >
        <span class="mdi mdi-comment-edit"></span>
        <span>Open editor</span>
      </button>
      <button class="btn __sm __secondary _h-gap-sm" type="button">
        <span class="mdi mdi-send"></span>
        <span>Send</span>
      </button>
    </div>
  </div>
</template>
