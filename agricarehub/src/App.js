import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Login from "./Components/UserAuthentication/Login";
import Signup from "./Components/UserAuthentication/Signup";
import Home from "./Components/UserAuthentication/Home";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    
    <Router>
      
      <Routes>
        
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
        
      
    </Router>
  );
}

export default App;