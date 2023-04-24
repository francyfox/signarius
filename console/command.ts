import FormkitSchemaGenerator from "./module/formkit/formkit.schema-generator";

async function start() {
  const generator = new FormkitSchemaGenerator(['post', 'textblock', 'directus_users']);
  const FormKitSchema = await generator.saveFile()
}


await start()