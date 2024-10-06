require('dotenv').config();
var express = require('express');
var router = express.Router();
const app = express();
const fetch = require('node-fetch');

const auth = (req, res, next) => {

    console.log('auth'); 
    const { accessToken } = req.body;
    let data = {
        email: 'email',
        password: 'pass',
    };

    let url = 'http://localhost:8080/attestation';

    fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'authorization': 'Bearer ' + accessToken }
    }).then((result) => {
        //res.send(result);
        console.log('result ' + JSON.stringify(result));
        result.json().then((res1) => {
            console.log("result 1 "+JSON.stringify(res1));
            let data = res1.result;
            let dataStatus=res1.status;
            console.log("status    => "+dataStatus)
            if(dataStatus.startsWith('400')){
                res.send(' ERR  ===>  '+res1.status_message);
            }else{
                res.render('attestations', {
                    layout: false,
                    data
                });
            }
            
        });
    });

}

module.exports = { auth }