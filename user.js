'use strict';

const io=require('socket.io-client');
const host='http://localhost:3012';
const faker=require('faker');
const maneger=io.connect(`${host}/maneger`);



// setInterval(() => {

//   }, 5000);
const message={
    "Company": faker.company.companyName(),
    "sender": faker.name.findName(),
    "time": faker.address.timeZone(),
    "message":faker.lorem.sentence()
}
  // .emit is a method 
  maneger.emit('send-message',message);

  maneger.on('added',()=>{
    console.log('Thank u for sending this message , I am glad to join with your team');
    maneger.disconnect();
})
