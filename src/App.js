import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  return (
    <div className= "app">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dash" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
