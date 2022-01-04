//Equivale a uma comparação (===).
//Sempre precisa de um valor default.
//É ideal quando é necessario comparar varios valores.

function getAnimal(id) {
  switch (id) {
    case 1:
      return "cão";
    case 2:
      return "gato";
    case 3:
      return "pássaro";
    default:
      return "peixe";
  }
}
