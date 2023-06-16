import { ILoginSchema } from "@components/form/security/login/login.schema";
import { useUserStore } from "@app/module/store/store.user";
import { useConfigStore } from "@app/module/store/store.config";
import { Ref } from "vue";

export default async function LoginSubmitHandler(data: ILoginSchema) {
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

  try {
    await auth(data);
    message.success(`Login success. Redirect`);
    window.location.href = "/dashboard";
  } catch (e: Error | any) {
    message.error(e.message);
  }

  messageReactive.destroy();
}
