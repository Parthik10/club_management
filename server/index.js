require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const connectDb = require("./utils/db");

// cors
const corsOption = {
    origin : "http://localhost:5173",
    methods : "GET , POST , PUT , DELETE , PATCH ,HEAD",
    credential: true,
}
app.use(cors(corsOption));


//middlewares
app.use(express.json());

const PORT = 5000;



connectDb().then(()=>{
    app.listen(PORT , ()=>{
        console.log(`server is running at port : ${PORT}`);
    });
});