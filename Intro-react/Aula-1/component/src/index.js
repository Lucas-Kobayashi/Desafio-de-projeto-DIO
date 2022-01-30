import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Button from "./Button";
import Component1 from "./Component1";
import Component2 from "./Component2";

function soma(a, b) {
  alert(a + b);
}

function App() {
  return (
    <div className="App">
      Hello World
      <Button onClick={() => soma(20, 35)} name="Lucas Kobayashi" />
      <Component1>
        <Component2>
          <Button onClick={() => soma(30, 35)} name="Berimbau cantou" />
        </Component2>
      </Component1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
