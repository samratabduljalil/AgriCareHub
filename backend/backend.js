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
app.use(express.static('audio'))


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







const verifyUser2 =(req, res, next)=>{
    const token2 = req.cookies.token2;
    if(!token2){
     return res.json({Message:"token is not avaiable"})
    
    
    }else{
    jwt.verify(token2,"agricarehub",(err,decoded)=>{
    
    
        if(err){
       return res.json({Message: "Authentication error"})
    
    
        }else{
    
     req.user_id =decoded.user_id;
     next();
    
        }
    })
    
    
    }
    
    
    }
    
    
    app.get('/AuthUser',verifyUser2,(req,res)=>{
    
        return res.json({Status : "Success" ,admin_id: req.user_id})
    
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
    const { prediction} = req.body;
  
    const sql = 'select * from medication WHERE `Disease_name`= ?';
    const values = [prediction];
   console.log(prediction);
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




app.post('/search', (req, res) => {
    const { Disease} = req.body;
  
    const sql = 'select * from medication WHERE `Disease_name`= ?';
    const values = [Disease];
   console.log(Disease);
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

app.post("/insert", (req, res) => {
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



app.post("/updatemedication", (req, res) => {
    const { Disease_Name, Medication_in_bangla, Medicine_name } = req.body;
  
    const sql = 'UPDATE `medication` SET `Medication`=?,`Medicine_name`=? WHERE `Disease_name`=?';
    const values = [ Medication_in_bangla, Medicine_name,Disease_Name];
  
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return res.status(500).json({ message: 'Failed to save data' });
        }
  
        res.status(200).json({ message: 'Data Update successfully' });
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


  app.post("/userlogin", (req, res) => {
    const { Phone,
        Password} = req.body;
  
    const sql = 'SELECT * FROM `farmer` WHERE `phone`= ? AND `password`= ? ';
    const values = [Phone,
        Password];
  
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            return res.json({ message: 'server error' });
        }
             if(data.length > 0){
                    const user_id =data[0].user_id;
                    const token2 = jwt.sign({user_id},"agricarehub",{expiresIn:'1d'});
                    res.cookie('token2',token2);
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