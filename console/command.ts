import FormkitSchemaGenerator from "./module/formkit/formkit.schema-generator";

function start() {
  new FormkitSchemaGenerator(['post', 'textblock']);
}


start()