'use strict'

const Clothes=(sequelize,DataTypes)=>{sequelize.define('clothes',{
    name:{type:DataTypes.STRING,
    allowNull:false},

    type:{type:DataTypes.STRING}
})}

module.exports=Clothes