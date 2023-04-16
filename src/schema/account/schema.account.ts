export default [
  {
    $el: 'h1',
    children: 'Account Settings'
  },
  {
    $formkit: 'text',
    name: 'first_name',
    label: 'First Name',
    validation: 'required',
  },
  {
    $formkit: 'text',
    name: 'last_name',
    label: 'Last Name',
    validation: 'required',
  },

]