import { DBSchema } from "idb";

export interface SchemaDb extends DBSchema {
  'token': {
    key: string,
    value: string
  }
}