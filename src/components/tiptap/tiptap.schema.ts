import { Editor } from "@tiptap/vue-3";
import {
  PaletteFilled,
  FormatBoldFilled,
  FormatItalicFilled,
  FormatStrikethroughFilled,
  CodeSharp,
} from "@vicons/material";

import { ArrowUndo24Filled, ArrowRedo24Filled } from "@vicons/fluent";

export enum BtnTypes {
  btn = "menu-bar-btn",
  palette = "menu-bar-palette",
}

export interface IEditorBarIcon {
  label: string;
  icon: object;
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
      icon: ArrowUndo24Filled,
      click: () => editor.chain().focus().undo().run(),
      disabled: () => !editor.can().undo(),
    },
    {
      type: BtnTypes.btn,
      label: "Redo",
      icon: ArrowRedo24Filled,
      click: () => editor.chain().focus().redo().run(),
      disabled: () => !editor.can().redo(),
    },
    {
      type: BtnTypes.palette,
      label: "color",
      icon: PaletteFilled,
      editor: editor,
      color: () => editor.getAttributes("textStyle").color ?? "#FFFFFF",
    },
  ];
};

export const SchemaBubbleMenu = (editor: Editor): Array<IEditorBarBtn> => {
  return [
    {
      label: "bold",
      icon: FormatBoldFilled,
      click: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
    },
    {
      label: "italic",
      icon: FormatItalicFilled,
      click: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive("italic"),
    },
    {
      label: "strike",
      icon: FormatStrikethroughFilled,
      click: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive("strike"),
    },
    {
      label: "code",
      icon: CodeSharp,
      click: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive("code"),
    },
  ];
};
