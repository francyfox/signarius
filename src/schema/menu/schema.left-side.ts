interface LeftSideMenuItem {
  name: string;
  link: string;
  icon: string;
  hasAdd?: boolean;
  hasEdit?: boolean;
}

export default [
  {
    name: "Dashboard",
    link: "dashboard",
    icon: "view-dashboard",
  },
  {
    name: "My Posts",
    link: "post",
    icon: "cube",
    hasAdd: true,
  },
  {
    name: "Account",
    link: "account",
    icon: "account",
    hasEdit: true,
  },
] as Array<LeftSideMenuItem>;
