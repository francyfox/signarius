import { NaiveUISchema } from "@francyfox/fn-forms/src/lib";
import loginRules from "@components/form/security/login/login.rules";
export default [
  {
    $type: "n-form",
    $props: {
      rules: loginRules,
    },
    $children: [
      {
        $type: "n-form-item",
        $props: {
          label: "Email",
          path: "user.email",
        },
        $children: [
          {
            $type: "n-input",
            $props: {
              type: "email",
              placeholder: "Email",
              value: "$data.user.email",
            },
          },
        ],
      },
      {
        $type: "n-form-item",
        $props: {
          label: "Password",
          path: "user.email",
        },
        $children: [
          {
            $type: "n-input",
            $props: {
              type: "password",
              placeholder: "Password",
              value: "$data.user.password",
            },
          },
        ],
      },
      {
        $type: "n-space",
        $children: [
          {
            $type: "n-button",
            $children: "Next",
            $props: {
              type: "primary",
            },
          },
          {
            $type: "n-button",
            $children: "Remind Password",
          },
          {
            $type: "n-button",
            $children: "New Account",
          },
        ],
      },
    ],
  },
] as NaiveUISchema;
