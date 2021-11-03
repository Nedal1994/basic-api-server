'use strict'

const POSTGRES_URL = process.env.NODE_ENV ? 'Sqlite:memory:' : process.env.DATABASE_URL

const { sequelize, DataTypes } = require('sequelize')

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};

let sequelize = new Sequelize(POSTGRES_URL,sequelizeOptions)

module.exports = {db:sequelize, DataTypes}