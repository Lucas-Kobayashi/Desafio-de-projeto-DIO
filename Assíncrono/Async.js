//O javascript funciona de forma sincrona.
//Sempre que você quiser o resultado de uma promise é necessario usar o método await, para que esse possa ser processado.

async function resolvePromise() {
  const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve("Resolvido");
    }, 3000);
  });
  const resolved = await myPromise
    .then(result => result + "passando pelo then")
    .then(result => result + "passando pelo then")
    .catch(err => console.log(err.message));

  return resolved;
}
