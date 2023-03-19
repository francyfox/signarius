export default [
  {
    $el: 'h1',
    attrs: {
      class: '_t-fz-h4',
    },
    children: 'New post'
  },
  {
    $formkit: 'text',
    name: 'name',
    label: 'Header',
    validation: 'required',
  },
  {
    $formkit: 'textarea',
    name: 'desc',
    label: 'Descriptor',
    maxlength: 100
  },
]