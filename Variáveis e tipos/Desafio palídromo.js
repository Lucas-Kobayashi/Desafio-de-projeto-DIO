//Receber uma string e verificar se ela é um palídromo.
//Solução 1
//Função ".split" separa as letras e transforma a string em array.
//".reverse" coloca as letras de trás para a frente.
//".join" junta as letras e a transforma novamente em uma string, não foi colocado nada entre os parenteses para que não entre nenhum carácter entre as letras que estavam separadas.
function verificaPalidromo(string) {
  if (!string) return "String inexistente";

  return string.split("").reverse().join("") === string;
}

console.log(verificaPalidromo("mirim"));

//Solução 2
function verificaPalidromo2(string) {
  if (!string) return "String inexistente";

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.lenght - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(verificaPalidromo2("ana"));
