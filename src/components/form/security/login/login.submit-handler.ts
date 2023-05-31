import { FormLogin } from "@components/form/security/login/login.schema";
import { useUserStore } from "@app/module/store/store.user";
import { useMessage, FormInst } from "naive-ui";
import { useConfigStore } from "@app/module/store/store.config";
import { Ref } from "vue";

export default async function LoginSubmitHandler(
  data: FormLogin,
  formRef: Ref<FormInst>
) {
  const userStore = useUserStore();
  const configStore = useConfigStore();
  const { auth } = userStore;
  const { message } = configStore;

  if (message === null) {
    throw new Error("Message provider not found");
  }

  const messageReactive = message.loading("Verifying", {
    duration: 0,
  });

  console.log(formRef.value);
  formRef.value?.validate((errors) => {
    console.log(errors);
  });

  try {
    await formRef?.value.validate;

    // await auth(data);
    message.success(`Login success. Redirect`);
  } catch (e: Error | any) {
    message.error(e.message);
  }

  messageReactive.destroy();
}
