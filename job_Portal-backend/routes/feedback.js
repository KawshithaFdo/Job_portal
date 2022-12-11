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
        console.log('Connected to the MySQL server(Feedback)');
        var stTableQuery = "CREATE TABLE IF NOT EXISTS Feedback (id VARCHAR(255) , st_id VARCHAR(255) ,st_name VARCHAR(255), feedback VARCHAR(255) , PRIMARY KEY(id,st_id))"
        connection.query(stTableQuery, function (err, result) {
            if (result.warningCount === 0) {
                console.log("Feedback table created!");
            }
        })
    }
})

//get All
router.get('/', (req, res) => {
    var query = "SELECT * FROM feedback";
    connection.query(query, (err, result) => {
        if (err) console.log(err)
        res.json(result)
    })
})

// Add
router.post('/', (req, res) => {
    const id = req.body.id
    const feedback = req.body.feedback
    const name = req.body.st_name
    const st_id = req.body.st_id

    // console.log(username,address,contact,password);


    var query = "INSERT INTO feedback (id,st_id,st_name,feedback) VALUES (?, ?, ?, ?)";

    connection.query(query, [id,st_id,name,feedback], (err) => {
        if (err) {
            console.log(err)
            res.sendStatus(400);
        } else {
            res.send({ 'message': 'feedback Saved Successfully!' })
        }
    })

})

// Delete Using ID
router.delete('/:id/:st_id', (req, res) => {
    const id = req.body.id
    const st_id = req.body.st_id

    var query = "DELETE FROM feedback WHERE id=? AND st_id=?";

    connection.query(query, [id,st_id], (err, result) => {
        if (err) console.log(err);

        if (result.affectedRows > 0) {
            res.send({ 'message': 'feedback deleted' })
        } else {
            res.send({ 'message': 'feedback not found' })
        }
    })
})

module.exports = router
