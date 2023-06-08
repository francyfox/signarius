import { InputEmail } from "@app/module/form/form.elements";
import { maker } from "@form-create/naive-ui";
export default [
  InputEmail,
  maker
    .text("FullName", "fullname", null, { placeholder: "John Doe" })
    .validate({
      required: true,
      trigger: "input",
      message: "FullName is required",
    }),
  maker.input("Telegram", "telegram", null, { placeholder: "@john" }),

  maker.text("Company", "company", null, { placeholder: "Acme Inc" }),
  maker.textarea("Message", "message", null, { placeholder: "" }).validate({
    required: true,
    trigger: "input",
    message: "Message is required",
  }),
];
