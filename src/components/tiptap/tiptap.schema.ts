import { Editor } from "@tiptap/vue-3";

export enum BtnTypes {
  btn = "menu-bar-btn",
  palette = "menu-bar-palette",
}

export interface IEditorBarIcon {
  label: string;
  mdi: string;
  disabled?: () => boolean;
}

export interface IEditorBarBtn extends IEditorBarIcon {
  click?: () => boolean;
  isActive?: () => boolean;
}

export interface IEditorBarPalette extends IEditorBarIcon {
  type: BtnTypes;
  editor?: Editor;
  color?: () => string;
}

export interface IEditorBarComponent extends IEditorBarBtn, IEditorBarPalette {}

export const SchemaEditorBar = (editor: Editor): Array<IEditorBarComponent> => {
  return [
    {
      type: BtnTypes.btn,
      label: "Undo",
      mdi: "undo-variant",
      click: () => editor.chain().focus().undo().run(),
      disabled: () => !editor.can().undo(),
    },
    {
      type: BtnTypes.btn,
      label: "Redo",
      mdi: "redo-variant",
      click: () => editor.chain().focus().redo().run(),
      disabled: () => !editor.can().redo(),
    },
    {
      type: BtnTypes.palette,
      label: "color",
      mdi: "palette",
      editor: editor,
      color: () => editor.getAttributes("textStyle").color ?? "#FFFFFF",
    },
  ];
};

export const SchemaBubbleMenu = (editor: Editor): Array<IEditorBarBtn> => {
  return [
    {
      label: "bold",
      mdi: "format-bold",
      click: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
    },
    {
      label: "italic",
      mdi: "format-italic",
      click: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive("italic"),
    },
    {
      label: "strike",
      mdi: "format-strikethrough",
      click: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive("strike"),
    },
    {
      label: "code",
      mdi: "code-braces-box",
      click: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive("code"),
    },
  ];
};
