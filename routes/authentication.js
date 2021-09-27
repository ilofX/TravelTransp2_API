let express = require('express');
let router = express.Router();

let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

const config = require('../config/config.json');

router.post('/login', (req,res) => {

});

router.post('/refersh', (req, res) => {

});


module.exports = router;
