import "./App.css";
import EmployeeComponent from "./componets/EmployeeComponent";
import FooterComponent from "./componets/FooterComponent";
import HeaderComponet from "./componets/HeaderComponet";
import ListEmployeeComponet from "./componets/ListEmployeeComponet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponet />
        <Routes>
          <Route path="/" element={<ListEmployeeComponet />}></Route>
          <Route path="/employees" element={<ListEmployeeComponet />}></Route>
          <Route path="/add-employees" element={<EmployeeComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
