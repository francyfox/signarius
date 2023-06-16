import { defineHook } from "@directus/extensions-sdk";
import slugify from "@sindresorhus/slugify";

type Content = {
  header?: string;
  slug: string;
};

const events = ["items.create", "items.update"];

export default defineHook(({ filter }) => {
  filter("*.*", (payload, meta) => {
    if (events.includes(meta.event)) {
      const item = payload as Content;

      if (item.header) {
        item.slug = slugify(item.header);
      }

      return item;
    }

    return payload;
  });
});
