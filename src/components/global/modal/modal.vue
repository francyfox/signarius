<template>
  <dialog class="modal" :id="id" open>
    <div class="_h-d-f _h-jc-c _h-ai-c">
      <div class="modal--wrap">
        <form class="col _h-gap-md" method="dialog">
          <div class="row _h-jc-sb _h-gap-md">
            <button class="close __fill-error" id="closeModal">
              <span class="mdi mdi-close"></span>
            </button>
          </div>
          <template v-if="component">
            <keep-alive>
              <ModalComponent/>
            </keep-alive>
          </template>
          <template v-if="schema">
            <FormKitSchema :schema="schema"/>
          </template>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const props = defineProps<{
  id: string,
  schema?: Array<any>
  component?: string
}>();

const ModalComponent = defineAsyncComponent(() =>
    import(`../../../components/global/modal/container/${props.component}.vue`)
)

</script>

<style lang="postcss">
@import "../../../styles/components/form/modal.css";
</style>