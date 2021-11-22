#Varipaveis e tipos

##Variáveis

<p align="center">
<img src="assets/var,const,let.png">
</p>

####variaveis.js
As variaveis sempre devem usar camelCase (valido para var e let).
O let é entendido somente dentro do seu espaço, ou seja por exemplo se um let for declarado fora do if se eu tentar reatribuir ele dentro do if ele não funcionara, já que ele nem foi criado dentro do if.
Hoisting funciona, porém ele só cria var, e não let
Boas praticas indicam o uso do let mais que o var.

####consantes.js
Constantes não podem ser reatribuidas, elas seguem o seu nome declarado até o final da sua vida.
Constantes não aceitam o hoisting, já que o hoisting só cria (var) e não const.
const são sempre declaradas com UPPER_SNAKE_CASE.
