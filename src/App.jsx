import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div className="app"></div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
