import { InputEmail } from "@app/module/form/form.elements";
import { maker } from "@form-create/naive-ui";
export default [
  InputEmail,
  maker.input("Telegram", "telegram"),
  maker.text("FullName", "fullname"),
  maker.text("Company", "company").validate({
    required: true,
    trigger: "input",
    message: "Company name is required",
  }),
  maker.textarea("Message", "message").validate({
    required: true,
    trigger: "input",
    message: "Message is required",
  }),
];
