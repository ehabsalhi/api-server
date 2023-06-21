'use strict'
// Model definition for food table based on sequelize

const food = (sequelize, DataTypes) => sequelize.define('food', {
     name: {
       type: DataTypes.STRING,
       allowNull: false
     },
     time: {
       type: DataTypes.STRING
     }
   })

module.exports = food ;