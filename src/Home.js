import React, { useState, useMemo } from "react";

function Home() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(0);
  const [color, setColor] = useState("yellow");

  const multiplication = useMemo(() => {
    console.log("Multiplication called");
    return num1 * num2;
  }, [num1, num2]);

  // console.log(multiplication);

  function addition() {
    console.log("Additional called");
    setSum(num1 + num2);
  }

  function toggleColor() {
    console.log("toggle called");
    setColor(color === "yellow" ? "initial" : "yellow");
  }

  return (
    <div className="memo">
      <input
        type="number"
        value={num1}
        onChange={(event) => setNum1(event.target.value)}
      />
      <br />
      <input
        type="number"
        value={num2}
        onChange={(event) => setNum2(event.target.value)}
      />
      <div>Multiplication: {multiplication}</div>
      <div>Addition: {sum}</div>
      <br />
      <input type="button" value="Add" onClick={() => addition()} /> <br />
      <input
        type="button"
        value="toggle color"
        style={{ backgroundColor: color }}
        onClick={(event) => {
          toggleColor();
        }}
      />
    </div>
  );
}

export default Home;
