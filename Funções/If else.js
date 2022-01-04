//A primeira declaracão, a que está dentro do if ocorre caso a sua condição seja verdadeira, se não for o caso o programa prossegue para o else.
//Você consegue armazenar condicionais dentro de variáveis.
//O uso do else não é obrigatório.

function numeroPositivo(num) {
  let resultado;

  if (num < 0) {
    resultado = false;
  } else {
    resultado = true;
  }

  return resultado;
}

function numeroPositive(num) {
  let result;

  const ehNegativo = num < 0;

  if (ehNegativo) {
    result = false;
  } else {
    result = true;
  }

  return result;
}

function numberPositive(num) {
  const isNegative = num < 0;
  const biggerThentTen = num > 10;

  if (isNegative) {
    return "Esse número é negativo!";
  } else if (!isnegative && biggerThentTen) {
    return "Esse número é positivo e maior que 10!";
  }
  return "Esse número é positivo!";
}
