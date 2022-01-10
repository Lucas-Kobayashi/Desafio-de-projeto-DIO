//Sempre que uma função está dentro de um objeto, ela deve ser chamada de método.
//O método "this" é utilizado para se referir a algo dentro de um objeto

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
