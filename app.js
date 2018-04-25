var express = require("express");
var fs = require("fs");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.use(express.static("public"));

//test Counter
var clientCount = 0;
var clients = {};
var clientInfo = { clientId: 0 };
//  var firebaseRef = firebase.database().ref();

io.sockets.on("connection", function (sk) {
  // console.log(sk);
  sk.emit("broadcast", { msg: "Hi client!" });

  // send command to index
  sk.on("sendCommand", function (msg2) {
    console.log(msg2);
    io.sockets.emit("serverCommand", msg2);
  });

  // declare object
  function ClientObj(cid, gid, cur, sck) {
    this.cid = cid;
    this.gid = gid;
    this.cur = cur;
    this.sk = sck;
  }


  sk.emit("checkId", "");
  var myClient = "";
  var myData = "";

  // get id from regis
  sk.on("getResultId", function (data) {
    myData = data;
    fs.readFile("file.txt", function (err, clients2) {
      console.log(clients2);
      // check existing data
      if (myData == null || clients2[myData.cid] == undefined) {
        clientInfo.clientId = clientCount + 1;
        clientCount++;
        console.log("sent back  " + clientInfo.clientId);
        var cli = new ClientObj(clientCount, 0, "", sk.id);
        clients["" + clientCount] = cli;
        console.log(clients);
        sk.emit("getClientId", cli);
        fs.writeFile("file.txt", JSON.stringify(clients), err => {
          if (err) throw err;
          console.log("The file has been saved!");
        });
      }
    });
  });
  sk.on("writeCurOnFile", function (msg2) {
    var cli = new ClientObj(clientCount, 0, "", sk.id);
    console.log("cur ready")

  })

  sk.on("getJson", function (data) {
    myData = data;
    fs.readFile("file.txt", 'utf8', function (err, clients2) {
      console.log("data + " + clients2);
      // var count = Object.keys(clients2).length;
      // console.log("size = "+ count);
      sk.emit("retriveJson", clients2);

    });
  });

  sk.on("groupId", function (data) {
    console.log(data);
    sk.emit("getId", data);
  })
});

var ip = require("ip");
server.listen(80, function () {
  console.log(
    "Smart display start andd access on http: " + ip.address() + ":80!"
  );
});

function newFunction() {
  return "changeT";
}

function itemLength() {
  var obj;
  fs.readFile('file.txt', function read(err, data) {
    if (err) {
      throw err;
    }
    obj = data;
  })

  console.log("this obj = " + obj);
  processFile();
}

function processFile() {
  console.log("from processFile content = " + obj);
  return obj;
}