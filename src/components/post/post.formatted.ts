import { h, render } from "vue";
import { Post } from "@app/directusTypes";
import { NImage } from "naive-ui";
export default class PostFormatted {
  post: Post;
  constructor(post: Post) {
    this.post = post;
  }

  formatted() {
    const textblockMap = this.post.textblock?.map((textblock) =>
      this.mediaReplace(textblock.item.text)
    );

    return h("article", null, textblockMap);
  }

  mediaReplace(content: string) {
    const hasMedia = content.match('media-type="img"');

    if (hasMedia) {
      const img = {
        src: /.*src=\"(.*?)\".*/.exec(content)?.pop(),
        width: /.*width=\"(.*?)\".*/.exec(content)?.pop(),
        height: /.*height=\"(.*?)\".*/.exec(content)?.pop(),
        previewSrc: /.*src=\"(.*?)\".*/.exec(content)?.pop()?.split("?")[0],
      };

      return h(NImage, { ...img, class: this.copyDataFloatClass(content) });
    }

    return h("p", {
      innerHTML: content.replaceAll(/<p[^>]*>|<\/p>/g, ""), // TODO: need add different textblock meta
    });
  }
  copyDataFloatClass(content: string) {
    return content.match("datafloat")
      ? content.split('datafloat="')[1].replace('">', "")
      : "";
  }
}
