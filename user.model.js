'use strict'
// Model definition for user table based on sequelize


let user = (sequelize , dataTypes) => sequelize.define('user' , {
     name :{
          type: dataTypes.STRING,
          allowNull : false
     }
})

module.exports = user ;