import './choseCrop.css';
import Navbar from '../Component/Navbar'

function ChoseCrop(){

    return(<>
<Navbar/>
<div className="Crop_body">

<div className="Crop_card">

    <h1 className='chose_h1'>chose how to eat beef</h1>
   
    <button className='btn_rice'>Rice</button>
    <button className='btn_wheat'>Wheat</button>
    <button className='btn_corn'>Corn</button>
    <button className='btn_potato'>Potato</button>
    
</div>




</div>



    
    
    </>
    ) 
    
    
    
    }
    export default ChoseCrop