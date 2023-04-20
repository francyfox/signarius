import FormkitSchemaGenerator from "./module/formkit/formkit.schema-generator";

function start() {
  new FormkitSchemaGenerator('./src/types.ts');
}


start()