var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
function submitClick() {
  var firebaseRef = firebase.database().ref();
  firebaseRef.child("Text").set("some value");
}

// Send change VDO command to app.js
function sendChangeVidCommand() {

  var group = document.querySelector('.group:checked').value;
  var client = document.querySelector('.client:checked').value;
  var command = document.getElementById("vidForm").elements.item(0).value;
  var data = document.getElementById("vidForm").elements.item(1).value;
  var msg2 = { group_id: group, client_id: client, command: command, data: data };

  socket.emit("sendCommand", msg2);
  console.log("From sendChangeVidCommand " + msg2);
}

function sendChangeVidCommand3() {

  var group = document.querySelector('.group:checked').value;
  var client = document.querySelector('.client:checked').value;
  var command = document.getElementById("vidForm").elements.item(0).value;
  var data = $("#Vid2").val();
  var msg2 = { group_id: group, client_id: client, command: command, data: data };

  socket.emit("sendCommand", msg2);
  console.log("From sendChangeVidCommand " + msg2);
}
function sendChangeVidCommand2() {

  var group = document.querySelector('.group:checked').value;
  var client = document.querySelector('.client:checked').value;
  var command = document.getElementById("vidForm").elements.item(0).value;
  var data = $("#Vid").val();
  var msg2 = { group_id: group, client_id: client, command: command, data: data };

  socket.emit("sendCommand", msg2);
  console.log("From sendChangeVidCommand " + msg2);
}
function sendChangeVidCommand4() {

  var group = document.querySelector('.group:checked').value;
  var client = document.querySelector('.client:checked').value;
  var command = document.getElementById("vidForm").elements.item(0).value;
  var data = $("#Vid3").val();
  var msg2 = { group_id: group, client_id: client, command: command, data: data };

  socket.emit("sendCommand", msg2);
  console.log("From sendChangeVidCommand " + msg2);
}

// Send change Template command to app.js
function sendChangeTemCommand() {
  var group = document.querySelector('.group:checked').value;
  var client = document.querySelector('.client:checked').value;
  var command = document.getElementById("temForm").elements.item(0).value;
  var data = document.getElementById("tem1").value;
  var msg2 = { group_id: group, client_id: client, command: command, data: data };
  socket.emit("sendCommand", msg2);
  console.log("From sendChangeTemCommand " + msg2);
}

function sendChangeTemCommand2() {
  var group = document.querySelector('.group:checked').value;
  var client = document.querySelector('.client:checked').value;
  var command = document.getElementById("temForm").elements.item(0).value;
  var data = document.getElementById("tem2").value;
  var msg2 = { group_id: group, client_id: client, command: command, data: data };
  socket.emit("sendCommand", msg2);
  console.log("From sendChangeTemCommand " + msg2);
}

function sendChangeTemCommand3() {
  var group = document.querySelector('.group:checked').value;
  var client = document.querySelector('.client:checked').value;
  var command = document.getElementById("temForm").elements.item(0).value;
  var data = document.getElementById("tem3").value;
  var msg2 = { group_id: group, client_id: client, command: command, data: data };
  socket.emit("sendCommand", msg2);
  console.log("From sendChangeTemCommand " + msg2);
}

function sendChangeTemCommand4() {
  var group = document.querySelector('.group:checked').value;
  var client = document.querySelector('.client:checked').value;
  var command = document.getElementById("temForm").elements.item(0).value;
  var data = document.getElementById("tem4").value;
  var msg2 = { group_id: group, client_id: client, command: command, data: data };
  socket.emit("sendCommand", msg2);
  console.log("From sendChangeTemCommand " + msg2);
}
