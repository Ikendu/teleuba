//for express and socket.io server
const fs = require("fs"); // for file system
const https = require("https");
const express = require("express");
const cors = require("cors");
const socketio = require("socket.io");

const app = express();
app.use(cors()); // open our express API to any dormain

app.use(express.static(__dirname + "/public"));
app.use(express.json()); // to parse json through the body with the body parser

const key = fs.readFileSync("./certs/cert.key");
const cert = fs.readFileSync("./certs/cert.crt");
// console.log("KEY", key);

const expressServer = https.createServer({ key, cert }, app);
const io = socketio(expressServer, {
  cors: ["https://localhost:5173", "https://localhost:5000"],
});

expressServer.listen(4000, () => console.log("Port running on port 4000"));

module.exports = { io, app, expressServer };
