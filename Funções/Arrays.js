//Nesse exemplo estamos utilizando spread, para que o parâmetro se encaixe na array inteira e não apenas no "x", nesse caso o "x, y, z" serão substituidos por "1, 2, 3".
//O spread é feito com o comando "..." inserido na função.
//É utilizado quando você chamando a função.
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

//Nesse caso estamos agrupando os itens em um array.
//Conforme mais argumentos são incrementados maior vai ficando a array.
//É utilizado quando você declarando a função.

function confereTamanho(...args) {
  console.log(args.length);
}

confereTamanho(); //0
confereTamanho(1, 2); //2
confereTamanho(3, 4, 5); //3
