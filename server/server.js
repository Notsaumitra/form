const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose= require('./db.js');
let userController = require('./src/userController.js')

const PORT=process.env.PORT || 5000;

const app=express();

app.use(bodyParser.json());

app.use(cors());


app.use('/users',userController);

app.get('/',(req,res)=>{
    res.send('Server is running')
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})