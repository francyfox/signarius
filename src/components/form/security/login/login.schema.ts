import { InputEmail, InputPassword } from "@app/module/form/form.elements";
import { maker } from "@form-create/naive-ui";

export default [
  InputEmail,
  InputPassword,
  maker.switch("Save me", "agreement", false),
];

export interface ILoginSchema {
  email: string;
  password: string;
  save: boolean;
}
