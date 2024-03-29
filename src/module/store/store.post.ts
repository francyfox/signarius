import { defineStore } from "pinia";
import { Ref, ref, toRaw } from "vue";
import { Post } from "@app/directusTypes";
import { useDirectus } from "@app/const";
import { JSONContent, HTMLContent, generateHTML } from "@tiptap/vue-3";
import { extensions } from "@components/tiptap/tiptap.extensions";

export const usePost = defineStore("post", () => {
  const sdk = useDirectus;
  const data: Ref<Post | null> = ref(null);
  const postList: Ref<Post[] | null> = ref(null);

  const HTMLContent: Ref<HTMLContent[] | undefined> = ref([]);
  const JSONContent: Ref<JSONContent[] | undefined> = ref([]);
  const headingNode: Ref<JSONContent[] | null> = ref([]);
  async function getPost(slug: string) {
    const response = await sdk.items("post").readByQuery({
      filter: {
        slug: {
          _eq: slug,
        },
      },
      fields: [
        "*",
        "textblock.item.text",
        "user_created.first_name",
        "user_created.last_name",
        "user_created.avatar",
        "user_created.title",
        "comments.item.*",
        "comments.item.user_created.id",
        "comments.item.user_created.first_name",
        "comments.item.user_created.last_name",
        "comments.item.user_created.avatar",
        "comments.item.user_created.title",
      ],
    });

    return response;
  }

  async function getPostCollection() {
    const response = await sdk.items("post").readByQuery({
      sort: [],
      fields: [
        "*",
        "user_created.first_name",
        "user_created.last_name",
        "user_created.avatar",
        "user_created.title",
      ],
    });

    return response;
  }

  return {
    data,
    postList,
    getPostCollection,
    getPost,
  };
});
