'use strict'

const express=require('express')
require('dotenv').config()
const logger=require('./middleware/logger')
const server=express()

const notFoundHandler=require('./error-handlers/404')
const errorHandler=require('./error-handlers/500')

const PORT = process.env.PORT || 3200

server.get('/hello',(req,res)=>{
    res.status(200).send('all is good')
})

server.get('/error',(req,res,next)=>{
    next('you made an error')
})

server.use('*',notFoundHandler)
server.use(errorHandler)
server.use(logger)

function start(){
    server.listen(PORT,()=>{
    console.log(`${PORT}`)
})
}

module.exports={server:server,start:start}