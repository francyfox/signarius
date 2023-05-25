import { NaiveUISchema } from "@francyfox/fn-forms/dist";
export default [
  {
    $type: "n-form",
    $props: {},
    $children: [
      {
        $type: "n-form-item",
        $props: {
          label: "Name",
          path: "user.name",
        },
        $children: [
          {
            $type: "n-input",
            $props: {
              placeholder: "Input Name",
              value: "$data.user.name",
            },
          },
        ],
      },
    ],
  },
] as NaiveUISchema;
