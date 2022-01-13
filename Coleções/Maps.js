//É uma coleção de arrays que são dadas no formato [chave, valor].
//Pode ser iterado por um loop for... of.
//Maps podem utilizar chave de qualquer tipo.
//Possuem a propriedade leght.
//Mais simples de iterar.
//Utilizado quando os valores das chaves são desconhecidos.
//Os valores são do mesmo tipo.

const myMap = new Map();

myMap.set("Parati", "Veículo");
// Map (1) {"Parati" => Veículo}

myMap.get("Parati");
// "Veículo"

myMap.delete("Parati");
// true

myMap.get("Parati");
// undefined
