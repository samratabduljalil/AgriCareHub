import './medication.css';
import React, {useEffect,useState} from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Modal from '../Component/Modal'
import axios from 'axios'

function Medication(){
const [data,setData]=useState([]);

useEffect(()=>{
axios.get('http://localhost:2000/')
.then(res=> setData(res.data))
.catch(err => console.log(err));

},[])



    return(<>

    <Navbar></Navbar>
    <div className="footer"><h1>I am medication Lorem ipsum dolor, sit amet consectetur adipisicing elit. In modi non illum deserunt odio soluta iusto mollitia enim reiciendis? Cupiditate distinctio quibusdam est, rem enim animi dolorum unde fugit, minus corrupti quia fugiat sit! Expedita sed veritatis neque eos, distinctio dolor assumenda saepe tempore numquam mollitia at. Dicta assumenda sed harum eius. Perferendis pariatur, mollitia ullam aliquid quod vitae eligendi similique totam laborum dignissimos! Delectus quidem dolores amet, et ipsa omnis repellendus? Repellat, modi aperiam? Dolore atque at maxime quod deleniti facilis fuga pariatur velit perspiciatis, debitis, laudantium possimus aliquam, eum sequi sunt sit. A culpa modi dicta illum est.{data.map((dication,index)=>{

        return<>{dication.Medication}</>  
        
        
        
        
        
        })}</h1></div>
    <Footer></Footer>
    </>
    ) 
    
    
    
    }
    export default Medication