let express = require('express');
let router = express.Router();

let argon2 = require('argon2');
let jwt = require('jsonwebtoken');

const config = require('../config/config');


/** Resources
 *  https://softwareontheroad.com/nodejs-jwt-authentication-oauth/#signup
 *  https://codeforgeek.com/refresh-token-jwt-nodejs-authentication/
 *  https://medium.com/@sugandhasaxena1212/access-token-and-refresh-token-with-node-js-a501e1cc034b
 */




router.post('/login', (req,res) => {
  const postData = req.body;

  // do the database authentication here, with user name and password combination and verify password with argon2.

  const user = {
    "id": postData.id,
    "username": postData.username,
    "mail": postData.mail
  }
  const token = jwt.sign(user, config.tokenSecret, { expiresIn: config.tokenLife});
  const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife});
  const response = {
    "status": true,
    "token": token,
    "refreshToken": refreshToken,
  }

  //tokenList[refreshToken] = response Insert token data store

  res.status(200).json(response);
});



module.exports = router;
