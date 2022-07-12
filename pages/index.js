import React, { useState } from "react";

export default function index() {
  // initial state
  const [counter, setCounter] = useState(0);
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);

  // handle counter
  const handleCounter = (operator) => {
    if (numberOne !== 0 || numberTwo !== 0)
      if (operator == "+") {
        setCounter(numberOne + numberTwo);
      } else if (operator == "-") {
        setCounter(numberOne - numberTwo);
      } else if (operator == "x") {
        setCounter(numberOne * numberTwo);
      } else {
        setCounter(numberOne / numberTwo);
      }
  };

  return (
    <div>
      <h1 data-testid="title">Simple Calculator</h1>

      <h1 data-testid="result">{counter}</h1>

      <input
        data-testid="input-num1"
        placeholder="Number 1"
        type="number"
        onChange={(e) => {
          setNumberOne(parseInt(e.target.value));
        }}
      />
      <br />
      <input
        data-testid="input-num2"
        placeholder="Number 2"
        type="number"
        onChange={(e) => {
          setNumberTwo(parseInt(e.target.value));
        }}
      />

      <br />

      <button data-testid="button-add" onClick={() => handleCounter("+")}>
        +
      </button>

      <button data-testid="button-min" onClick={() => handleCounter("-")}>
        -
      </button>

      <button data-testid="button-mul" onClick={() => handleCounter("x")}>
        *
      </button>

      <button data-testid="button-dis" onClick={() => handleCounter("/")}>
        /
      </button>
    </div>
  );
}
