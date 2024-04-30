import express from 'express'
import mysql from 'mysql'
import cors from 'cors'



const app = express();
app.use(cors());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "agricarehub"

})

app.get('/', (req, res) => {
    const sql = "select * from medication";

    db.query(sql, (err, result) => {

        if (err) return res.json("server error c");
        return res.json(result);
    })


})

app.post("/updatemedication", (req, res) => {
    const { Disease_Name, Medication_in_bangla,Medicine_name } = req.body;
  
   
  
      const sql = 'INSERT INTO `medication`(`Disease_name`, `Medication`, `Medicine_name`) VALUES (?, ?,?)';
      const values = [Disease_Name, Medication_in_bangla,Medicine_name];
  
      connection.query(sql, values, (err, result) => {
        connection.release();
  
        if (err) {
          console.error('Error executing MySQL query:', err);
          res.status(500).json({ message: 'Failed to save data' });
          return;
        }
  
        res.status(200).json({ message: 'Data saved successfully' });
      });
    });
  
app.listen(2000, () => {
    console.log("cow")

})