import express from 'express'
import mysql from 'mysql'
import cors from 'cors'



const app =express();
app.use(cors());


const db= mysql.createConnection({
 host: "localhost",
 user:"root",
 password: "",
 database: "agricarehub"

})

app.get('/',(req,res)=>{
const sql = "select * from Medication";

db.query(sql,(err,result)=>{

    if(err) return res.json("server error");
    return res.json(result);
})


})



app.listen(2000, ()=>{
console.log("")

})