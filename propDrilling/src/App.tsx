import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Count count={count} />
      <Buttons count={count} setCount={setCount} />
    </>
  );
}
type count = {
  count: number;
};
type buttonCount = {
  count: number;
  setCount: (value: number | ((prev: number) => number)) => void;
};
function Count({ count }: count) {
  return <div>{count}</div>;
}
function Buttons({ count, setCount }: buttonCount) {
  return (
    <div>
      <button
        onClick={() => {
          setCount((p) => p + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((p) => p - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
