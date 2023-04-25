import { FormKitElementBase, IconTranslate, IFormKitElement, InterfaceTranslate } from "./formkit.types";

export const FormkitElement = (el: IFormKitElement): FormKitElementBase | null => {
  const placeholder = el.meta.options?.placeholder

  let output: FormKitElementBase = {
    $formkit: '',
    name: el.field,
    label: (placeholder === undefined) ? el.field.charAt(0).toUpperCase() + el.field.slice(1) : placeholder
  }

  const key = Object.keys(InterfaceTranslate).find((i) => i === el.meta.interface)

  if (key) {
    output.$formkit = InterfaceTranslate[key]
  } else {
    return null
  }


  switch (output.$formkit) {
    case 'select':
      const options = el.meta.options.choices.reduce((acc, i) => {
        acc[i.value] = i.value.charAt(0).toUpperCase() + i.value.slice(1)
        return acc
      }, {})
      output['options'] = options
  }

  return elementStyle(el, output)
}


function elementStyle(el: IFormKitElement, output: FormKitElementBase) {
  if (el.meta?.options?.iconRight) {
    output['prefixIcon'] = el.meta?.options?.iconRight
  }

  if (el.meta.width === 'half') {
    output['config'] = { outerClass: 'half' }
  }

  if (el.meta.required) {
    output = {...output, validation: 'required'}
  }

  const key = Object.keys(IconTranslate).find((i) => i === output.prefixIcon)

  if (key) {
    output.prefixIcon = IconTranslate[key]
  }

  return output
}