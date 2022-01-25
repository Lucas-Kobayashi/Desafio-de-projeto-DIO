const lista = [
  {
    name: "Bolacha",
    valor: 3
  },
  {
    name: "Refrigerante",
    valor: 8
  },
  {
    name: "Manteiga",
    valor: 5
  }
];

const meuSaldo = 100;

function calculaSaldo(meuSaldo, lista) {
  return lista.reduce(function (prev, current, index) {
    console.log("rodada: ", index + 1);
    console.log({ prev });
    console.log({ current });
    return prev - current.valor;
  }, meuSaldo);
}

console.log(calculaSaldo(meuSaldo, lista));
