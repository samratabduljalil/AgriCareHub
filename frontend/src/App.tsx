
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Medication from './Pages/Medication'
import Demo from './Pages/Demo'
import ImageUploader from './Pages/ImageUploader';
import Admin from './Pages/Admin'
import UpMedication from './Pages/UpMedication'
import ChoseCrop from './Pages/ChoseCrop'
import UserDashboard from './Pages/UserDashboard'
import Signup from './Pages/Signup'
import DumyHome from './Pages/DumyHome'
import Login from './Pages/Login'
import UserSignup from './Pages/UserSignup'
import UserLogin from './Pages/UserLogin'
import Wheat from './Pages/Wheat'
import Rice from './Pages/Rice'
import Potato from './Pages/Potato'
import Corn from './Pages/Corn'
import UpdateMedication from './Pages/UpdateMedication'

function App() {


  return (
    <>


      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Medication" element={<Medication />} />
          <Route path="/Demo" element={<Demo />} />
          <Route path="/ImageUploader" element={<ImageUploader />} />
          <Route path="/AdminDashboard" element={<Admin />} />
          <Route path="/UpMedication" element={<UpMedication />} />
          <Route path="/ChoseCrop" element={<ChoseCrop />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/DumyHome" element={<DumyHome />} />
          <Route path="/AdminLogin" element={<Login />} />
          <Route path="/UserSignup" element={<UserSignup />} />
          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="/Wheat" element={<Wheat />} />
          <Route path="/Rice" element={<Rice />} />
          <Route path="/Potato" element={<Potato />} />
          <Route path="/Corn" element={<Corn />} />
          <Route path="/UpdateMedication" element={<UpdateMedication />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
