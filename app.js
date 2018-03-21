var express = require('express')
var fs = require('fs')
var app = express()
var server = require('http').createServer(app);
var io = require('socket.io')(server);




app.use(express.static('public'))
app.get('/test', function (req, res) {
    res.send('Hello World!')
})
app.get('/sun', function (req, res) {
    res.send('Hello Sun!')
})




io.sockets.on('connection', function (sk) {
    // console.log(sk);
    sk.emit('broadcast', { msg: 'Hi client!' });

    sk.on('sayhi', function (data) {
        console.log('Message incoming : ' + data.msg);
    })

    sk.on('changeVDO', function (data) {
        console.log('Change VDO : ' + data.msg);
        io.sockets.emit("changeV", data);
    })
    sk.on('changeTemplate', function (data) {
        console.log('Change Template : ' + data.msg);
        io.sockets.emit("changeT", data);
    })
    sk.on('changeDiv', function (data) {
        console.log('Change Div : ' + data.msg);
        io.sockets.emit("changeD", data);
    })



    //test Counter

    var clientCount = 0;
    var clients = [];
    var clientInfo = { 'clientId': 0 }
  //  var firebaseRef = firebase.database().ref();
    sk.on('imIn', function (data) {


        clientInfo.clientId = clientCount + 1;
        clientCount++;
        console.log("sent back  " + clientInfo.clientId)
        io.sockets.emit("getClinetId", clientInfo)
        clients.push(clientInfo.clientId);
        console.log(clients);





})


var ip = require("ip")

server.listen(80, function () {
    console.log('Smart display start andd access on http: ' + ip.address() + ':80!')
})
function newFunction() {
    return "changeT";
}

// var clientCount = 0;
// var clinets = [];
// io.sockets.on('connetion', function (socket) {
//     var clinetInfo = new object();
//     //dont forget to send id
//     clinetInfo.clientId = socket.id;
//     clients.push(clinetInfo);
//     clientCount++;
// });


