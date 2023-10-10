'use strict';

const axios = require('axios');
require("dotenv").config();
// const hadithModel = require('../models/scheModel');

async function getAllHadithApiHandler(req,res){
    let allHadithApi = await axios.get(`https://hadithapi.com/public/api/hadiths?apiKey=$2y$10$pBIBRXF2OdREuANcrRWvuMNXgLtSlRvsTxD8ltkuoKX2ZatzKC`);
    console.log(allHadithApi.data.hadiths.data[0])
    res.send(allHadithApi.data.hadiths.data);
}




module.exports = {
    getAllHadithApiHandler,
    // getAllHadithToDatabaseHandler,
    // addHadithInDatabaseHandler,
    // delHadithInDatabaseHandler, 

}