const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server,{
    cors:{
        origin:"*"
    }
});

io.on('connection',(socket)=>{
    // console.log("what is socket: ",socket);
    console.log("Socket active for connection.");
    socket.on('chat',(payload)=>{
        console.log("What is payload: ",payload);
        io.emit("chat", payload)
    })
})

server.listen(5000,()=>console.log("Server connected!"))