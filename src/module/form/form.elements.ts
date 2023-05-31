import { maker } from "@form-create/naive-ui";
import { email, password } from "@app/module/validation/validation.rules";

export const InputEmail = maker
  .input("Email", "email", null, {
    type: "email",
    placeholder: "name@gmail.com",
  })
  .validate(email);

export const InputPassword = maker
  .input("Password", "password", null, {
    placeholder: "******",
  })
  .validate(password);
