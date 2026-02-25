import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./componenets/Dashboard";
import Landing from "./componenets/Landing";

export function App() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Landing PAge
        </button>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div>
      {/* <div>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Landing Page
        </button>
        <button
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
          Dashboard Page
        </button>
      </div> */}{" "}
      {/* wrong way to do client side routing in react as it ask for the whole html
      csss and js from the backend as the whole bundle this is same as opening
      up the page in the new tab */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </>
  );
}

export default App;
