# Coleções

### Map

É uma coleção de arrays que são dadas no formato [chave, valor].
Pode ser iterado por um loop for... of.
Maps podem utilizar chave de qualquer tipo.
Possuem a propriedade leght.
Mais simples de iterar.
Utilizado quando os valores das chaves são desconhecidos.
Os valores são do mesmo tipo.

### Set

O set ao contrário do array não aceita a repetição de valores.
Não se usa length e sim size.
Não possui vários métodos que temos nos arrays como map,filter,reduce etc.

## Atividades

### Atividade 1: Maps

Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

1. Crie uma função `getAdmins` que recebe um `Map`;
2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
3. Dentro de `getAdmins`, utilize o loop `for...of` para retornar uma lista com os nomes dos usu;arios que são administradores.

### Atividade 2: Sets

Dado o array `[30, 30, 40, 5, 223, 2049, 3034, 5]`, retorne outro array apenas com valores únicos.
