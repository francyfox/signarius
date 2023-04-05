import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useDirectus } from "@app/consts";
import { DIRECTUS_HOST } from "@app/consts";
import { IndexDBPostCollection, IPost } from "@app/module/post/post.collection";

export const usePostCollectionStore = defineStore('postCollection', () => {
  const sdk = useDirectus;
  const posts = ref();
  const post = ref()

  function postImageURL(id: string): string {
    return (id)
      ? `${DIRECTUS_HOST}/assets/${id}`
      : '/noimage.jpg'
  }

  async function loadPostsFromSdk() {
    const response = await sdk.items('post').readByQuery({
      sort: [], fields: ['*']
    });
    posts.value = response?.data as Array<IPost>
  }

  async function loadPostFromSdk(id: string) {
    const response = await sdk.items('post').readOne(id, {
      fields: ['*', 'textblock.item.text'],
    });

    post.value = response as IPost
  }

  async function loadPostsFromDb() {
    posts.value = IndexDBPostCollection.posts.toArray();
  }


  return {
    posts,
    post,
    loadPostsFromSdk,
    loadPostFromSdk,
    loadPostsFromDb,
    postImageURL
  }
})