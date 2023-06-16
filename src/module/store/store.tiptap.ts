import { useDirectus } from "@app/const";
import { Ref, ref, toRaw } from "vue";
import { defineStore } from "pinia";
import { Textblock } from "@app/directusTypes";
import { extensions } from "@components/tiptap/tiptap.extensions";
import { JSONContent, HTMLContent, generateHTML } from "@tiptap/vue-3";

export const useTiptapStore = defineStore("tiptap", () => {
  const HTMLContent: Ref<HTMLContent[] | undefined> = ref([]);
  const JSONContent: Ref<JSONContent[] | undefined> = ref([]);
  const headingNode: Ref<JSONContent[] | null> = ref([]);
  const sdk = useDirectus;

  async function sendPost(form) {
    const post = await sdk.items("post").createOne(form);

    if (post) {
      const relation = await HTMLChunks(post.id);
      const list = relation?.map((i) => i.id);
      if (list) {
        await sdk.items("post").updateOne(post.id, {
          textblock: list,
        });
      }
    }
    return post;
  }

  async function HTMLChunks(postId: string) {
    const json = toRaw(JSONContent.value);
    const chunks: Array<Textblock> = [];

    json?.forEach((block) => {
      const content = generateHTML(
        {
          type: "doc",
          // @ts-ignore
          content: [block],
        },
        extensions
      );

      // @ts-ignore
      chunks.push({ text: content });
    });

    const { data: ListTextBlock } = await sdk
      .items("textblock")
      .createMany(chunks);
    // @ts-ignore
    const list: PostTextblock[] | undefined = ListTextBlock?.reduce(
      (acc, item) => [
        ...acc,
        {
          post_id: postId,
          item: item.id,
          collection: "textblock",
        },
      ],
      []
    );

    if (list) {
      const { data: relation } = await sdk
        .items("post_textblock")
        .createMany(list);

      return relation;
    } else {
      return null;
    }
  }

  return {
    HTMLContent,
    JSONContent,
    headingNode,
    sendPost,
  };
});
