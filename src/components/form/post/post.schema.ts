import { maker } from "@form-create/naive-ui";
import { InputUpload } from "@app/module/form/form.elements";
export default [
  InputUpload("Miniature", "miniature"),
  maker.input("Header", "header").validate({ required: true }),
  maker.input("Slug (autogenerate)", "slug"),
  maker.select("Status", "status", "published").options([
    { value: "published", label: "published" },
    { value: "draft", label: "draft" },
    { value: "archived", label: "archived" },
  ]),
  maker.select("Visibility", "visibility", "global").options([
    { value: "global", label: "global" },
    { value: "registred", label: "registred" },
    { value: "private", label: "private" },
  ]),
];
