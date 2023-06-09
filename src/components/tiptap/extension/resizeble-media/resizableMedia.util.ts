interface ResizableMediaAction {
  tooltip: string;
  icon: string;

  action?: (updateAttributes: (o: Record<string, any>) => any) => void;
  isActive?: (attrs: Record<string, any>) => boolean;
  delete?: (d: () => void) => void;
}

export const resizableMediaActions: ResizableMediaAction[] = [
  {
    tooltip: "Align left",
    action: (updateAttributes) =>
      updateAttributes({
        dataAlign: "_h-jc-fs",
        dataFloat: null,
      }),
    icon: "format-align-left",
    isActive: (attrs) => attrs.dataAlign === "left",
  },
  {
    tooltip: "Align center",
    action: (updateAttributes) =>
      updateAttributes({
        dataAlign: "_h-jc-c",
        dataFloat: null,
      }),
    icon: "format-align-center",
    isActive: (attrs) => attrs.dataAlign === "center",
  },
  {
    tooltip: "Align right",
    action: (updateAttributes) =>
      updateAttributes({
        dataAlign: "_h-jc-fe",
        dataFloat: null,
      }),
    icon: "format-align-right",
    isActive: (attrs) => attrs.dataAlign === "right",
  },
  {
    tooltip: "Float left",
    action: (updateAttributes) =>
      updateAttributes({
        dataAlign: null,
        dataFloat: "_h-f-l",
      }),
    icon: "format-float-left",
    isActive: (attrs) => attrs.dataFloat === "left",
  },
  {
    tooltip: "Float right",
    action: (updateAttributes) =>
      updateAttributes({
        dataAlign: null,
        dataFloat: "_h-f-r",
      }),
    icon: "format-float-right",
    isActive: (attrs) => attrs.dataFloat === "right",
  },
  {
    tooltip: "Delete",
    icon: "delete",
    delete: (deleteNode) => deleteNode(),
  },
];
