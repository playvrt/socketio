  var socket = io.connect('http://localhost:80');


  // enable vibration support
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

    socket.on('broadcast', function (data) {
      console.log("Server sent: " + data.msg);
      socket.emit('clientmessage', { message: 'hello!' });
    });

    //test Counter

    var clientCount = 0;
    var clients = [];
    var clientInfo = { 'clientId': 0 }
    // var firebaseRef = firebase.database().ref();
    // sk.on('imIn', function (data) {


    //     clientInfo.clientId = clientCount + 1;
    //     clientCount++;
    //     console.log("sent back  " + clientInfo.clientId)
    //     io.sockets.emit("getClinetId", clientInfo)
    //     clients.push(clientInfo);
    //     console.log(clients);
       
    //     // firebaseRef.child("Text").set("clientInfo.clientId");
    //     // var data = fs.writeFileSync('./files/file',clientin)
    // })

  

    $(function () {
      //jQuery Code
    });