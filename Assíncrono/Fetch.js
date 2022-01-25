//O fetch retorna uma promise, por isso é possivel utilizar o encadiamento de then.
//Quando utilizado o fetch é necessario o uso do await.

fetch(url, options)
  .then(response => response.json())
  .then(json => console.log(json));
