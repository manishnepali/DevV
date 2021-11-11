const express = require('express')
const api = express()
const cors = require('cors')
const router = require('./routes/route')

api.use(express.json());

api.use(express.urlencoded({
    extended: true
}));

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

api.use(cors(corsOptions));
api.use('/', router);

module.exports = api;