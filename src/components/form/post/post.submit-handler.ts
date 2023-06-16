import { Post } from "@app/directusTypes";
import { usePost } from "@app/module/store/store.post";
import { useConfigStore } from "@app/module/store/store.config";
import { storeToRefs } from "pinia";
import { useMedia } from "@app/module/store/store.media";
import { useTiptapStore } from "@app/module/store/store.tiptap";

export default async function postSubmitHandler(data: Post) {
  const tiptapStore = useTiptapStore();
  const { sendPost } = tiptapStore;
  const configStore = useConfigStore();
  const { message } = configStore;

  const mediaStore = useMedia();
  const { files } = storeToRefs(mediaStore);

  if (files.value) {
    data.miniature = files.value;
  } else {
    delete data.miniature;
  }

  try {
    const post = await sendPost(data);
    message.success(`Post created. Redirect`);
    window.location.href = `/post/${post.slug}`;
  } catch (e: Error | any) {
    message.error(e.message);
  }
}
