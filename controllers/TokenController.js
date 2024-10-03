require('dotenv').config();
var express = require('express');
var router = express.Router();
const app = express();
const fetch = require('node-fetch');







const getAccessToken = (req, res, next) => {
    console.log("test post route");
    const { email, password } = req.body;
    let data = {
        email: email + '',
        password: password + '',
    };
    console.log(data);
    let url = 'http://localhost:8080/auth';
    fetch(url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    }).then((result) => {
        console.log('ress ' + result);
        result.json().then((res1) => {
            console.log(res1.accessToken);
            const access_token = res1.accessToken;
            res.render('auth', {
                layout: false,
                accessToken: access_token
            });
        });
    });
}


module.exports = {
    getAccessToken
}