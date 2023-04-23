import { resolve } from 'node:path'
import { access } from 'node:fs/promises'
import { write, stdout, file } from 'bun'

type FormKitElement = {
  $formkit: string,
  name: string,
  label: string,
  validation?: string
}

export default class FormkitSchemaGenerator {
  collections: string[]
  constructor(collections: string[]) {
    this.collections = collections

    this.translate2FormKitSchema()
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
    const response = await fetch(`http://127.0.0.1:8055/fields`, {
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
      (i) => i.collection.match(new RegExp(`^${patterns.join('|')}$`), 'g')
    )
  }

  async translate2FormKitSchema() {
    const fields = await this.FieldList()
    console.log(await fields)
  }
}