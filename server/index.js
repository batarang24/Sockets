const express=require('express')
const http=require('http')


const app=express()
const server=http.createServer(app)

const port=process.env.PORT || 3000;
server.listen(port,(req,res)=>{
    console.log(port)
  
})

