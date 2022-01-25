//Promises são objetos assíncronos.
//Esses objetos podem ser resolvidos ou rejeitados.
//Primises tem três estágios pending, fulfilled e rejected.

const myPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve(console.log("Resolvido"));
  }, 2000);
});
