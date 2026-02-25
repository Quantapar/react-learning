import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./componenets/Dashboard";
import Landing from "./componenets/Landing";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
