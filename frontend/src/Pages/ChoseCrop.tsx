import './choseCrop.css';
import Navbar from '../Component/Navbar'
import { NavLink } from 'react-router-dom';
import Footer from '../Component/Footer'

function ChoseCrop() {

    return (<>
        <Navbar />
        <div className="Crop_body">

            <div className="Crop_card">

                <h1 className='chose_h1'>আপনি কোন ধরনের ফসলের রোগ নির্ণয় করতে চান?</h1>

                <NavLink to="/Rice"> <button className='btn_rice'>ধান</button></NavLink>
                <NavLink to="/Wheat">  <button className='btn_wheat'>গম </button></NavLink>
                <NavLink to="/Potato"><button className='btn_corn'>আলু </button></NavLink>
                <NavLink to="/Corn"><button className='btn_potato'>ভুট্টা </button></NavLink>

            </div>




        </div>




        <Footer />
    </>
    )



}
export default ChoseCrop