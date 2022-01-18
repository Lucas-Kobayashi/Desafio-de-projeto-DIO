## Módulos

São arquivos que tem a capacidade de importar e exportar arquivos do mesmo tipo.
É utilizado para você organizar melhor seus códigos, sendo que com essa técnica você pode separar um arquivo apenas com váriaveis, outro com funções, manipular funções...
Existem duas técnicas para exportar esses arquivos a named export e a default export.
Só é possível usar um default export por arquivo, e ele vai se tornar o retorno padrão do arquivo.

## Atividade

Esta atividade tem como objetivo que você veja **no console do seu navegador** como os módulos funcionam.

1. Instale a extensão "Live Server" no seu VSCode;
2. Crie um arquivo com uma estrutura HTML padrão;
3. Crie dois arquivos `.js` ou `.mjs`, um chamado `funcoes` e outro chamado `main`;
4. No arquivo `funcoes`:
   1. Crie uma função chamada `mostraIdade`, que recebe `nome` e `idade` e retorna a string: `A idade de ${nome} é ${idade}`;
   2. Siga o mesmo padrão para outras funções como `mostraCidade` e `mostraHobby`;
   3. Exporte estas funções.
5. No arquivo `main`:
   1. Importe as funções do arquivo `funcoes`;
   2. Faça a chamada de todas elas;
6. Utilizando a extensão "Live Server", abra o seu navegador e veja no console que as informações foram logadas corretamente.
