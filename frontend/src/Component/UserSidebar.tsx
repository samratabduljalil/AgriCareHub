import './sidebar.css';
import { NavLink } from 'react-router-dom';
function UserSidebar(){

    return(<>
        <div className="sidebar">

            <img src="\public\image\_14cdbdd2-955a-4e74-a067-18387740e6d1.png" alt="" className='profile_image' />
            <h2 className='side_logo'>AgriCareHub</h2>

            <ul className='ul'>
                <li className='U_btn'>Home</li>
                
                <li className='U_btn'><NavLink to="/ChoseCrop" >Upload</NavLink></li>
                <li className='U_btn'>Logout</li>


            </ul>



        </div>



    </>
    ) 
    
    
    
    }
    export default UserSidebar