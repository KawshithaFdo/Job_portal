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
        console.log('Connected to the MySQL server(Admin)');
        var adminTableQuery = "CREATE TABLE IF NOT EXISTS Admin (Admin_id VARCHAR(255) PRIMARY KEY,`name` VARCHAR(255), password VARCHAR(255))"
        connection.query(adminTableQuery, function (err, result) {
            if (result.warningCount === 0) {
                console.log("Admin table created!");
            }
        })
    }
})

//get All
router.get('/', (req, res) => {
    var query = "SELECT * FROM Admin";
    connection.query(query, (err, result) => {
        if (err) console.log(err)
        res.json(result)
    })
})

// Add
router.post('/', (req, res) => {
    res.send("Admin POST")
})

// Update
router.put('/', (req, res) => {
    res.send("Admin PUT")
})

// Delete Using ID
router.delete('/:username', (req, res) => {
    res.send("Admin DELETE")
})

// Get Using ID
router.get('/:id/:password', (req, res) => {
    const id = req.params.id;
    const password = req.params.password;

    // console.log(st_id,password);

    var query = "SELECT * from Admin WHERE Admin_id=? AND password=? ";


    connection.query(query, [id,password], (err, result) => {

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

module.exports = router
