import { useState } from "react";
import Todo from "./Todo";
function App() {
  const [buttonId, setButtonId] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setButtonId(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setButtonId(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setButtonId(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setButtonId(4);
        }}
      >
        4
      </button>
      <Todo id={buttonId} />
    </>
  );
}

export default App;
