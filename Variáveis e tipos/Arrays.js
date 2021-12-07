//São listas interaveis de elementos, você consegue ver o tamanho da array assim como uma leght de um item.
//sempre que usado push o valor inserido vai para o final da array.
//Para retirar algum item do final da array pode usar o ".pop".
//O comando shift e unshift se referem ao comeco da lista, shift colocando o valor e unshift retirando.

let array = [];

array.push(3);

console.log(array);

array.push(5);

console.log(array);

array.pop();

console.log(array);

array.push(5);

array.push(8);

console.log(array);

array.shift(3);

console.log(array);

array.unshift(3);

console.log(array);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
