var express = require("express");
var fs = require("fs");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.use(express.static("public"));
app.get("/test", function(req, res) {
  res.send("Hello World!");
});
app.get("/sun", function(req, res) {
  res.send("Hello Sun!");
});
//test Counter
var clientCount = 0;
var clients = {};
var clientInfo = { clientId: 0 };
//  var firebaseRef = firebase.database().ref();

io.sockets.on("connection", function(sk) {
  // console.log(sk);
  sk.emit("broadcast", { msg: "Hi client!" });

  // sk.on('sayhi', function (data) {
  //     console.log('Message incoming : ' + data.msg);
  // })

  // sk.on('changeVDO', function (data) {
  //     console.log('Change VDO : ' + data.msg);
  //     io.sockets.emit("changeV", data);
  // })
  // sk.on('changeTemplate', function (data) {
  //     console.log('Change Template : ' + data.msg);
  //     io.sockets.emit("changeT", data);
  // })
  // sk.on('changeDiv', function (data) {
  //     console.log('Change Div : ' + data.msg);
  //     io.sockets.emit("changeD", data);
  // })
  sk.on("sendCommand", function(msg2) {
    // var commandInServ = JSON.parse(msg2);
    console.log(msg2);
    io.sockets.emit("serverCommand", msg2);
  });

  function ClientObj(cid, gid, cur, sck) {
    this.cid = cid;
    this.gid = gid;
    this.cur = cur;
    this.sk = sck;
  }
  sk.emit("checkId", "");
  var myClient = "";
  var myData = "" ;
  sk.on("getResultId", function(data) {
      myData = data;
    fs.readFile("file.txt", function(err,clients2) {
    //     myClient = clients2;
    // }).then(function() {

   
    //   var cli = clients2[myData.cid];
        console.log(clients2);
      if (myData == null ||clients2[myData.cid] == undefined) {
        clientInfo.clientId = clientCount + 1;
        clientCount++;
        console.log("sent back  " + clientInfo.clientId);

        // clients.push(clientInfo);
        // console.log(clients);
        //     firebaseRef.child("Text").set("clientInfo.clientId");
        // var data = fs.writeFileSync('./files/file',clientin)
        var cli = new ClientObj(clientCount, 0, "", sk.id);
        // var Cobj = {}
        clients["" + clientCount] = cli;
        console.log(clients);
        sk.emit("getClinetId", cli);
        fs.writeFile("file.txt", JSON.stringify(clients), err => {
          if (err) throw err;
          console.log("The file has been saved!");
          //   console.log(clients["2"]);
        });
      }
    });
  });
});
//   sk.on("sendGroupId", function(data) {
//     console.log("Change VDO : " + data.msg);
//     io.socket.emit("getGroupId", data);
//   });
// });

var ip = require("ip");
server.listen(80, function() {
  console.log(
    "Smart display start andd access on http: " + ip.address() + ":80!"
  );
});
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
