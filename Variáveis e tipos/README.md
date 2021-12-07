# Variaveis e tipos

## Variáveis

<p align="center">
<img src="/assets/var,const,let.png">
</p>

Redeclarar: declarar novamente no código o valor da variável.
Reatribuir: você pode atribuir um novo valor para essa variável dentro do seu programa, ou seja se voce declarou uma variável como 0 você pode atribuir um novo valor para ela.
Hoisting: pode ser usado somente com var, onde voce pode simplesmente atribuir uma variável sem ter que declara-lá.

#### variaveis.js

As variaveis sempre devem usar camelCase (valido para var e let).
O let é entendido somente dentro do seu espaço, ou seja por exemplo se um let for declarado fora do if se eu tentar reatribuir ele dentro do if ele não funcionara, já que ele nem foi criado dentro do if.
Hoisting funciona, porém ele só cria var, e não let
Boas praticas indicam o uso do let mais que o var.

#### consantes.js

Constantes não podem ser reatribuidas, elas seguem o seu nome declarado até o final da sua vida.
Constantes não aceitam o hoisting, já que o hoisting só cria (var) e não const.
const são sempre declaradas com UPPER_SNAKE_CASE.

## Tipos

#### Estrutura de dados

Javascript tem tipagem dinâmica e fraca, suas variáveis não precisam ser especificadas. Ou seja quando eu registrar uma variável nova ela vai ser automaticamente definida como string, numérico, boolean...
Você pode alterar o tipo da sua variável dentro do seu programa, é só reatribuir um valor a ela.
Para descobrir qual o tipo da sua variável é só utilizar o comando typeof.

#### String

String são variáveis que devem ser declaradas entre aspas ou crases.
É possível colocar variáveos dentro da string desde que use "sifrão{}".
Pode se concatenar duas strings utilizando "concatenado = variavel1.concat(variavel2)", mas também pode ser usado "concatenado = variavel1 + variavel2".
Outra forma de concaternar é "concatenando = sifrão{variavel1} ${variavel2}", quando usasdo esse método com crase ele copia exatamente a forma com que você escreveu, ou seja onde tiver espaço vai ter espaço e se pular a linha ela também sera pulada na variável.
A propriedade string tem dezenas de métodos, para saber mais sobre ele olhe a documentação do javascript.

Disclaimer: Quando escrevo sifrão na verdade quero dizer o simbolo $.

#### Números

Para declarar numeros em uma variável é somente não utilizar aspas.
Existe o objeto "math" que tem diversos métodos e que podem ser encotrados na documentação do javascript.
Para poder fazer o uso de porcentagem é necessario realizar uma string ou a concatenação de um numero com string "variavelPorcentagem = valorPorcentagem + "%"".

#### Boolean

Boolean é usado como um verdadeiro ou falso.
Se declarado uma variável com comparação ela já vai ser considerada um boolean altumaticamente pelo javascript.
Se você colocar um "!" antes da variável desejada ele vai inveter esse valor.

### Array

São listas interaveis de elementos, você consegue ver o tamanho da array assim como uma leght de um item.
sempre que usado push o valor inserido vai para o final da array.
Para retirar algum item do final da array pode usar o ".pop".
O comando shift e unshift se referem ao comeco da lista, shift colocando o valor e unshift retirando.

### Objetos

Conhecido como estrutura tipo "chave e valor".
Para declarar um objeto você deve utilizar a declaração de variável e utilizar o "{}".
Se utilizar o nome da variável e ".chave de escolha" ele exibe apenas o conteudo daquela chave, o mesmo é valido para "["chave de escolha"]".

### Empty, Undefined e Null

Todos são contrarios a true.

#### Empty

O valor empty é algo vazio, como uma variável sem ter nada declarado.

#### Undefined

O undefined é algo que nunca foi declarado.

#### Null

O null é quando você propositalmente usa um objeto, variável ou valor que não existem.
Valores null não são verdadeiros nem falsos.
