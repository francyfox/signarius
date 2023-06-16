import { UploadCustomRequestOptions } from "naive-ui";
import { useDirectus } from "@app/const";
import { useConfigStore } from "@app/module/store/store.config";
import { useMedia } from "@app/module/store/store.media";
import { storeToRefs } from "pinia";
export const uploadToDirectusSDK = async ({
  file,
  data,
}: UploadCustomRequestOptions) => {
  const sdk = useDirectus;
  const mediaStore = useMedia();
  const { createStorageFile } = mediaStore;
  const { files } = storeToRefs(mediaStore);
  const configStore = useConfigStore();
  const { message } = configStore;
  const formData = new FormData();
  if (data) {
    Object.keys(data).forEach((key) => {
      formData.append(
        key,
        data[key as keyof UploadCustomRequestOptions["data"]]
      );
    });
  }
  formData.append(file.name, file.file as File);
  try {
    const storageFile = await createStorageFile(formData);
    files.value = storageFile;
    message.success(`${file.name} uploaded`);
  } catch (e) {
    message.error(e.message);
  }
};
