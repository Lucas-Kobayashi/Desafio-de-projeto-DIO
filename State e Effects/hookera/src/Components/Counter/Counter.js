function Counter() {
  let quantity = 10;

  function Add() {
    quantity = quantity + 1;
    document.getElementById("counter-box").innerHTML = quantity;
  }

  return (
    <>
      <h1 id="counter-box">{quantity}</h1>
      <button onClick={Add}>Aumentar</button>
    </>
  );
}

export default Counter;
