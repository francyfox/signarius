import { Editor } from "@tiptap/vue-3";

export interface IEditorBar {
  label: string,
  mdi: string,
  action: () => boolean,
  isActive: () => boolean
}

export const SchemaEditorBar = (editor: Editor): Array<IEditorBar> => {
  return [
    {
      label: 'bold',
      mdi: 'format-bold',
      action: () => editor.chain().toggleBold().run(),
      isActive: () => editor.isActive('bold'),
    }
  ]
}