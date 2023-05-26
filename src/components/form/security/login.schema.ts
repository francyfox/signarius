import { NaiveUISchema } from "@francyfox/fn-forms/src/lib";
export default [
  {
    $type: "n-form",
    $props: {},
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
