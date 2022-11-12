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
        console.log('Connected to the MySQL server(Job)');
        var JobTableQuery = "CREATE TABLE IF NOT EXISTS job (company_name VARCHAR(255) PRIMARY KEY, job_title VARCHAR(255),location VARCHAR(255), job_time VARCHAR (255), salaryRate VARCHAR(255), gender VARCHAR(255))"
        connection.query(JobTableQuery, function (err, result) {
            if (result.warningCount === 0) {
                console.log("Job table created!");
            }
        })
    }
})

//get All
router.get('/', (req, res) => {
    var query = "SELECT * FROM job";
    connection.query(query, (err, result) => {
        if (err) console.log(err)
        res.json(result)
    })
})

// Add
router.post('/', (req, res) => {
    const company_name = req.body.company_name
    const job_title = req.body.job_title
    const location = req.body.location
    const job_time=req.body.job_time
    const salaryRate=req.body.salaryRate
    const gender = req.body.gender


    // console.log(username,address,contact,password);


    var query = "INSERT INTO job (company_name,job_title,location,job_time,salaryRate,gender) VALUES (?, ?, ?, ?, ?, ?)";

    connection.query(query, [company_name,job_title,location,job_time,salaryRate,gender], (err) => {
        if (err) {
            res.send({ 'message': 'Duplicate Entry' })
        } else {
            res.send({ 'message': 'job Saved Successfully!' })
        }
    })

})

// Update
router.put('/', (req, res) => {
    const company_name = req.body.company_name
    const job_title = req.body.job_title
    const location = req.body.location
    const job_time=req.body.job_time
    const salaryRate=req.body.salaryRate
    const gender = req.body.gender


    var query = "UPDATE job SET job_title=?, location=?, job_time=?, salaryRate=?, gender=? WHERE company_name=?";

    connection.query(query, [job_title,location,job_time,salaryRate,gender,company_name], (err, result) => {
        if (err) console.log(err);

        if (result.affectedRows > 0) {
            res.send({ 'message': 'job updated' })
        } else {
            res.send({ 'message': 'job not found' })
        }
    })
})

// Delete Using ID
router.delete('/:company_name', (req, res) => {
    const company_name = req.params.company_name

    var query = "DELETE FROM job WHERE company_name=?";

    connection.query(query, [company_name], (err, result) => {
        if (err) console.log(err);

        if (result.affectedRows > 0) {
            res.send({ 'message': 'job deleted' })
        } else {
            res.send({ 'message': 'jobnot found' })
        }
    })
})

// Get Using ID
router.get('/:company_name', (req, res) => {
    const company_name = req.params.company_name

    var query = "SELECT * from job WHERE company_name=? ";

    connection.query(query, [nic], (err, result) => {

        if(result.affectedRows > 0){
            res.status(200).json({ 'message': 'ok' })
        } else {
            res.status(400).send('Error');
        }
    })
})

module.exports = router
