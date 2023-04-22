import { resolve } from 'node:path'
import { access } from 'node:fs/promises'
import { write, stdout, file } from 'bun'

type FormKitElement = {
  $formkit: string,
  name: string,
  label: string,
  validation?: string
}

// TODO: REMOVE USE FIELDS

export default class FormkitSchemaGenerator {
  fileContent: Blob
  outputJSON = []
  FormKitTypes = {
    text: 'string | null',
    file: 'string | DirectusFiles | null'
  }
  excludeMatch = [
    'id',
    'date_created',
    'date_updated',
    'user_created',
    'user_updated'
  ]

  constructor(path: string) {
    this.parse(path)
  }

  async read(path: string) {
    try {
      await access(path)
      this.fileContent = file(path)
      return this.fileContent
    } catch (e) {
      console.log(e);
    }
  }

  async write() {
    write('../src/_directus2formkit.schema.json', this.outputJSON)
  }

  async parse(path: string) {
    const file = await this.read(path)
    if (file) {
      const text = await file.text()
      const blocks = text
        .trim()
        .split(/(?<=\})/)

      for (const block of blocks) {
        this.filterBlocks(this.outputJSON, block)
      }

      console.log(this.outputJSON)

    } else {
      console.log('[ERROR] - File not found')
    }

    // await this.write()
  }

  filterBlocks(acc, currentValue) {
    currentValue.replace('export type ', '')
    const arrName = currentValue.substring(0, currentValue
      .indexOf(" = {"))
      .trim()
      .split(' ').pop()

    if (arrName && !arrName.match('Directus')) {
      let params: Array<FormKitElement> = []
      currentValue
        .replace(/.+({)/, '')
        .replace(/(})/, '')
        .split(';')


      for (const param of currentValue) {
        params.push(this.translateElementToFormkit(param))
      }

      const elementJSON = {
        name: arrName,
        params
      }

      acc.push(elementJSON)

      // return `export const ${arrName} = {`
    }
  }

  translateElementToFormkit(directusEl: string): FormKitElement {
    let FormkitElement: FormKitElement = {
      $formkit: '',
      name: '',
      label: '',
    }
    if (!directusEl.match('?')) {
      FormkitElement = {
        ...FormkitElement,
        validation: 'required'
      }
    }

    return FormkitElement
  }
}