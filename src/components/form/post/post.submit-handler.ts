import { Post } from "@app/directusTypes";
import { usePost } from "@app/module/store/store.post";
import { useConfigStore } from "@app/module/store/store.config";

export default async function postSubmitHandler(data: Post) {
  const postStore = usePost();
  const configStore = useConfigStore();
  const { sendPost } = postStore;
  const { message } = configStore;

  delete data.miniature;

  try {
    let post = await sendPost(data);

    if (post) {
      console.log(post);
      debugger;
      message.success(`Post created. Redirect`);
      window.location.href = `/post/${post.slug}`;
    }
  } catch (e: Error | any) {
    message.error(e.message);
  }
}
