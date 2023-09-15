import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard.js";
import { Register } from "./pages/auth/Register.js";
import { Login } from "./pages/auth/Login.js";
function App() {
 
  return (
    <>
      <BrowserRouter>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />        
            <Route path="/login" element={<Login />} />        
          </Routes>
    

      </BrowserRouter>
    </>
  );
}

export default App;
