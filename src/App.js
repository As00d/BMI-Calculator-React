import { useState } from "react";
import "../src/index.css";
function App() {
  return (
    <>
      <CalculatorInterface />
    </>
  );
}

function CalculatorInterface() {
  const [weight, setWeight] = useState(48);
  const [height, setHeight] = useState(160);
  const [bmi, setBmi] = useState(18.75);
  const [status, setStatus] = useState("Normal Weight 😀");

  const calculateBMI = function (height, weight) {
    return ((weight / height ** 2) * 10000).toFixed(2);
  };

  const calculateStatus = function (value) {
    if (value < 18.5) {
      return "Under Weight 🥹";
    } else if (value > 18.5 && value <= 25) {
      return "Normal Weight 😀";
    } else if (value > 25 && value <= 30) {
      return "Over Weight 😩";
    } else if (value > 30) {
      return "Obese 😨";
    }
  };

  function handleClick(e) {
    e.preventDefault();
    if (!weight || !height) {
      return;
    }
    const bmiCalc = calculateBMI(height, weight);
    console.log(bmiCalc);
    setBmi(bmiCalc);
    const statusCalc = calculateStatus(bmiCalc);
    console.log(statusCalc);
    setStatus(statusCalc);
  }

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="calculatorHead">BMI Calculator 📝</h1>
        <form>
          <p className="text">Weight (kg)</p>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(+e.target.value)}
            className="inputField"
          ></input>
          <p className="text">Height (cm)</p>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(+e.target.value)}
            className="inputField"
          ></input>
        </form>
        <div className="information">
          <button onClick={handleClick}>Calculate</button>
          <h3 className="bmi">Your BMI: {bmi}</h3>
          <h4 className="bmi">Status: {status}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
