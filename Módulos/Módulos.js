//São arquivos que tem a capacidade de importar e exportar arquivos do mesmo tipo.
//É utilizado para você organizar melhor seus códigos, sendo que com essa técnica você pode separar um arquivo apenas com váriaveis, outro com funções, manipular funções...
//Existem duas técnicas para exportar esses arquivos a named export e a default export.
//só é possível usar um default export por arquivo, e ele vai se tornar o retorno padrão do arquivo.

//Exemplo de named export.
//O export também pode ser colocado depois da função.

export function mostraIdade(pessoa) {
  return "A idade da pessoa ${pessoa.nome} é ${pessoa.idade}";
}

function mostraCidade(pessoa) {
  return "A cidade da pessoa ${pessoa.nome} é ${pessoa.cidade}";
}

export { mostraCidade };

//Importar named export.

import { funcao, variavel, classe } from "./funcao";

//Default export.

function mostraCarro(pessoa) {
  return "O carro da pessoa ${pessoa.nome} é ${pessoa.carro}";
}

function mostraHobby(pessoa) {
  return "O hobby da pessoa ${pessoa.nome} é ${pessoa.hobby}";
}

export { mostraCarro };

export default mostraHobby;

//Importar default export.

import mostrarHobby from "./bananinha";
