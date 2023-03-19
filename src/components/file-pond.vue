<script lang="ts">
import type { ComponentPropsOptions, EmitsOptions } from 'vue'
import type { FilePond, FilePondEvent } from 'filepond'
import {
  OptionTypes,
  create,
  supported,
  registerPlugin,
  getOptions,
} from 'filepond'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
const plugins = [
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageResize,
]
const types = {
  boolean: Boolean,
  int: Number,
  number: Number,
  string: String,
  array: Array,
  object: Object,
  function: Function,
  // action: Function, not used
  serverapi: Object,
  // regex: String, not used
}
// Setup initial prop types and update when plugins are added
const getNativeConstructorFromType = (type: keyof typeof types) => {
  if (!type) {
    return String
  }
  return types[type]
}
const _OptionTypes = OptionTypes as Record<string, keyof typeof types>
// Activated props
const propsOptions: ComponentPropsOptions = {}
// Events that need to be mapped to emitters
const eventNames: EmitsOptions = []
const defaultOptions = getOptions() as Record<string, any>
for (const prop in _OptionTypes) {
  // don't add events to the props array
  if (/^on/.test(prop)) {
    eventNames.push(prop.replace('on', ''))
    continue
  }
  // get property type ( can be either a String or the type defined within FilePond )
  propsOptions[prop] = {
    type: getNativeConstructorFromType(_OptionTypes[prop]),
    default: defaultOptions[prop],
  }
}
registerPlugin(...plugins)
</script>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, defineEmits, defineProps } from 'vue'
const props = defineProps({...propsOptions})
const emit = defineEmits(['input', ...eventNames])
const pond = ref<FilePond | null>(null)
const inputElement = ref<HTMLInputElement | null>(null)
onMounted(() => {
  if (inputElement.value && supported()) {
    const options = Object.assign({}, props)
    pond.value = create(inputElement.value, options)
    for (const eventName of eventNames) {
      const event = eventName as FilePondEvent
      if (event) {
        pond.value.on(event, (...event) => {
          emit('input', pond.value ? pond.value.getFiles() : [])
          emit(eventName, ...event)
        })
      }
    }
  }
})
onUnmounted(() => {
  if (pond.value) {
    for (const eventName of eventNames) {
      const event = eventName as FilePondEvent
      if (event) {
        pond.value.off(event, (event) => {
          emit(eventName, event)
        })
      }
    }
    pond.value.destroy()
  }
})
</script>


<template>
  <div class="filepond--wrapper">
    <input
        :id="props.id"
        ref="inputElement"
        type="file"
        :name="props.name"
        :class="props.className"
        :required="props.required"
        :accept="props.acceptedFileTypes"
        :multiple="props.allowMultiple"
        :capture="props.captureMethod"
    />
  </div>
</template>

<style lang="postcss">
.filepond--wrapper {
  max-width: 420px;
  box-sizing: border-box;
}
.filepond--item {
  width: calc(50% - 0.5em);
}

.filepond--drip,
.filepond--drip-blob,
.filepond--file-action-button,
.filepond--file,
.filepond--item-panel {
  border-radius: 3px;
}

.filepond--panel-root {
  background-color: var(--c-dark-900);
}
</style>