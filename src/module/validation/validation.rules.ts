import { Ref } from "vue";
import { FormItemRule } from "naive-ui";
export const password: FormItemRule[] = [
  {
    required: true,
    message: "Password is required",
  },
];

export const email: FormItemRule[] = [
  {
    required: true,
    message: "Email is required. Example name@mail.ru",
    validator: (rule, value: string) =>
      new RegExp(value).test("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
  },
];

export const passwordRepeat = (fistPass: Ref<string>): FormItemRule[] => {
  return [
    {
      required: true,
      message: "Re-entered password is required",
      trigger: ["input", "blur"],
    },
    {
      validator: (rule, value: string) =>
        !!fistPass &&
        fistPass.value.startsWith(value) &&
        fistPass.value.length >= value.length,
      message: "Password is not same as re-entered password!",
      trigger: "input",
    },
    {
      validator: (rule, value: string) => value === fistPass.value,
      message: "Password is not same as re-entered password!",
      trigger: ["blur", "password-input"],
    },
  ];
};
