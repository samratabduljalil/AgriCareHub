
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Medication from './Pages/Medication'
import Demo from './Pages/Demo'


function App() {
  

  return (
    <>

  
<Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/About" element={<About/>} />
        <Route  path="/Medication" element={<Medication/>} />
        <Route  path="/Demo" element={<Demo/>} />
        </Routes>
    </Router>
    </>
  )
}

export default App
