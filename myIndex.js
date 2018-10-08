var app = require('express');

var server = require('http').Server(app);

var io = require('socket.io')(server);


var redis = require('redis');

 const axios = require('axios');




var defaultRoom = null;

var users = [];

var connectedUsers = {

                     };




                      async function userDisconnected(userId){


                       try {
                         const res = await axios.post(
                           "http://localhost:8000/api/updateStatus", {
                         id: userId,
                         additionalData: 'wNuhD8NwkeXYqBr4CWo2'

                       });


                       } catch (error) {
                         console.log(error)
                       }

                     }

var mySocketId = null;







server.listen(7740);
var redisClient = redis.createClient();


redisClient.subscribe('message');


redisClient.on('message', function(channel, message){

if(message.trim()){

io.emit('evaluation',  message);

}



console.log(message)
});

redisClient.on('disconnect', function(){




  redisClient.quit();
});



redisClient.subscribe('userconnected');

redisClient.on('message', function(channel, message){












if(channel === 'userconnected'){




  var data = {'id' : message, 'socketid' : mySocketId};


var message2 = '2'


if(connectedUsers[message]){

  if(Object.keys(connectedUsers[message]).length >=20){

    connectedUsers[message] = {};

  }

console.log(Object.keys(connectedUsers[message]).length, 'length')


connectedUsers[message][Object.keys(connectedUsers[message]).length] = {'id': data.id, 'socketid': data.socketid}













}

else{

connectedUsers[message] = {};





connectedUsers[message][0]  = {'id': data.id, 'socketid': data.socketid}











}






console.log(connectedUsers)


}


});








redisClient.on('disconnect', function(){



  redisClient.quit();
});




io.on('connection', function(socket){

  console.log('Client connected');







mySocketId = socket.id


socket.room = mySocketId




socket.on('typingStatus', function(latestmessage){

  var clientsConnected = 0

 var connected = false

 var notInRoom = true


   if(defaultRoom == socket.room){

 notInRoom = false

     io.in(defaultRoom).clients(function (error, clients) {
                   if (error) { throw error; }


                   clientsConnected = clients.length
   if(clients.length<3){



                   for(var i =0; i<clients.length; i++){

                     if(clients[i] != socket.id){
                         connected = true
                       io.to(clients[i]).emit('myTypingStatus', {friend: latestmessage.friend, clientsData: clients, bonusdata: latestmessage.bonusdata, isConnected:connected, currentUser: latestmessage.currentUserName, messageType:latestmessage.messageType, isTyping:latestmessage.isTyping, currentUserAvatar: latestmessage.currentUserAvatar})


                     }

                   }



                 }

               })


             }

})



socket.on('latestMessage', function(latestmessage){


io.sockets.emit('chat', {name: latestmessage.currentUserName, message: latestmessage.message, idx: latestmessage.friend['idx']})





  const parentId = null
  const innerId = null
  // suppose you want to find the parent+inner ids for the object that has  the 'kmleHjGhwNy3SkwxAAAG' generatedid
  for (const parentKey in connectedUsers) {


      for (const innerKey in  connectedUsers[parentKey]) {


          if ( connectedUsers[parentKey][innerKey].id === latestmessage.secondUser.toString()) {


            io.to(connectedUsers[parentKey][innerKey].socketid).emit('sendMessage', {message: latestmessage.message, friend: latestmessage.friend, messagedata: latestmessage.messagedata, bonusdata: latestmessage.bonusdata, currentUser: latestmessage.currentUserName, messageType:latestmessage.messageType, currentUserAvatar:latestmessage.currentUserAvatar, settings: 'message', senderId: latestmessage.myId, currentUserSocket: connectedUsers[parentKey][innerKey].socketid})
            io.to(connectedUsers[parentKey][innerKey].socketid).emit('messageNotification', {bonusdata: latestmessage.myId, myunread: latestmessage})


          }


          if ( connectedUsers[parentKey][innerKey].id ===  latestmessage.myId.toString()) {



                socket.broadcast.to(connectedUsers[parentKey][innerKey].socketid).emit('sendMessage', {message: latestmessage.message, friend: latestmessage.friend, messagedata: latestmessage.messagedata, bonusdata: latestmessage.bonusdata, currentUser: latestmessage.currentUserName, messageType:latestmessage.messageType, currentUserAvatar:latestmessage.currentUserAvatar, settings: 'message', senderId: latestmessage.myId, currentUserSocket: connectedUsers[parentKey][innerKey].socketid})
            io.to(connectedUsers[parentKey][innerKey].socketid).emit('messageNotification', {bonusdata: latestmessage.myId, myunread: latestmessage})
              }
      }
  }
















});


socket.on('write', function(data){

})



socket.on('friendOnline', function(data){

  io.sockets.emit('yourFriend', data)

})

socket.on('roomdata', function(data){

if(socket.room){

  socket.leaveAll()


  const newRoom =
  socket.join()



}



  socket.leave(defaultRoom)
if(data.currentRole == 'tutor'){

  if(defaultRoom){

    socket.leave(defaultRoom)


  io.in(data.firstUser + data.secondUser).clients(function (error, clients) {
                if (error) { throw error; }

              if(clients.length <2){

                socket.join(data.firstUser + data.secondUser);

                defaultRoom = data.firstUser + data.secondUser;

                socket.room = defaultRoom
              }

            });

}
else{
      socket.leave(defaultRoom)
  socket.join(data.firstUser + data.secondUser);

  defaultRoom = data.firstUser + data.secondUser;

    socket.room = defaultRoom

}
}
else{

  if(defaultRoom){





  io.in(data.secondUser + data.firstUser).clients(function (error, clients) {
                if (error) { throw error; }

              if(clients.length <3){

                socket.join(data.secondUser + data.firstUser);

                defaultRoom = data.secondUser + data.firstUser;
                  socket.room = defaultRoom
              }

            });
}

else{
  socket.join(data.secondUser + data.firstUser);

  defaultRoom = data.secondUser + data.firstUser;
    socket.room = defaultRoom

}

}




})


socket.on('ImOn', function(data){

    io.sockets.emit('Now', data)




})


socket.on('forceDisconnect', function(data){

  io.sockets.connected[data].disconnect();
})


socket.on('disconnect', function(){

console.log('disconnected', socket.id)


const parentId = null
const innerId = null
// suppose you want to find the parent+inner ids for the object that has  the 'kmleHjGhwNy3SkwxAAAG' generatedid
for (const parentKey in connectedUsers) {


    for (const innerKey in  connectedUsers[parentKey]) {


        if ( connectedUsers[parentKey][innerKey].socketid ===  socket.id) {


          io.sockets.emit('userDisconnected', connectedUsers[parentKey][innerKey].id)

        }

      }

    }














});


});
