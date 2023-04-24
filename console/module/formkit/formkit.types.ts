/**
 * @description Translated names field.meta.interface to Formkit element type
 */
export const InterfaceTranslate = {
  'input': 'text',
  'file': 'file',
  'language': 'text',
  'input-hash': 'password',
  'input-multiline': 'textarea',
  'select-dropdown': 'select',
  // 'tags': 'taglist'
}

export interface IFormKitElement {
  collection: string
  field: string
  type: string
  meta: IFormKitElementMeta
}
export interface IFormKitElementMeta {
  id: number
  collection: string
  field: string
  special: any
  interface: string
  options: any
  display: any
  display_options: any
  readonly: boolean
  hidden: boolean
  sort: any
  width: string
  translations: any
  note: any
  conditions: any
  required: boolean
  group: any
  validation: any
  validation_message: any
}

export type FormKitElementBase = {
  $formkit: string,
  name: string,
  label: string,
  validation?: string
  options?: object
}