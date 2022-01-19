function validaArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError("Envie outro parâmetro");

    if (typeof arr !== "object")
      throw new TypeError("Array precisa ser um objeto");

    if (typeof num !== "number")
      throw new TypeError("Num precisa ser um número");

    if (arr.length !== num) throw new RangeError("Tamanho inválido");

    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este erro é um reference error");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Este erro é um type error");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Este erro é um range error");
      console.log(e.message);
    } else {
      console.log("Este erro não era esperado: " + e);
    }
  }
}

console.log(validaArray([1, 3, 5], 3));
