'use strict'
const { Sequelize, DataTypes } = require("sequelize")
const food = require("./food.modul");
const clothes = require("./clothes.modul");

require('dotenv').config()
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

let sequlizeOpthion = process.env.NODE_ENV === 'production' ? {
     dialectOptions :{
          ssl:{
               require : true,
               rejectUnauthorized :false
          }
     }
} : {}

let sequalize = new Sequelize(DATABASE_URL ,sequlizeOpthion )



module.exports = {
     db : sequalize,
     food1 : food(sequalize , DataTypes),
     closhes1: clothes(sequalize , DataTypes)
}