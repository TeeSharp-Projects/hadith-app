"use strict";

const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT;

const errorHandler = require('./handlers/500');
const notFoundHandler = require('./handlers/404');
const hadithRoutes = require('./routes/hadith');


// Middlewares
app.use(cors());
app.use(express.json());



app.use(hadithRoutes);
//Always put your error & notFound handlers below routes.
app.use(errorHandler);
app.use('*',notFoundHandler);

// app.get('/', (req, res) => {
//     res.send('You are good to go!')
// })



app.listen(PORT,()=>console.log(`Listening on port ${PORT}`));



