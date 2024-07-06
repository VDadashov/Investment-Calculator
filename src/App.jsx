import React from "react";
import Result from "./components/Result";
import UserInput from "./components/UserInput"
import Header from "./layout/Header"

function App() {

  const [userInput, setUserInput] = React.useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: Number(newValue),
    }));
  };

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Result input={userInput} />}
    </>
  );
}

export default App
