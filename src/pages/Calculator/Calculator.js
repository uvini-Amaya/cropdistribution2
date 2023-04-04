import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./Calculator.css";

import { Button } from "react-bootstrap";


export default function Calculator() {
  const [display, setDisplay] = useState("");
  const [expression, setExpression] = useState([]);

  const handleClick = value => {
    setDisplay(value);
    setExpression([...expression, value]);
  };

  const handleResult = () => {
    const result = expression
      .join("")
      .split(/(\D)/g)
      .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "x":
            return (acc = acc * array[index + 1]);
          case "÷":
            return (acc = acc / array[index + 1]);
          default:
            return acc;
        }
      });
    setDisplay(result);
    setExpression("");
  };

  return (
    <div className="App">
      <h3 className="display">{display}</h3>

      <span className="expression">{expression}</span>

      <div className="panel">
        <div className="numbers">
          <Button className="btn5" onClick={() => handleClick(7)}>7</Button>
          <Button className="btn5" onClick={() => handleClick(8)}>8</Button>
          <Button className="btn5" onClick={() => handleClick(9)}>9</Button>
          <Button className="btn5" onClick={() => handleClick("÷")}>÷</Button>
        </div>
        <div className="numbers">
          <Button className="btn5" onClick={() => handleClick(4)}>4</Button>
          <Button className="btn5" onClick={() => handleClick(5)}>5</Button>
          <Button className="btn5" onClick={() => handleClick(6)}>6</Button>
          <Button className="btn5" onClick={() => handleClick("x")}>x</Button>
        </div>
        <div className="numbers">
          <Button className="btn5" onClick={() => handleClick(1)}>1</Button>
          <Button className="btn5" onClick={() => handleClick(2)}>2</Button>
          <Button className="btn5" onClick={() => handleClick(3)}>3</Button>
          <Button  className="btn5" onClick={() => handleClick("+")}>+</Button>
        </div >
        <div className="numbers2">
          <Button className="btn6" onClick={() => handleClick(0)}>0</Button>
          <Button className="btn6" onClick={() => handleClick("-")}>-</Button>
          <Button className="btn6" onClick={() => handleResult()}>=</Button>  
        </div>

        {/* <div className="operators">
          <button onClick={() => handleClick("÷")}>÷</button>
          <button onClick={() => handleClick("x")}>x</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleResult()}>=</button>
        </div> */}
      </div>
    </div>
  );
}


