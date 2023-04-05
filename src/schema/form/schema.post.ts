export default [
  {
    $el: 'h1',
    attrs: {
      class: '_t-fz-h4',
    },
    children: 'New post'
  },
  {
    $formkit: 'select',
    name: 'status',
    label: 'Status',
    options: {
      draft: 'Draft',
      published: 'Published',
      deleted: 'Deleted'
    }
  },
  {
    $formkit: 'text',
    name: 'header',
    label: 'Header',
    validation: 'required',
  },
  {
    $formkit: 'textarea',
    name: 'descriptor',
    label: 'Descriptor',
    maxlength: 100
  },
  {
    $formkit: 'file',
    label: 'Miniature',
    name: 'file'
  }
]