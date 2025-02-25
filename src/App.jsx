import { useEffect } from "react";
import Invoices from "./components/Invoices";
import { Routes, Route, useNavigate } from "react-router-dom";
import Demo from "./components/Demo";
import Reciept from "./components/Reciept";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => navigate("/demo"), []);

  return (
    <Routes>
      <Route path="/" element={<Invoices />}></Route>
      <Route path="/demo" element={<Demo />}></Route>
      <Route path="/reciept" element={<Reciept />}></Route>
    </Routes>

  );
};

export default App;


