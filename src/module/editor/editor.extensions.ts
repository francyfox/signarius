import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import CharacterCount from "@tiptap/extension-character-count";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import { ResizableMedia } from "@components/global/editor/extension/resizableMedia";

export const extensions = [
  StarterKit,
  Link.configure(),
  CharacterCount.configure(),
  TextStyle,
  Color,
  Image,
  ResizableMedia,
]