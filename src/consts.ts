// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import { Directus } from '@directus/sdk'
import { Post, Textblock } from "@app/schema/schema.signarius";
type SchemaSignarius = {
  post: Post,
  textblock: Textblock
}

export const REFRESH_TOKEN_NAME = 'directus_refresh_token';

export const DIRECTUS_HOST = 'http://127.0.0.1:8055'

export const useDirectus = new Directus<SchemaSignarius>(DIRECTUS_HOST)