const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user.route.js');
const app = express();
const PORT = 8000;

mongoose.connect('mongodb://127.0.0.1:27017/project-1')
.then(()=>{
    console.log("data base conneted successfully");
}).catch((err)=>{
    console.log("error in connecting DB", err);
});



app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/user',userRoutes);

app.get('/', (req,res)=>{
    res.send('hello rohit ratan nagar');
})

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT} `);
});



