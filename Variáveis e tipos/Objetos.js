//Conhecido como estrutura tipo "chave e valor".
//Para declarar um objeto você deve utilizar a declaração de variável e utilizar o "{}".
//Se utilizar o nome da variável e ".chave de escolha" ele exibe apenas o conteudo daquela chave, o mesmo é valido para "["chave de escolha"]".

let obj = {};

console.log(typeof obj);

obj.name = "Clara";

console.log(obj);

obj.age = 26;

console.log(obj);

console.log(Object.keys(obj));

let person = {
  name: "Luisa",
  age: 18,
  adress: "Rua da casa dela"
};

console.log(person);

console.log(person.name);

console.log(person["name"]);

person["numberOfSiblings"] = 2;

console.log(person);
