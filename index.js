//connect env file
require('dotenv').config()
//import router
const router=require('./routes/router')

const express=require('express')
const cors=require('cors')
//import db file
require('./dataBase/connection')

const server=express()

server.use(cors())
server.use(express.json())
server.use(router)

//exports uploads folder to client
server.use('/uploads',express.static('./uploads'))

//process is used to run env in the same port
const port=5000|| process.env.port
server.listen(port,()=>{
    console.log(`--------------EMS server started At Port Number ${port}------`);
})
