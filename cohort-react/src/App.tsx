import React from "react";
import { useState } from "react";

type HeaderProps = {
  title: string | number;
};
import Tester from "./Hooks";
// normal way , both child of the componenet re render , even tho the prop of only one is changing

// function Header({ title }: HeaderProps) {
//   return (
//     <>
//       <div>my name is {title}</div>
//     </>
//   );
// }

// function App() {
//   const [title, setTitle] = useState<string | number>("manu");
//   function updateMytitle() {
//     setTitle(Math.random());
//   }
//   return (
//     <>
//       <button onClick={updateMytitle}>update the title </button>
//       <Header title={title} />
//       <Header title={"manu"} />
//     </>
//   );
// }

// function HeaderWithButton() {
//   const [firstTitle, setFirstTitle] = useState<string | number>("manu sharma");

//   function updateMytitle() {
//     setFirstTitle(Math.random());
//   }

//   return (
//     <>
//       <button onClick={updateMytitle}>Click me to change the title</button>
//       <Header title={firstTitle} />
//     </>
//   );
// }
// function Header({ title }: HeaderProps) {
//   return (
//     <>
//       <div>My name is {title}</div>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <HeaderWithButton />
//       <Header title={"manu"} />
//     </>
//   );
// }

// this is how to optimize for re renders by splitting the components, the other way is
//  We optimized re-renders by splitting state logic from display logic, so only the parts that depend on state need to re-render

// now doing the same using react memo
const Header = React.memo(function Header({ title }: HeaderProps) {
  console.log("rerender");
  return (
    <>
      <div>my name is {title}</div>
    </>
  );
});

function App() {
  const [title, setTitle] = useState<string | number>("manu");
  function updateMytitle() {
    setTitle(Math.random());
  }
  return (
    <>
      <button onClick={updateMytitle}>update the title </button>
      <Header title={title} />
      <Header title={"manu"} />
      <Header title={"manu"} />
      <Header title={"manu"} />
      <Header title={"manu"} />
      <Header title={"manu"} />
      <Tester />
    </>
  );
}
export default App;
