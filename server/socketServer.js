// All our socket server stuffs happen here

const io = require("./server").io;

io.on("connection", (socket) => {
  console.log(socket.id + " has connected");
});
