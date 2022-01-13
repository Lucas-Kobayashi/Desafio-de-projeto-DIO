//O set ao contrário do array não aceita a repetição de valores.
//Não se usa length e sim size.
//Não possui vários métodos que temos nos arrays como map,filter,reduce etc.

const myArray = [1, 3, 5, 6, 7, 5, 3, 1];

const mySet = new Set(myArray);

console.log(mySet);

const superSet = new Set();

superSet.add(1);
superSet.add(3);
// vai adicionar os valores acima

superSet.has(1);
// true

superSet.has(2);
// false

superSet.delete(1);
