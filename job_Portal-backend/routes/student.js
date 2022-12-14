const express = require('express')
const mysql = require('mysql')
const db = require('../configs/db.configs')
const router = express.Router()

// Set Mysql Connection
const connection = mysql.createConnection(db.database)

// Connect Mysql
connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to the MySQL server(Student)');
        var stTableQuery = "CREATE TABLE IF NOT EXISTS Student (st_id VARCHAR(255) PRIMARY KEY,student_name VARCHAR(255) ,location VARCHAR(255),dateofbirth VARCHAR(255), nic VARCHAR(255) , contact VARCHAR(255), gender VARCHAR (255), email VARCHAR(255), univercity VARCHAR(255),skills VARCHAR(255), password VARCHAR(255));"
        connection.query(stTableQuery, function (err, result) {
            if (result.warningCount === 0) {
                console.log("Student table created!");
            }
        })
    }
})

//get All
router.get('/', (req, res) => {
    var query = "SELECT * FROM Student";
    connection.query(query, (err, result) => {
        if (err) console.log(err)
        res.json(result)
    })
})

// Add
router.post('/', (req, res) => {
    const st_id = req.body.st_id
    const student_name = req.body.studentname
    const location = req.body.location
    const dateofbirth = req.body.dateofbirth
    const nic = req.body.nic
    const contact=req.body.contact
    const gender = req.body.gender
    const email = req.body.email
    const univercity = req.body.univercity
    const skills = req.body.skills
    const password=req.body.password

    // console.log(username,address,contact,password);


    var query = "INSERT INTO Student (st_id,student_name,location,dateofbirth,nic,contact,gender,email,univercity,skills,password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    connection.query(query, [st_id,student_name,location,dateofbirth,nic,contact,gender,email,univercity,skills,password], (err,result) => {
        if (err) {
            res.sendStatus(400);
        } else {
            res.send({ 'message': ' Successfully!' })
        }
    })

})

// Update
router.put('/', (req, res) => {
    const student_name = req.body.studentname
    const location = req.body.location
    const dateofbirth = req.body.dateofbirth
    const nic = req.body.nic
    const contact=req.body.contact
    const gender = req.body.gender
    const email = req.body.email
    const univercity = req.body.univercity
    const password = req.body.password
    const skills = req.body.skills
    const st_id = req.body.st_id



    var query = "UPDATE Student SET student_name=?, location=?, dateofbirth=?, nic=?, contact=?, gender=?, email=?, univercity=?, skills=?, password=? WHERE st_id=?";

    connection.query(query, [student_name,location,dateofbirth,nic,contact,gender,email,univercity,skills,password,st_id], (err, result) => {
        if (err) console.log(err);

        if (result.affectedRows > 0) {
            res.send({ 'message': 'Student updated' })
        } else {
            res.sendStatus(400);
        }
    })
})

// Delete Using ID
router.delete('/:st_id', (req, res) => {
    const st_id = req.params.st_id

    var query = "DELETE FROM Student WHERE st_id=?";

    connection.query(query, [st_id], (err, result) => {
        if (err) console.log(err);

        if (result.affectedRows > 0) {
            res.send({ 'message': 'Student deleted' })
        } else {
            res.send({ 'message': 'Student not found' })
        }
    })
})

// Get Using ID
router.get('/:st_id/:password', (req, res) => {
    const st_id = req.params.st_id;
    const password = req.params.password;

    // console.log(st_id,password);

    var query = "SELECT * from Student WHERE st_id=? AND password=? ";


    connection.query(query, [st_id,password], (err, result) => {

         if (err) console.log(err);

         if (result.length==0){
             // console.log("Empty")
              res.sendStatus(400);
         }else{
             // console.log("Not Empty")
             res.json(result);
         }
    })
})

// Get Using ID
router.get('/:st_id', (req, res) => {
    const st_id = req.params.st_id;

    var query = "SELECT * from Student WHERE st_id=? ";

    connection.query(query, [st_id], (err, result) => {

        if (err) console.log(err);

        if (result.length==0){
            res.sendStatus(400);
        }else{
            res.json(result);
        }
    })
})

// Generate ID
router.get('/:id/:password/:nic', (req, res) => {
    const id = req.params.id;
    const password = req.params.password;

    // console.log(st_id,password);

    var query = "SELECT * FROM student ORDER BY st_id  DESC LIMIT 1 ";


    connection.query(query, (err, result) => {
        var tempid=parseInt(result[0].id.split("-")[1])
        tempid=tempid+1;
        if(tempid<9){
            res.send ("S-00"+tempid);
        }else if(tempid<99){
            res.send ("S-0"+tempid);
        }else{
            res.send ("S-"+tempid);
        }
    })
})

module.exports = router
