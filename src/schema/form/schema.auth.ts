export default [
  {
    $el: "h1",
    children: "#Login",
  },
  {
    $formkit: "email",
    name: "email",
    label: "Email",
    prefixIcon: "email",
    validation: "required|email",
  },
  {
    $formkit: "password",
    name: "password",
    label: "Password",
    prefixIcon: "password",
    validation: "required|length:3,16",
  },
];
