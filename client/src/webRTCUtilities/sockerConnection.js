import { io } from "socket.io-client";

const socketServer = io.connect("https://localhost:4000");

export default socketServer;
