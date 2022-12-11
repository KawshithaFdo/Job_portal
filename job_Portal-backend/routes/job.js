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
        var JobTableQuery = "CREATE TABLE IF NOT EXISTS job (job_id VARCHAR(255) PRIMARY KEY,company_name VARCHAR(255) , job_title VARCHAR(255),location VARCHAR(255), job_time VARCHAR (255), salaryRate VARCHAR(255), gender VARCHAR(255), skills VARCHAR(255), about VARCHAR(255))"
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
    const job_id = req.body.job_id
    const company_name = req.body.company_name
    const job_title = req.body.job_title
    const location = req.body.location
    const job_time=req.body.job_time
    const salaryRate=req.body.salaryRate
    const gender = req.body.gender
    const skills=req.body.skills
    const about = req.body.about
    const id = req.body.id


    // console.log(username,address,contact,password);


    var query = "INSERT INTO job (job_id,company_name,job_title,location,job_time,salaryRate,gender,skills,about,id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    connection.query(query, [job_id,company_name,job_title,location,job_time,salaryRate,gender,skills,about,id], (err) => {
        if (err) {
            res.send({ 'message': 'Duplicate Entry' })
        } else {
            res.send({ 'message': 'job Saved Successfully!' })
        }
    })

})

// Update
router.put('/', (req, res) => {
    const job_id = req.body.job_id
    const company_name = req.body.company_name
    const job_title = req.body.job_title
    const location = req.body.location
    const job_time=req.body.job_time
    const salaryRate=req.body.salaryRate
    const gender = req.body.gender
    const skills=req.body.skills
    const about = req.body.about
    const id = req.body.id


    var query = "UPDATE job SET company_name=?, job_title=?, location=?, job_time=?, salaryRate=?, gender=?, skills=? ,about=? ,id=? WHERE job_id=?";

    connection.query(query, [company_name,job_title,location,job_time,salaryRate,gender,skills,about,id,job_id], (err, result) => {
        if (err) console.log(err);

        if (result.affectedRows > 0) {
            res.send({ 'message': 'job updated' })
        } else {
            res.send({ 'message': 'job not found' })
        }
    })
})

// Delete Using ID
router.delete('/:job_id', (req, res) => {
    const job_id = req.params.job_id

    var query = "DELETE FROM job WHERE job_id=?";

    connection.query(query, [job_id], (err, result) => {
        if (err) console.log(err);

        if (result.affectedRows > 0) {
            res.send({ 'message': 'job deleted' })
        } else {
            res.send({ 'message': 'jobnot found' })
        }
    })
})

// Get Using ID And Job_ID
router.get('/:job_id/:id', (req, res) => {
    const job_id = req.params.job_id
    const id = req.params.id

    var query = "SELECT * from job WHERE job_id=? ";

    connection.query(query, [job_id], (err, result) => {

        if(result.affectedRows > 0){
            res.json(result);
        } else {
            res.status(400).send('Error');
        }
    })
})


// Get Using ID
router.get('/:id', (req, res) => {
    const id = req.params.id

    var query = "SELECT * from job WHERE id=? ";

    connection.query(query, [id], (err, result) => {

        if (result.length==0){
            res.sendStatus(400);
        }else{
            res.json(result);
        }
    })
})

module.exports = router
