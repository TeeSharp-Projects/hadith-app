'use strict';

const axios = require('axios');
require("dotenv").config();
const hadithModel = require('../models/scheModel');

async function getAllHadithApiHandler(req,res){
    let allHadithApi = await axios.get(`https://hadithapi.com/public/api/hadiths?apiKey=$2y$10$pBIBRXF2OdREuANcrRWvuMNXgLtSlRvsTxD8ltkuoKX2ZatzKC`);
    console.log(allHadithApi.data.hadiths.data[0])
    res.send(allHadithApi.data.hadiths.data);
}

async function getAllHadithToDatabaseHandler(req,res){
    let username = req.query.username
    let allHadith = await hadithModel.find({username:username});
    // let allHadiths = await hadithModel.find({});
    // console.log(allHadith)
    res.send(allHadith)    

}


module.exports = {
    getAllHadithApiHandler,
    getAllHadithToDatabaseHandler,
    // addHadithInDatabaseHandler,
    // delHadithInDatabaseHandler, 

}