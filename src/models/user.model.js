'use strict'


let user = (sequelize , dataTypes) => sequelize.define('user' , {
     name :{
          type: dataTypes.STRING,
          allowNull : false
     }
})

module.exports = user ;