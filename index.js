const express = require("express");
const app = express();
const port = 5000;
const url = 'mongodb+srv://kim:1q2w3e4r@cluster0.brcl8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';



const mongoose = require('mongoose');
mongoose.connect(url)
    .then(()=> console.log('MoggoDBConnected..'))
    .catch((err) => console.log(err));

app.get('/',(req,res) => res.send('Hello World'));

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));