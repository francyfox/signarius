import { useConfigStore } from "@app/module/store/store.config";

export default async function portfolioSubmitHandler(data) {
  const configStore = useConfigStore();
  const { message } = configStore;

  if (message === null) {
    throw new Error("Message provider not found");
  }

  const messageReactive = message.loading("Verifying", {
    duration: 0,
  });

  try {
    // @ts-ignore
    const slapform = new Slapform();
    await slapform.submit({
      form: "GuavBBpkw",
      data,
    });

    message.success(
      `Success, message sent. I will give you feedback within a few days`
    );
  } catch (e: Error | any) {
    message.error(e.message);
  }

  messageReactive.destroy();
}
