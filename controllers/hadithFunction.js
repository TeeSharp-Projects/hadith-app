'use strict';

const axios = require('axios');
require("dotenv").config();
// const hadithModel = require('../models/scheModel');

async function getAllHadithApiHandler(req,res){
    let allHadithApi = await axios.get(`https://hadithapi.com/public/api/hadiths?apiKey=${process.env.API_KEY}&paginate=100`);
    console.log(allHadithApi.data.hadiths.data[0])
    res.send(allHadithApi.data.hadiths.data);
}




module.exports = {
    getAllHadithApiHandler,
    // getAllHadithToDatabaseHandler,
    // addHadithInDatabaseHandler,
    // delHadithInDatabaseHandler, 

}