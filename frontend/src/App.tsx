
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Medication from './Pages/Medication'
import Demo from './Pages/Demo'
import ImageUploader from './Pages/ImageUploader';
import Admin from './Pages/Admin'
import UpMedication from './Pages/UpMedication'
import ChoseCrop from './Pages/ChoseCrop'
import UserDashboard from './Pages/UserDashboard'

function App() {
  

  return (
    <>

  
<Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/About" element={<About/>} />
        <Route  path="/Medication" element={<Medication/>} />
        <Route  path="/Demo" element={<Demo/>} />
        <Route  path="/ImageUploader" element={<ImageUploader/>} />
        <Route  path="/Admin" element={<Admin/>} />
        <Route  path="/UpMedication" element={<UpMedication/>} />
        <Route  path="/ChoseCrop" element={<ChoseCrop/>} />
        <Route  path="/UserDashboard" element={<UserDashboard/>} />
        </Routes>
    </Router>
    </>
  )
}

export default App
