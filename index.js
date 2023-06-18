'use strict'

const { db } = require('./src/models/index.js');
const {start} = require('./src/server')
require('dotenv').config()

const port1 = process.env.PORT || 4000 ;

db.sync().then(() => {
     start(port1)
   }).catch(err => console.log(err))