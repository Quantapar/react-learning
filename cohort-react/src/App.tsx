import { useState } from "react";

type HeaderProps = {
  title: string | number;
};

function HeaderWithButton() {
  const [firstTitle, setFirstTitle] = useState<string | number>("manu sharma");

  function updateMytitle() {
    setFirstTitle(Math.random());
  }

  return (
    <>
      <button onClick={updateMytitle}>Click me to change the title</button>
      <Header title={firstTitle} />
    </>
  );
}

function Header({ title }: HeaderProps) {
  return (
    <>
      <div>My name is {title}</div>
    </>
  );
}

function App() {
  return (
    <>
      <HeaderWithButton />
      <Header title={"manu"} />
    </>
  );
}

export default App;
