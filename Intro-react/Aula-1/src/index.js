import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function sum(a, b) {
  return a + b;
}

function primeiroJSX() {
  return (
    <div>
      Lucas
      <h1>Soma: {sum(10, 50)}</h1>
    </div>
  );
}

const App = () => {
  return <div className="App">{primeiroJSX()}</div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
