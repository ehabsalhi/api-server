'use strict'


const clothesED = (sequelize , DataTypes) => sequelize.define('clothesTable',{
     name : {
          type : DataTypes.STRING,
          allowNull : false
     },
     externalId :{
          type : DataTypes.INTEGER
     }

}) 


module.exports = clothesED ;