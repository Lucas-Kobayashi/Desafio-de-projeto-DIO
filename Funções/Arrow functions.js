//Arrow function é utilizado para diminuir a quantidade de código que precisa ser escrito para declarar uma variável.
//Se for uma função bem pequena não é necessario nem o uso do return.
//Caso a função vá receber apenas um parâmetro não é necessario o uso de parênteses.
//Não faz hoisting.

const helloWorld = function () {
  return "Hello World";
};

const olaMundo = () => {
  return "Ola Mundo";
};

const oiTerra = () => "Oi Terra";

const soma = (a, b) => a + b;

const mais = a => a;
