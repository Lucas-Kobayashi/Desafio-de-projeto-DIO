function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const pessoa1 = {
  nome: "Marcio",
  idade: 32
};

const pessoa2 = {
  nome: "Zuleide",
  idade: 20
};

console.log(calculaIdade.call(pessoa1, 10));

console.log(calculaIdade.apply(pessoa2, [15]));
