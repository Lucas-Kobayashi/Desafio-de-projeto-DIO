//As variaveis sempre devem usar camelCase (valido para var e let).
//O let é entendido somente dentro do seu espaço, ou seja por exemplo se um let for declarado fora do if se eu tentar reatribuir ele dentro do if ele não funcionara, já que ele nem foi criado dentro do if.
//Hoisting funciona, porém ele só cria var, e não let
//Boas praticas indicam o uso do let mais que o var.

var firstName = "Clara";
var lastName = "Kobayashi";

if (firstName === "Clara") {
  var firstName = "Sasa";
  let lastName = "Carmo";
}

console.log(firstName, lastName);
