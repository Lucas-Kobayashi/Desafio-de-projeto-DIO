//O throw apresenta um texto próprio de erro, até apresentando a string pedida, porém tratando o caso como um erro real. Ao contrario do return que apenas apresentaria a string.

function verificaPalidromo(string) {
  if (!string) throw "String inválida";

  return string === string.split("").reverse().join("");
}

verificaPalidromo("");
