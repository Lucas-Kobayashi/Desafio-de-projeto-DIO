//String são variáveis que devem ser declaradas entre aspas ou crases.
//É possível colocar variáveos dentro da string desde que use "${}".
//Pode se concatenar duas strings utilizando "concatenado = variavel1.concat(variavel2)", mas também pode ser usado "concatenado = variavel1 + variavel2".
//Outra forma de concaternar é "`concatenando = ${variavel1} ${variavel2}`", quando usasdo esse método com crase ele copia exatamente a forma com que você escreveu, ou seja onde tiver espaço vai ter espaço e se pular a linha ela também sera pulada na variável.
//A propriedade string tem dezenas de métodos, para saber mais sobre ele olhe a documentação do javascript.

let nome = "Clara";
let sobrenome = "Kobayashi";

let concatenado = nome.concat(sobrenome);

console.log(concatenado);
