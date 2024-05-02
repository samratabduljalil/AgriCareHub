import './choseCrop.css';
import Navbar from '../Component/Navbar'
import {NavLink} from 'react-router-dom';
import Footer from '../Component/Footer'

function ChoseCrop(){

    return(<>
<Navbar/>
<div className="Crop_body">

<div className="Crop_card">

    <h1 className='chose_h1'>আপনি কোন ধরনের ফসলের রোগ নির্ণয় করতে চান?</h1>
   
    <button className='btn_rice'><NavLink to="/ChoseCrop">ধান</NavLink></button>
    <button className='btn_wheat'><NavLink to="/ChoseCrop">গম</NavLink></button>
    <button className='btn_corn'><NavLink to="/ImageUploader">আলু</NavLink></button>
    <button className='btn_potato'><NavLink to="/ChoseCrop">ভুট্টা</NavLink></button>
    
</div>




</div>



    
    <Footer/>
    </>
    ) 
    
    
    
    }
    export default ChoseCrop