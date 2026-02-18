import { memo, useState } from "react";

type ChildProps = {
  logSomething: () => void;
};

export function App() {
  const [count, setCount] = useState(0);

  function logSomething() {
    console.log("child clicked");
  }

  return (
    <>
      <Child logSomething={logSomething} />

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button>
    </>
  );
}

const Child = memo(({ logSomething }: ChildProps) => {
  console.log("child rendered");

  return (
    <div>
      <button onClick={logSomething}>Button Clicked</button>
    </div>
  );
});

export default App;
