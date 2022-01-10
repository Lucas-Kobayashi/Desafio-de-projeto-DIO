//Sempre que uma função está dentro de um objeto, ela deve ser chamada de método.
//O método "this" é utilizado para se referir a algo dentro de um objeto.

const pessoa = {
  firstName: "Clara",
  lastName: "VW",
  id: "1",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  getId: function () {
    return this.id;
  }
};

pessoa.fullName();

console.log(pessoa.fullName());

//Função Call
//O "call" é utilizado para poder chamar a função que você deseja que o "this" se aplique.

const person = {
  nome: "Iris"
};

const animal = {
  nome: "Stela"
};

function getSomething() {
  console.log(this.nome);
}

getSomething.call(animal);

//

const myObj = {
  num1: 2,
  num2: 3
};

function soma(a, b) {
  console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 8, 3);

//Apply
//Os argumentos do "apply" tem que ser passados dentro de um array.
//Se não dor utilizado um argumento o seu uso é muito similar ao call.

const myObjt = {
  num1: 2,
  num2: 3
};

function soma(a, b) {
  console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObjt, [8, 3]);

//Bind
//"bind" funciona clonando a estrura da função onde você utilizou ele.

const retornaNomes = function () {
  return this.nome;
};

let bruno = retornaNomes.bind({ nome: "Bruno" });

console.log(bruno());
