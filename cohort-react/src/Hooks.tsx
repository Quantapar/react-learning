import { useState, useEffect } from "react";
// Use state and use Effecct
export default function Tester() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("count changed");
  }, []);

  function increaseCount() {
    setCount((p) => p + 1);
  }
  function decreaseCount() {
    setCount((p) => p - 1);
  }
  return (
    <>
      <div>Count : {count}</div>
      <button onClick={increaseCount}>increaseCount</button>
      <button onClick={decreaseCount}>decreaseCount</button>
    </>
  );
}
