import { JSONContent } from "@tiptap/vue-3";
import { UnwrapRefSimple } from "@vue/composition-api";

enum TreePositionIcon {
  middle = '├──',
  bottom = '└──',
  next = '───',
  down = '│',
  empty = '\u00a0 \u00a0 \u00a0 \u00a0'
}

type EditorNode = Array<UnwrapRefSimple<JSONContent>> | null | Array<UnwrapRefSimple<UnwrapRefSimple<JSONContent>>>
type LvlPath = {index: number, prev: number, current: number, next: number}

export const treeRowIcon = (node: EditorNode, index: number) => {
  return getRow(getLvlPath(node, index))
}

function getLvlPath(node: EditorNode, index: number): LvlPath | null {
  if (node) {
    return  {
      index,
      prev: node[index - 1]?.attrs?.level,
      current: node[index]?.attrs?.level,
      next: node[index + 1]?.attrs?.level
    }
  } else {
    return null;
  }
}

function getRow(lvlPath: LvlPath | null ) {
  if (lvlPath) {
    const { index, prev, current, next } = lvlPath;
    let out: string = '';

    for (let i = 0; i < current - 2; i += 1) {
      if (i !== next || i !== prev) {
        out += TreePositionIcon.empty
      }
    }

    if (current === next) {
      out += TreePositionIcon.middle
    }

    if (current < next
      || next > current
      || (prev < current && current !== next)
      || (prev === current && current !== next)
    ) {
      if (index !== 0) {
        out += TreePositionIcon.bottom
      }
    }

    return out;
  }
}