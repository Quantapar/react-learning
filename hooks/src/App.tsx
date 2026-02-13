//hooks - Special functions that let you use React features inside functional components
// useState - Creates state , Persists it between renders

import { useEffect, useState } from "react";

// useEffect lets you run side effects after React renders the component

// 1. No dependency array → runs after every render.
// 2. Empty dependency array [] → runs once after the first render.
// 3. With dependencies [value] → runs after first render and whenever any dependency changes.
// 4. CleanUp function  -> Before the effect runs again if the dependency changes and when the component unmounts

// mount - the first time comp renders on the page, after it can re render 10000 times but useEffect won't run

function App() {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("hello this is me ");
  }, [state]);

  function increase() {
    setState(state + 1);
  }
  return (
    <>
      <div>count : {state}</div>
      <br />
      <button onClick={increase}>Increase</button>
    </>
  );
}

export default App;
