import { UploadCustomRequestOptions } from "naive-ui";
import { useDirectus } from "@app/const";
import { useConfigStore } from "@app/module/store/store.config";
export const uploadToDirectusSDK = async ({
  file,
  data,
}: UploadCustomRequestOptions) => {
  const sdk = useDirectus;
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
    await sdk.files.createOne(formData);
    message.success(`${file.name} uploaded`);
  } catch (e) {
    message.error(e.message);
  }
};
