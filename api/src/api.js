const express = require('express')
const api = express()
const cors = require('cors')
const router = require('./routes/route');
console.log(process.env.POSTGRES_PASSWORD);
const dotenv = require('dotenv');
dotenv.config();

const pg = require('knex')({
    client: 'pg',
    connection: {
      host : process.env.POSTGRES_HOST,
      port : 5432,
      user : process.env.POSTGRES_USER,
      password : process.env.POSTGRES_PASSWORD,
      database : process.env.POSTGRES_DATABASE
    }
  });

  const { createTables } = require('./helper/DatabaseHelper')

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


createTables(pg);
module.exports = api;