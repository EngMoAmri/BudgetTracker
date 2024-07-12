const express = require('express');
const path = require('path')
require('dotenv/config'); 
const usersRoutes = require('./routes/usersRoutes.js'); 

const PORT = process.env.BUDGET_TRACKER_PORT || 3000;
const app = express();

app.use('/', express.static(path.join(__dirname, 'public')))

app.use(express.json());
app.use('/users', usersRoutes);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);