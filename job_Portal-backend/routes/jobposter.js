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
        console.log('Connected to the MySQL server(Jobposter)');
        var JobposterTableQuery = "CREATE TABLE IF NOT EXISTS jobposter (name VARCHAR(255) , nic VARCHAR(255) PRIMARY KEY,company_name VARCHAR(255), contact VARCHAR(255),address VARCHAR(255), gender VARCHAR (255), email VARCHAR(255), jobposition VARCHAR(255), password VARCHAR(255))"
        connection.query(JobposterTableQuery, function (err, result) {
            if (result.warningCount === 0) {
                console.log("Jobposter table created!");
            }
        })
    }
})

//get All
router.get('/', (req, res) => {
    var query = "SELECT * FROM jobposter";
    connection.query(query, (err, result) => {
        if (err) console.log(err)
        res.json(result)
    })
})

// Add
router.post('/', (req, res) => {
    const name = req.body.name
    const nic = req.body.nic
    const company_name = req.body.companyname
    const contact=req.body.contact
    const address=req.body.address
    const gender = req.body.gender
    const email = req.body.email
    const jobposition = req.body.jobposition
    const password=req.body.password

    // console.log(username,address,contact,password);


    var query = "INSERT INTO jobposter (name,nic,company_name,contact,address,gender,email,jobposition,password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    connection.query(query, [name,nic,company_name,contact,address,gender,email,jobposition,password], (err) => {
        if (err) {
            res.send({ 'message': 'Duplicate Entry' })
        } else {
            res.send({ 'message': 'jobposter Saved Successfully!' })
        }
    })

})

// Update
router.put('/', (req, res) => {
    const name = req.body.name
    const nic = req.body.nic
    const company_name = req.body.companyname
    const contact=req.body.contact
    const address=req.body.address
    const gender = req.body.gender
    const email = req.body.email
    const jobposition = req.body.jobposition
    const password=req.body.password


    var query = "UPDATE jobposter SET name=?, company_name=?, contact=?, address=?, gender=?, email=?, jobposition=?, password=? WHERE nic=?";

    connection.query(query, [name,company_name,contact,address,gender,email,jobposition,password,nic], (err, result) => {
        if (err) console.log(err);

        if (result.affectedRows > 0) {
            res.send({ 'message': 'jobposter updated' })
        } else {
            res.send({ 'message': 'jobposter not found' })
        }
    })
})

// Delete Using ID
router.delete('/:nic', (req, res) => {
    const nic = req.params.nic

    var query = "DELETE FROM jobposter WHERE nic=?";

    connection.query(query, [nic], (err, result) => {
        if (err) console.log(err);

        if (result.affectedRows > 0) {
            res.send({ 'message': 'jobposter deleted' })
        } else {
            res.send({ 'message': 'jobposter not found' })
        }
    })
})

// Get Using ID
router.get('/:nic/:password', (req, res) => {
    const nic = req.params.nic
    const password = req.params.password

    var query = "SELECT * from jobposter WHERE nic=? ";

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
