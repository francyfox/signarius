import { maker } from "@form-create/naive-ui";
import { email, password } from "@app/module/validation/validation.rules";
import { uploadToDirectusSDK } from "@app/module/form/form.actions";

export const InputEmail = maker
  .input("Email", "email", null, {
    type: "email",
    placeholder: "name@gmail.com",
  })
  .validate(email);

export const InputPassword = maker
  .input("Password", "password", null, {
    type: "password",
    placeholder: "******",
  })
  .validate(password);

export const InputUpload = (title: string, field: string) => {
  return {
    type: "upload",
    field,
    title,
    value: [],
    props: {
      max: 1,
      customRequest: uploadToDirectusSDK,
    },
  };
};
