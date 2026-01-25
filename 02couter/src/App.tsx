import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter((prev) => prev + 1); // also you can setcounter(counter +1) instead of this
  };

  const removeValue = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}> Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
