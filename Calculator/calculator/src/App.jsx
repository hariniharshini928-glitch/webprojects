import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const buttons = [
    "C", "⌫", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  const handleClick = (value) => {
    if (value === "C") {
      setDisplay("");
    } 
    else if (value === "⌫") {
      setDisplay(display.slice(0, -1));
    } 
    else if (value === "=") {
      try {
        const expression = display
          .replace(/×/g, "*")
          .replace(/÷/g, "/")
          .replace(/%/g, "/100");

        setDisplay(String(eval(expression)));
      } catch {
        setDisplay("Error");
      }
    } 
    else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator-page">

      <div className="calculator">

        <div className="calculator-header">
          <h2>Calculator</h2>
          <p>React Calculator</p>
        </div>

        <div className="display">
          {display || "0"}
        </div>

        <div className="buttons">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={
                button === "="
                  ? "equal"
                  : ["+", "-", "×", "÷", "%"].includes(button)
                  ? "operator"
                  : button === "C"
                  ? "clear"
                  : ""
              }
              onClick={() => handleClick(button)}
            >
              {button}
            </button>
          ))}
        </div>

      </div>

    </div>
  );
}

export default App;