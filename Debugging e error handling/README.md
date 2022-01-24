## Erros e debugging

### Throw

O throw apresenta um texto próprio de erro, até apresentando a string pedida, porém tratando o caso como um erro real. Ao contrario do return que apenas apresentaria a string.

### Try...catch

O try catch assim como o nome sugere tenta primeiro executar algo se não ele "pega" o erro.
Ao utilizar o "e" no console log o erro aparece como um aviso no console do seu navegador.
Podemos utilizar a propriedade finally para ser um ultimo recurso, ela vai ser executada independentemente do try ou do cath terem sido executados, e pode ser utilizada como uma verificação.

### Principais erros

#### ECMAScript error

São os erros que ocorrem durante a execução do código.
Estes erros são compostos por mensagens, nomes, linhas e até call stacks.

#### DOMException

Erros relacionados a códigos que estão sendo apresentados na web.
Esses erros assim como sugerem são oriundos do DOM.

## Atividade: validação de erros por tipo

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

- Crie uma função que recebe um array e um número
- Realize as seguintes validações
  - Se os parâmetros não forem enviados, lance um erro do tipo `ReferenceError`
  - Se o array não for do tipo 'object', lance um erro do tipo `TypeError`
  - Se o número não for do tipo 'number', lance um erro do tipo `TypeError`
  - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo `RangeError`
- Utilize a declaração `try...catch`
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador `instanceof`

## Links Auxiliares

- [Objeto Error](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [instanceof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof)
- [typeof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof)
- [try...catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)
