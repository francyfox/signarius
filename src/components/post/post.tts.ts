import { Ref, ref } from "vue";
import SpeechSynthesisRecorder from "@app/module/tts/SpeechSynthesisRecorder";

const { speechSynthesis } = window;
export const voiceList = async () => {
  return new Promise<SpeechSynthesisVoice[]>((resolve, reject) => {
    const id = setInterval(() => {
      if (speechSynthesis.getVoices().length !== 0) {
        resolve(speechSynthesis.getVoices());
        clearInterval(id);
      }
    }, 10);
  });
};

export default class PostTts {
  active: Ref<boolean> = ref(false);
  synth = speechSynthesis;
  ssUtterance: SpeechSynthesisUtterance;
  text: string;

  constructor() {
    if (speechSynthesis.speaking) {
      throw new Error("speechSynthesis.speaking");
    }
  }

  async init(text: string, voiceName: string) {
    speechSynthesis.cancel();

    this.text = text;

    const voices = await voiceList();
    if (text && voices) {
      this.ssUtterance = new SpeechSynthesisUtterance(text);
      const selectedVoice = voices.find((i) => i.name === voiceName);
      this.ssUtterance.voice = selectedVoice ? selectedVoice : null;

      this.ssUtterance.onend = () => {
        this.active.value = false;
        speechSynthesis.cancel();
      };

      this.ssUtterance.onstart = () => {
        this.active.value = true;
      };

      this.ssUtterance.onresume = () => {
        this.active.value = true;
      };

      this.ssUtterance.onerror = (e) => {
        throw new Error(e.error);
      };
    }

    return this;
  }

  download() {
    const ttsRecorder = new SpeechSynthesisRecorder({
      text: this.text,
      utteranceOptions: this.ssUtterance,
    });

    ttsRecorder.blob();

    return;
  }

  play() {
    if (speechSynthesis.speaking) {
      speechSynthesis.resume();
    } else {
      speechSynthesis.speak(this.ssUtterance);
    }
  }

  pause() {
    speechSynthesis.pause();
  }
}
