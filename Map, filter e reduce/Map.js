//Callback é a função executada em cada elemento.
//O argumento this "thisArg" é opcional.
//O map cria um novo array, e não modifica o anterior.

//array.map(callback, thisArg);
//callback(item, index, array);

const array = [1, 2, 3, 4, 5];
array.map(item => item * 2);
