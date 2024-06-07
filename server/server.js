//for express and socket.io server
const fs = require("fs"); // for file system
const https = require("https");
const express = require("express");
const socketio = require("socket.io");

const app = express();

app.use(express.static(__dirname + "/public"));

const key = fs.readFileSync("./certs/cert.key");
const cert = fs.readFileSync("./certs/cert.crt");
// console.log("KEY", key);

const expressServer = https.createServer({ key, cert }, app);
const io = socketio(expressServer, {
  cors: ["https://localhost:5137", "https://localhost:5000"],
});

expressServer.listen(4000, () => console.log("Port running on port 4000"));

module.exports = { io, app, expressServer };
