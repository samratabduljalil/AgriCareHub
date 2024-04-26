import './medication.css';
import React, {useEffect,useState} from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Modal from '../Component/Modal'
import axios from 'axios'

function Admin(){
const [data,setData]=useState([]);

useEffect(()=>{
axios.get('http://localhost:2000/')
.then(res=> setData(res.data))
.catch(err => console.log(err));

},[])



    return(<>

    <Navbar></Navbar>
    <div className="footer"><h1>I am medication{data.map((dication,index)=>{

        return<>{dication.Medication}</>  
        
        
        
        
        
        })}</h1></div>
    <Footer></Footer>
    </>
    ) 
    
    
    
    }
    export default Admin
