import React from "react";

import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {







  
  return (
     <div>
    
      <main>
        <section>
          <h3>Welcome To AgriCareHub</h3>
          <h1>
          Do Checkup  &amp;  Identify <span className="change_content"> </span>{" "}
            <span style={{ marginTop: "-10px" }}> | </span>{" "}
          </h1>
          <p>"The earth laughs in Plants"</p>
          <br /> <br /> 
         <Link to="/login" className="btnone">Login</Link>
         <Link to="/signup" className="btntwo">signup here</Link>
          
        </section>
      </main>
     </div>
    
  );
};
export default Home;
