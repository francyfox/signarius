import { Post } from "@app/directusTypes";
import { usePost } from "@app/module/store/store.post";
import { useConfigStore } from "@app/module/store/store.config";
import { storeToRefs } from "pinia";
import { useMedia } from "@app/module/store/store.media";

export default async function postSubmitHandler(data: Post) {
  const postStore = usePost();
  const configStore = useConfigStore();
  const { sendPost } = postStore;
  const { message } = configStore;

  const mediaStore = useMedia();
  const { files } = storeToRefs(mediaStore);

  if (files.value) {
    data.miniature = files.value;
  } else {
    delete data.miniature;
  }

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
