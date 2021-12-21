//Hoje em dia é mais facil declarar um valor padrão sem precisar usar "if". Para a declaração simplesmente declaramos o valor padrão na função, como nesse caso foi definido o valor "1".

function exponencial(array, num = 1) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] ** num);
  }
  return result;
}
