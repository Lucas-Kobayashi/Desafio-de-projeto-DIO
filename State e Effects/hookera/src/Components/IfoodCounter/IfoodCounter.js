import React, { useState, useEffect } from "react";
import "../IfoodCounter/IfoodCounter.css";

export default function IfoodCounter() {
  const [value, setValue] = useState(0);
  const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");

  useEffect(() => {
    alert("componente montado");
  });

  function add() {
    setValue(value + 1);
    setButtonStyle("counter-button-minus-active");
  }

  function sub() {
    if (value <= 1) {
      setButtonStyle("counter-button-minus-desactive");
    }

    if (value > 0) {
      setValue(value - 1);
    }
  }

  return (
    <div className="counter-wrapper">
      <button className={buttonStyle} onClick={sub}>
        -
      </button>
      <p>{value}</p>
      <button className="counter-button-plus-active" onClick={add}>
        +
      </button>
      <button>15,00</button>
    </div>
  );
}
