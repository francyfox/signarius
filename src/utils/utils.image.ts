import { DIRECTUS_HOST } from "@app/const";

export async function isImgUrl(url) {
  const img = new Image();
  img.src = url;
  return new Promise((resolve) => {
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
}

export class DirectusAsset {
  id: string;
  params: {
    fit: string;
    quality: number;
    format: string;
    width?: number;
    height?: number;
  };

  constructor(id: string) {
    this.id = id;
    this.params = {
      fit: "cover",
      quality: 95,
      format: "auto",
    };
  }

  size(width: number, height: number) {
    this.params = {
      ...this.params,
      width,
      height,
    };
    return this;
  }

  get url() {
    return `${DIRECTUS_HOST}/assets/${this.id}?${new URLSearchParams(
      // @ts-ignore
      this.params
    ).toString()}`;
  }
}
