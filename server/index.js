const express=require('express')
const http=require('http')
const cors=require('cors')

const app=express()
const server=http.createServer(app)
app.use(cors());
const socketIo=require('socket.io')(server,{
    cors:{
        origin:'http://localhost:3000'
    }
})

socketIo.on('connection',(s)=>{
    
    //console.log(s.id)
    
    s.on('send',(data)=>{
        console.log(data)
        s.broadcast.emit('receive',data.input)
    })
})
server.listen(3001,()=>{
    console.log("server running in 3001")
})

