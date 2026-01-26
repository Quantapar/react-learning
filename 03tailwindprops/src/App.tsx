import { Card } from "./components/Card";
function App() {
  return (
    <>
      <Card shoename="Nike Air Max" />
      <h1 className="bg-amber-100 rounded-2xl  text-black  p-4 mt-6 text-center mb-6 ">
        Tailwind Test
      </h1>
      <Card shoename="" />
    </>
  );
}

export default App;
