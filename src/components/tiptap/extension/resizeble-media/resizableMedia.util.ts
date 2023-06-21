import {
  FormatAlignLeftFilled,
  FormatAlignRightFilled,
  FormatAlignCenterFilled,
  DeleteFilled,
  AlignHorizontalLeftFilled,
  AlignHorizontalRightFilled,
} from "@vicons/material";
interface ResizableMediaAction {
  tooltip: string;
  icon: any;

  action?: (updateAttributes: (o: Record<string, any>) => any) => void;
  isActive?: (attrs: Record<string, any>) => boolean;
  delete?: (d: () => void) => void;
}

export const resizableMediaActions: ResizableMediaAction[] = [
  {
    tooltip: "Align left",
    action: (updateAttributes) =>
      updateAttributes({
        dataAlign: "justify-start",
        dataFloat: null,
      }),
    icon: FormatAlignLeftFilled,
    isActive: (attrs) => attrs.dataAlign === "left",
  },
  {
    tooltip: "Align center",
    action: (updateAttributes) =>
      updateAttributes({
        dataAlign: "justify-center",
        dataFloat: null,
      }),
    icon: FormatAlignCenterFilled,
    isActive: (attrs) => attrs.dataAlign === "center",
  },
  {
    tooltip: "Align right",
    action: (updateAttributes) =>
      updateAttributes({
        dataAlign: "justify-end",
        dataFloat: null,
      }),
    icon: FormatAlignRightFilled,
    isActive: (attrs) => attrs.dataAlign === "right",
  },
  {
    tooltip: "Float left",
    action: (updateAttributes) =>
      updateAttributes({
        dataAlign: null,
        dataFloat: "float-left mr-2",
      }),
    icon: AlignHorizontalLeftFilled,
    isActive: (attrs) => attrs.dataFloat === "left",
  },
  {
    tooltip: "Float right",
    action: (updateAttributes) =>
      updateAttributes({
        dataAlign: null,
        dataFloat: "float-right ml-2",
      }),
    icon: AlignHorizontalRightFilled,
    isActive: (attrs) => attrs.dataFloat === "right",
  },
  {
    tooltip: "Delete",
    icon: DeleteFilled,
    delete: (deleteNode) => deleteNode(),
  },
];
