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
        var stTableQuery = "CREATE TABLE IF NOT EXISTS Student (student_name VARCHAR(255) ,location VARCHAR(255),dateofbirth VARCHAR(255), nic VARCHAR(255) PRIMARY KEY, contact VARCHAR(255), gender VARCHAR (255), email VARCHAR(255), univercity VARCHAR(255),skills VARCHAR(255), password VARCHAR(255))"
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
    const student_name = req.body.student_name
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


    var query = "INSERT INTO Student (student_name,location,dateofbirth,nic,contact,gender,email,univercity,skills,password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ,? ,?)";

    connection.query(query, [student_name,location,dateofbirth,nic,contact,gender,email,univercity,skills,password], (err) => {
        if (err) {
            res.send({ 'message': 'Duplicate Entry' })
        } else {
            res.send({ 'message': 'Student Saved Successfully!' })
        }
    })

})

// Update
router.put('/', (req, res) => {
    const student_name = req.body.student_name
    const location = req.body.location
    const dateofbirth = req.body.dateofbirth
    const nic = req.body.nic
    const contact=req.body.contact
    const gender = req.body.gender
    const email = req.body.email
    const univercity = req.body.univercity
    const skills = req.body.skills
    const password=req.body.password


    var query = "UPDATE Student SET student_name=?, location=?, dateofbirth=?, contact=?, gender=?, email=?, univercity=?,skills, password=? WHERE nic=?";

    connection.query(query, [student_name,location,dateofbirth,contact,gender,email,univercity,skills,password,nic], (err, result) => {
        if (err) console.log(err);

        if (result.affectedRows > 0) {
            res.send({ 'message': 'Student updated' })
        } else {
            res.send({ 'message': 'Student not found' })
        }
    })
})

// Delete Using ID
router.delete('/:nic', (req, res) => {
    const nic = req.params.nic

    var query = "DELETE FROM Student WHERE nic=?";

    connection.query(query, [nic], (err, result) => {
        if (err) console.log(err);

        if (result.affectedRows > 0) {
            res.send({ 'message': 'Student deleted' })
        } else {
            res.send({ 'message': 'Student not found' })
        }
    })
})

// Get Using ID
router.get('/:nic/:password', (req, res) => {
    const nic = req.params.nic
    const password = req.params.password

    var query = "SELECT * from Student WHERE nic=? ";

    connection.query(query, [nic], (err, result) => {
        if(err) {res.status(400).send('Error');}

        if(result[0].password==password){

            res.status(200).json({ 'message': 'ok' })
        } else {
            res.status(400).send('Error');
        }
    })
})

module.exports = router
