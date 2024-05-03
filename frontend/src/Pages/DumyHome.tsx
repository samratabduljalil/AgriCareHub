import axios  from "axios";
import { useEffect, useState } from "react";

function DumyHome(){

const [auth,setAuth]=useState(false)
const [admin_id,setAdmin_id]= useState('')

axios.defaults.withCredentials = true;

useEffect(()=>{

axios.get('http://localhost:2000/Auth')
.then(res=>{

if(res.data.Status==="Success"){
 setAuth(true);
 setAdmin_id(res.data.admin_id)

}else{
    setAuth(false);

}



})


},[])
const logout =()=>{
    axios.get('http://localhost:2000/logout')
    .then(res=>{
    
    if(res.data.Status === "Succcess"){
     location.reload();
     
    }}).catch(err =>console.log(err))



}
    return(<>

    {
    auth ?
  <div>
   <h1>Authenticate {admin_id}</h1>
  </div>
    :
    <div>

<h1>Not authenticate</h1>
<button onClick={logout}>logout </button>
    </div>

    }
    
    
    </>
    ) 
    
    
    
    }
    export default DumyHome ;