type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <>
      <div>title is {title}</div>
    </>
  );
}

function App() {
  return (
    <>
      <Header title={"manu"} />
      <Header title={"sharma"} />
    </>
  );
}

export default App;
