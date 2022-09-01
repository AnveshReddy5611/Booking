import "./App.css";
import Login from "./login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Adminlogin from "./adminlogin";
import AdminHome from "./adminHome";
import Inputs from "./inputs";
import Home from "./Home";
import Userlogin from "./userlogin";
import Register from "./register";

function App() {
  
  
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/adminHome" element={<AdminHome />}>
            <Route path="src/inputs" element={<Inputs />} />
          </Route>
          <Route path="Home" element={<Home />}></Route>
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
