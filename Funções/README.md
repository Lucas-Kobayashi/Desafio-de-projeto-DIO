# Funções

## Tipos de funções

### Função

A estrutura básica de uma função é "function nome(parametro){}" o parametro não é obrigatório.
As variáveis criadas dentro da função só podem ser utilizadas dentro dela.
O "return" é utilizado para terminar a função naquele local.

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

### If e else

A primeira declaracão, a que está dentro do if ocorre caso a sua condição seja verdadeira, se não for o caso o programa prossegue para o else.
Você consegue armazenar condicionais dentro de variáveis.
O uso do else não é obrigatório.

### Switch

Equivale a uma comparação (===).
Sempre precisa de um valor default.
É ideal quando é necessario comparar varios valores.
