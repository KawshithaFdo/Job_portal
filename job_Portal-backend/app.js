const express = require('express')
const app=express();
var cors = require('cors')
const port=5000;

 const admin=require('./routes/admin')
const student=require('./routes/student')
const job=require('./routes/job')
const jobPoster=require('./routes/jobposter')
const st_job=require('./routes/St_jobs')

app.use(cors())
app.use(express.json());
 app.use('/admin',admin);
app.use('/student',student);
app.use('/job',job);
app.use('/jobposter',jobPoster);
 app.use('/st_job',st_job);

app.get('/', (req, res) => {
    res.send('get req came for / route')
})

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})