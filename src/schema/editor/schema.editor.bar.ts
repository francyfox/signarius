import { Editor } from "@tiptap/vue-3";

export enum BtnTypes {
  btn = 'menu-bar-btn',
  palette = 'menu-bar-palette'
}

export interface IEditorBarIcon {
  label: string,
  mdi: string,
}

export interface IEditorBarBtn extends IEditorBarIcon {
  action?: () => boolean,
  isActive?: () => boolean
}

export interface IEditorBarPalette extends IEditorBarBtn {
  type: BtnTypes
  editor?: Editor
  color?: () => string
}

export interface IEditorBarComponent extends IEditorBarBtn, IEditorBarPalette {}

export const SchemaEditorBar = (editor: Editor, states: any): Array<IEditorBarComponent> => {
  return [
    {
      type: BtnTypes.palette,
      label: 'color',
      mdi: 'palette-advanced',
      editor: editor,
      color: () => editor.getAttributes('textStyle').color
    }
  ]
}

export const SchemaBubbleMenu = (editor: Editor): Array<IEditorBarBtn> => {
  return [
    {
      label: 'bold',
      mdi: 'format-bold',
      action: () => editor.chain().toggleBold().run(),
      isActive: () => editor.isActive('bold'),
    }
  ]
}