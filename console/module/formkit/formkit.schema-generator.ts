import { resolve } from 'node:path'
import { access } from 'node:fs/promises'
import { write, stdout, file } from 'bun'

export default class FormkitSchemaGenerator {
  fileContent: Blob
  outputJSON: [any]

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

      const filtred = blocks.reduce((acc, currentValue) => {
        currentValue.replace('export type ', '')
        const arrName= currentValue.substring(0, currentValue.indexOf(" "))
        const template = "\r\n|\n\r|[\n\r\v\f\x1c\x1d\x1e\x85\u2028\u2029\x00]"
        const splited = currentValue.split(template)
        console.log(splited[0])
        return `export const ${arrName} = {`
      })

    } else {
      console.log('[ERROR] - File not found')
    }

    // await this.write()
  }

}