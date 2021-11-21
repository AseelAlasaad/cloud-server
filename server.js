'use strict';

const PORT=process.env.PORT||3012;

const server=require('socket.io')(PORT);

const maneger=server.of('/maneger');

server.on('connection',(socket)=>{
    console.log('welecome', socket.id);
})


maneger.on('connection',(socket)=>{
console.log('CONNECTED MANEGER', socket.id);

socket.on('send-message',(message)=>{
    const Message={
     
        message:message
    }
    console.log(Message);
    maneger.emit('send-message',message);
    socket.emit('added');
})

})