//É um loop dengtro de elementos iteráveis (arrays, strings).

function multiplicaPorDois(arr) {
  let multiplicados = [];

  for (let i = 0; i < arr.length; i++) {
    multiplicados.push(arr[i] * 2);
  }

  return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

multiplicaPorDois(meusNumeros);
