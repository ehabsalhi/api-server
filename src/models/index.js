'use strict'
const { Sequelize, DataTypes } = require("sequelize")
const food = require("./food.modul");
const clothesED = require("./clothes.modul");
const Collection = require("./Collection");
const user = require("./user.model");

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

// clothesCollection
let ClothesModel = clothesED(sequalize , DataTypes)
let clothesCollection = new Collection(ClothesModel)

//orderCollection
let foodModel = food(sequalize , DataTypes)
let foodCollection = new Collection(foodModel)


//UserCollection
let userModel = user(sequalize , DataTypes)

userModel.hasMany(ClothesModel,{foreignKey : 'externalId' , sourceKey : 'id'})
ClothesModel.belongsTo(userModel,{foreignKey : 'externalId' , targetKey : 'id'})

let UserCollection = new Collection(userModel) 




module.exports = {
     db : sequalize,
     food1 : food(sequalize , DataTypes),
     closhes1: clothesED(sequalize , DataTypes),
     clothesCollection,
     foodCollection,
     UserCollection,
     userModel
}