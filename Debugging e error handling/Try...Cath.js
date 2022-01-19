//O try catch assim como o nome sugere tenta primeiro executar algo se não ele "pega"  o erro.
//Ao utilizar o "e" no console log o erro aparece como um aviso no console do seu navegador.
//Podemos utilizar a propriedade finally para ser um ultimo recurso, ela vai ser executada independentemente do try ou do cath terem sido executados, e pode ser utilizada como uma verificação.

function verificaPalidromo(string) {
  if (!string) throw "String inválida";

  return string === string.split("").reverse().join("");
}

function tryCathExemplo(string) {
  try {
    verificaPalidromo(string);
  } catch (e) {
    console.log(e);
  }
}
