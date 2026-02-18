import { useMemo, useState } from "react";

//useMemo -> it memoize the value , it caches it , so we don't have to calcultate it everytime for the same input
export function App() {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);
  function increaseCounter() {
    setCounter((p) => p + 1);
  }
  const sum = useMemo(() => {
    let total = 0;
    for (let i = 1; i < number; i++) {
      total += i;
    }
    return total;
  }, [number]);

  return (
    <>
      <input
        type="number"
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
      />
      <br />
      <div>Sum is {sum}</div>
      <br />
      <button onClick={increaseCounter}>Counter {counter}</button>
    </>
  );
}

export default App;
