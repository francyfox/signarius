<script setup lang="ts">
import { computed, reactive, Ref, ref } from "vue";
import { AVWaveform } from "vue-audio-visual";
import {
  PlayArrowOutlined,
  MotionPhotosPausedOutlined,
} from "@vicons/material";
import PostTts, { voiceList } from "@components/post/post.tts";

const tts = new PostTts();
const selectedVoice: Ref<string> = ref("Google русский");
const options = ref(null);
const voices = await voiceList();
options.value = voices.map((i) => ({
  label: i.name,
  value: i.lang,
}));

await tts.init("Это тестовое сообщение", selectedVoice.value);

function ttsHandler() {
  tts.active.value = !tts.active.value;
  if (tts.active.value) {
    tts.play();
  } else {
    tts.pause();
  }
}
</script>

<template>
  <n-space>
    <AVWaveform src="http://foo.com/music.ogg" />
    <n-select v-model:value="selectedVoice" :options="options" />
    <n-button type="success" @click="ttsHandler">
      <template #icon>
        <n-icon size="24" :component="PlayArrowOutlined" />
      </template>
      <span> {{ tts.active }}</span>
    </n-button>
    <n-button type="warning">Download</n-button>
  </n-space>
</template>

<style scoped lang="postcss"></style>
