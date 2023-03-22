import { Editor } from "@tiptap/vue-3";

export enum BtnTypes {
  btn = 'menu-bar-btn',
  pallete = 'menu-bar-pallete'
}

export interface IEditorBarIcon {
  label: string,
  mdi: string,
}

export interface IEditorBarBtn extends IEditorBarIcon {
  action: () => boolean,
  isActive: () => boolean
}

export interface IEditorBarPallete extends IEditorBarBtn {
  type: BtnTypes
  input?: () => boolean,
}

export interface IEditorBarComponent extends IEditorBarBtn, IEditorBarPallete {}

export const SchemaEditorBar = (editor: Editor): Array<IEditorBarComponent> => {
  return [
    {
      type: BtnTypes.pallete,
      label: 'bold',
      mdi: 'format-bold',
      action: () => editor.chain().toggleBold().run(),
      isActive: () => editor.isActive('bold'),
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