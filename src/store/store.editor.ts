import { defineStore } from "pinia";
import { computed, reactive, Ref, ref, toRaw } from "vue";
import { JSONContent, HTMLContent, generateHTML } from "@tiptap/vue-3";
import { extensions } from "@app/module/editor/editor.extensions";
import { useDirectus } from "@app/consts";

export const useEditorStore = defineStore('editor', () => {
  const HTMLContent: Ref<HTMLContent[] | undefined> = ref([]);
  const JSONContent: Ref<JSONContent[] | undefined> = ref([]);
  const headingNode: Ref<JSONContent[] | null>  = ref([]);
  const sdk = useDirectus;
  const miniature: any = ref(null)

  async function fileUpload(title: string, file: File) {
    const data = new FormData()
    data.append('title', title);
    data.append('file', file);
    miniature.value = await sdk.files.createOne(data);
  }
  async function sendPost(form) {
    // const chucks = await HTMLChunks();
    form.textblock = [
      { textblock_id: { id: '02877f3b-f8b3-4ec3-8ab7-fd800634b200' } }
    ];


    const post = await sdk.items('post').createOne(form);

    // chucks.data?.forEach((chuck) => {
    //   form.textblock.push(chuck?.id)
    // });


  }

 async function HTMLChunks() {
    const json = toRaw(JSONContent.value);
    const chunks: Array<string> = [];

    json?.forEach((block) => {
      const content = generateHTML({
        type: 'doc',
        // @ts-ignore
        content: [
          block
        ]
      }, extensions);

      // @ts-ignore
      chunks.push({ text: content })
    });

    const textblockList = await sdk.items('textblock').createMany(chunks);
    const list: any = [];

    textblockList.data?.forEach((textblock) => {
      list.push({
        post_id: textblock.id,
        collection: 'textblock'
      })
    });
    const response = await sdk.items('post_textblock').createMany(list);

    response.data?.reduce((acc, item) => {
      return [...acc, item.id];
    });

    return list;
 }

  return {
    miniature,
    HTMLContent,
    JSONContent,
    headingNode,
    sendPost,
    fileUpload
  };
});