const express = require('express')
const app=express();
const port=5000;

const admin=require('./routes/admin')
const student=require('./routes/student')
const job=require('./routes/job')
const jobPoster=require('./routes/jobposter')


app.use(express.json());
app.use('/admin',admin);
app.use('/student',student);
app.use('/job',job);
app.use('/jobposter',jobPoster);

app.get('/', (req, res) => {
    res.send('get req came for / route')
})

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})