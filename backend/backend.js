import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'



const app = express();
app.use(cors(
{

origin:["http://localhost:5173"],
methods:["POST,GET"],
credentials: true


}


));
app.use(express.json());
app.use(cookieParser());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "agricarehub"

})

const verifyUser =(req, res, next)=>{
const token = req.cookies.token;
if(!token){
 return res.json({Message:"token is not avaiable"})


}else{
jwt.verify(token,"agricarehub",(err,decoded)=>{


    if(err){
   return res.json({Message: "Authentication error"})


    }else{

 req.admin_id =decoded.admin_id;
 next();

    }
})


}


}


app.get('/Auth',verifyUser,(req,res)=>{

    return res.json({Status : "Success" ,admin_id: req.admin_id})

}
)

app.get('/', (req, res) => {
    const sql = "select * from medication";

    db.query(sql, (err, result) => {

        if (err) return res.json("server error c");
        return res.json(result);
    })


})
app.post('/data', (req, res) => {
    const { predictionResult} = req.body;
  
    const sql = 'select * from medication WHERE `Disease_name`= ?';
    const values = [predictionResult];
   console.log(predictionResult);
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return res.json({ message: 'server error' });
        }
             if(data.length > 0){
                console.log(data);
                return res.json(data);


             }else{

                return res.json({ message: 'No data found' });

             }



  
        
    });


})

app.post("/updatemedication", (req, res) => {
  const { Disease_Name, Medication_in_bangla, Medicine_name } = req.body;

  const sql = 'INSERT INTO `medication`(`Disease_name`, `Medication`, `Medicine_name`) VALUES (?, ?, ?)';
  const values = [Disease_Name, Medication_in_bangla, Medicine_name];

  db.query(sql, values, (err, result) => {
      if (err) {
          console.error('Error executing MySQL query:', err);
          return res.status(500).json({ message: 'Failed to save data' });
      }

      res.status(200).json({ message: 'Data saved successfully' });
  });
});



app.post("/signup", (req, res) => {
    const { Phone,
        Name,
        District,
        Password} = req.body;
  
    const sql = 'INSERT INTO `farmer`( `name`, `phone`, `password`, `district`)VALUES (?, ?, ?,?)';
    const values = [Phone,
        Name,
        District,
        Password];
  
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return res.status(500).json({ message: 'Failed to save data' });
        }
  
        res.status(200).json({ message: 'Data saved successfully' });
    });
  });





  app.post("/login", (req, res) => {
    const { Phone,
        Password} = req.body;
  
    const sql = 'SELECT * FROM `admin` WHERE `email`= ? AND `password`= ? ';
    const values = [Phone,
        Password];
  
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return res.json({ message: 'server error' });
        }
             if(data.length > 0){
                    const admin_id =data[0].admin_id;
                    const token = jwt.sign({admin_id},"agricarehub",{expiresIn:'1d'});
                    res.cookie('token',token);
                    return res.json({Status : "Success"})


             }else{

                return res.json({ message: 'No data found' });

             }



  
        
    });
  });
  
 app.get('/logout',(req,res)=>{

res.clearCookie('token');
return res.json({Status : "Success"})

 })
  
app.listen(2000, () => {
    console.log("cow")

})