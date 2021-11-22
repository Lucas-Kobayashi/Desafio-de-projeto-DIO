function comparaNumeros(num1, num2) {
  const saoIguais = num1 === num2;
  const soma = num1 + num2;

  //Utilização de "if" ternario ao invés de if else comum
  //A primeira parter antes da interrogação deve ser verdadeira
  //Apos a interrogação vem o que deve ocorrer se for true (if) e após os dois pontos o false (else)
  // (Condição) ? (Expr1) : (Expr2);
  return saoIguais ? 'São iguais' : 'Não são iguais';
}
