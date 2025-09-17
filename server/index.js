const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors =require("cors");

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"gestionempleados"

});

app.post("/create",(req , res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const position = req.body.position;
    const yearsofwork = req.body.yearsofwork;
    const country = req.body.country;

    db.query('INSERT INTO empleados(name, age, position, workingyears, country) VALUES (?,?,?,?,?)',[name, age, position, yearsofwork, country],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.get("/employees",(req , res)=>{
   
    db.query('SELECT * FROM empleados',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.put("/update",(req , res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const position = req.body.position;
    const yearsofwork = req.body.yearsofwork;
    const country = req.body.country;

    db.query('UPDATE empleados SET name=?, age=?, position=?, workingyears=?, country=? WHERE id=?', [name, age, position, yearsofwork, country, id],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})


app.delete("/delete/:id",(req , res)=>{
    const id = req.params.id;
  
    db.query('DELETE FROM empleados  WHERE id=?', [id],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})



app.listen(3001,()=>{
    console.log("working in port 3001 ");
})