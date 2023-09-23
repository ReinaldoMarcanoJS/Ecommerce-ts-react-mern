import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Register } from "./pages/auth/Register.jsx";
import { Login } from "./pages/auth/Login.jsx";
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
