# Funções

## Tipos de funções

### Função

A estrutura básica de uma função é "function nome(parametro){}" o parametro não é obrigatório.
As variáveis criadas dentro da função só podem ser utilizadas dentro dela.
O "return" é utilizado para terminar a função naquele local.
Sempre que uma função está dentro de um objeto, ela deve ser chamada de método.

#### Função anônima

As funções anônimas não tem nome e são utilizadas em variáveis.
Por não ter nome declarado ela ganha esse nome de função anônima.
Se os valores de "a" e "b" fossem declarados o return daria a soma dos dois.

#### Função autoinvocável

Funções autoinvocáveis são declaradas dentro de parenteses e não precisam de nome, são basicamente funções anônimas com um parenteses no final.
Também podem receber parâmetros.
Pode ser armazenada dentro de uma variável.

#### Calbacks

Basicamente funções passadas como argumentos para outras funções.

## Parâmetros

### Valores padrão

Hoje em dia é mais facil declarar um valor padrão sem precisar usar "if". Para a declaração simplesmente declaramos o valor padrão na função, como nesse caso foi definido o valor "1".

### Arguments

Um array que contém todos os parametros de quando a função foi invocada.

### Arrays

#### Spread

Nesse exemplo estamos utilizando spread, para que o parâmetro se encaixe na array inteira e não apenas no "x", nesse caso o "x, y, z" serão substituidos por "1, 2, 3".
O spread é feito com o comando "..." inserido na função.
É utilizado quando você chamando a função.

#### Rest

Nesse caso estamos agrupando os itens em um array.
Conforme mais argumentos são incrementados maior vai ficando a array.
É utilizado quando você declarando a função.

### Loops

#### If e else

A primeira declaracão, a que está dentro do if ocorre caso a sua condição seja verdadeira, se não for o caso o programa prossegue para o else.
Você consegue armazenar condicionais dentro de variáveis.
O uso do else não é obrigatório.

#### Switch

Equivale a uma comparação (===).
Sempre precisa de um valor default.
É ideal quando é necessario comparar varios valores.

#### For

É um loop dentro de elementos iteráveis (arrays, strings).

#### While

Executa a instrução até que a condição seja falsa.
O "do while" força a sua execução pelo menos uma vez.

#### This

<p align="center">
<img src="/assets/this.png">
</p>

O método "this" é utilizado para se referir a algo dentro de um objeto.

Funções dentro do This são:

Call

O "call" é utilizado para poder chamar a função que você deseja que o "this" se aplique.

Apply

Os argumentos do "apply" tem que ser passados dentro de um array.
Se não dor utilizado um argumento o seu uso é muito similar ao call.

Bind

"bind" funciona clonando a estrura da função onde você utilizou ele.

#### Arrow Functions

Arrow function é utilizado para diminuir a quantidade de código que precisa ser escrito para declarar uma variável.
Se for uma função bem pequena não é necessario nem o uso do return.
Caso a função vá receber apenas um parâmetro não é necessario o uso de parênteses.
Não faz hoisting.

## Atividades

### Atividade 1: Alunos Aprovados

1. Crie uma função que recebe o array `alunos` e um número que irá representar a média final;
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

### Atividade 2: This

Dada a função `calculaIdade`, utilize os métodos call e apply para modificar o valor de `this`. Crie seus próprios objetos para esta atividade!

```js
function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}
```
