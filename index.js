// step 1 : declare the packages 
const axios = require('axios') ; 
const cheerio = require('cheerio') ; 
const { response } = require('express');
const express = require('express') ;
require('dotenv').config() ;

// step 2 : call express 
const app = express() ; 

// step 4 : visit url and get the response from it 
const URL = 'https://www.w3schools.com/' ;
axios(URL) 
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        $(`.w3-round`, html).each(function(){
           const title =  $(this).text()
           const url =  $(this).find('a').attr('href')
           articles.push({
               title,
               url
           })
        })
        console.log(articles)
    }).catch(err => console.log(err))

// step 3 : listen to the port  
const PORT = 9999 ;
app.listen(PORT, console.log(`server is running on port ${PORT} !!! `)) ;