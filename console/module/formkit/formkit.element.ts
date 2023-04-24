import { FormKitElementBase, IFormKitElement, InterfaceTranslate } from "./formkit.types";

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
      const options = el.meta.options.choices.map((i) => {
        const capitalized = i.value.charAt(0).toUpperCase() + i.value.slice(1)
        const option = {}
        option[i.value] = capitalized

        return option
      })
      output = {...output, options}
  }

  if (el.meta.required) {
    output = {...output, validation: 'required'}
  }

  return output
}