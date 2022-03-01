import { useState } from "react";

function SmartCouner() {
  const [quantity, add] = useState(0);

  return (
    <>
      <h1>{quantity}</h1>
      <button onClick={() => add(quantity + 1)}>Aumentar</button>
    </>
  );
}

export default SmartCouner;
