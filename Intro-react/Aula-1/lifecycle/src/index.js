import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: 1000,
      copo: "água"
    };
  }

  alterarCopo = () => {
    this.setState({
      copo: "suco"
    });
  };

  render() {
    const { clock, copo } = this.state;

    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}>{copo}</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
