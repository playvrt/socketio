var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");

function submitClick() {
  var firebaseRef = firebase.database().ref();
  firebaseRef.child("Text").set("some value");
}

function sendChangeVidCommand() {
  var command = document.getElementById("vidForm").elements.item(0).value;
  var data = document.getElementById("vidForm").elements.item(1).value;
  var msg2 = { group_id: 0, client_id: 0, command: command, data: data };

  socket.emit("sendCommand", msg2);
  console.log(msg2);
}

function sendChangeTemCommand() {
  var command = document.getElementById("temForm").elements.item(0).value;
  var data = document.getElementById("temForm").elements.item(1).value;
  var msg2 = { group_id: 0, client_id: 0, command: command, data: data };

  socket.emit("sendCommand", msg2);
  console.log(msg2);
}
