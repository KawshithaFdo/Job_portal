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
        console.log('Connected to the MySQL server(St_jobs)');
        var stTableQuery = "CREATE TABLE IF NOT EXISTS St_jobs (job_id VARCHAR(255) , st_id VARCHAR(255), PRIMARY KEY(job_id,st_id))"
        connection.query(stTableQuery, function (err, result) {
            if (result.warningCount === 0) {
                console.log("St_job table created!");
            }
        })
    }
})

//get All
router.get('/', (req, res) => {
    var query = "SELECT * FROM St_jobs";
    connection.query(query, (err, result) => {
        if (err) console.log(err)
        res.json(result)
    })
})

// Add
router.post('/', (req, res) => {
    const job_id = req.body.job_id
    const st_id = req.body.st_id

    // console.log(username,address,contact,password);


    var query = "INSERT INTO St_jobs (job_id,st_id) VALUES (?, ?)";

    connection.query(query, [job_id,st_id], (err) => {
        if (err) {
            res.send({ 'message': 'Duplicate Entry' })
        } else {
            res.send({ 'message': 'St_job Saved Successfully!' })
        }
    })

})

// Update
router.put('/', (req, res) => {

})

// Delete Using ID
router.delete('/:job_id/:st_id', (req, res) => {
    const job_id = req.body.job_id
    const st_id = req.body.st_id

    var query = "DELETE FROM St_jobs WHERE job_id=? AND st_id=?";

    connection.query(query, [job_id,st_id], (err, result) => {
        if (err) console.log(err);

        if (result.affectedRows > 0) {
            res.send({ 'message': 'St_job deleted' })
        } else {
            res.send({ 'message': 'St_job not found' })
        }
    })
})

// Get Using ID
router.get('/:job_id/:st_id', (req, res) => {
    const job_id = req.body.job_id
    const st_id = req.body.st_id

    var query = "SELECT * from St_jobs WHERE job_id=? AND st_id=? ";

    connection.query(query, [job_id,st_id], (err, result) => {
        if(err) {res.status(400).send('Error');}

        if(result[0].password==password){

            res.status(200).json({ 'message': 'ok' })
        } else {
            res.status(400).send('Error');
        }
    })
})

module.exports = router
