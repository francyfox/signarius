import path from 'path'
import { writeFile, mkdir, exists } from 'node:fs/promises'
import { FormkitElement } from "./formkit.element";

export default class FormkitSchemaGenerator {
  collections: string[]
  excludeFields = [
    'id',
    'user_created',
    'user_updated',
    'date_created',
    'date_updated',
    'sort',
  ]
  constructor(collections: string[]) {
    this.collections = collections
  }

  async token() {
    const response = await fetch('http://127.0.0.1:8055/auth/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: '7info7web@gmail.com',
        password: '123'
      })
    })

    const { data } = await response.json()

    return data.access_token
  }

  async FieldList() {
    const token = await this.token()
    const response = await fetch(`http://127.0.0.1:8055/fields?fields=collection,field,meta.*`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        Authorization: `Bearer ${token}`
      }
    })

    const { data } = await response.json()
    const patterns = this.collections.reduce(((acc, currentValue) =>
      [...acc, `^${currentValue}$`]),
      [])

    return data.filter(
      (i) => {
        return i.collection.match(new RegExp(`${patterns.join('|')}`), 'g')
          && !i.field.match(new RegExp(`${this.excludeFields.join('|')}`), 'g')
      }
    )
  }

  async translate2FormKitSchema(): Promise<{}> {
    const fields = await this.FieldList()
    const schema = {}

    for (const field of fields) {
      const el = FormkitElement(field)

      if (el !== null) {
        if (!schema[field.collection]) {
          schema[field.collection] = []
        }

        schema[field.collection].push(el)
      }
    }

    return schema
  }

  async saveFile() {
    const collectionList = await this.translate2FormKitSchema()

    for (const schema in collectionList) {
      const filename = `./console/module/formkit/export/schema.${schema}.json`
      const dirname = path.dirname(filename);

      if (!await exists(dirname)) {
        await mkdir(dirname, { recursive: true })
      }

      await writeFile(filename, JSON.stringify(collectionList[schema], null, 2))
    }
  }
}