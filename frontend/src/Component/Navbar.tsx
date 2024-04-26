import './navbar.css';
import {NavLink} from 'react-router-dom';
function Navbar() {

    return (
        <>
          

           <div className="nav">
           
           <img src="\public\image\_14cdbdd2-955a-4e74-a067-18387740e6d1.png" alt="" className="image_logo" />
           
            <ul>
                <li><NavLink to="/">Home</NavLink> </li>
                <li><NavLink to="/About">About</NavLink> </li>
                <li>Login/signup</li>
            </ul>

            </div>
        </>

    )

}
export default Navbar