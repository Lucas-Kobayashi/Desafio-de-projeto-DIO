//A estrutura básica de uma função é "function nome(parametro){}" o parametro não é obrigatório.
//As variáveis criadas dentro da função só podem ser utilizadas dentro dela.
//O "return" é utilizado para terminar a função naquele local.

function nome(parametro) {}

//As funções anônimas não tem nome e são utilizadas em variáveis.
//Por não ter nome declarado ela ganha esse nome de função anônima.
//Se os valores de "a" e "b" fossem declarados o return daria a soma dos dois.

const exmp = function (a, b) {
  return a + b;
};
