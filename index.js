'use strict'
// importing the required dependencies.

const { db } = require('./src/models/index.js');
const {start} = require('./src/server')
// requiring environment variables.
require('dotenv').config()

//Assign the Port value.
const port1 = process.env.PORT || 4000 ;
// Synchronized Database
db.sync().then(() => {
     start(port1)
   }).catch(err => console.log(err))