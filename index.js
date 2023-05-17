const WebSocket = require("ws");
const express = require("express");

const PORT = 8000

const app = express()

const myServer = app.listen(PORT, ()=>{
    console.log(`listen on ${PORT}`);
})

const wsServer = new WebSocket.Server({
    noServer: true
})  

wsServer.on("connection", function(ws) { 

    console.log("connection");
    ws.on("message", function(msg) {  
        console.log(String(msg));
    })
})

myServer.on('upgrade', async function upgrade(request, socket, head) {

    wsServer.handleUpgrade(request, socket, head, function done(ws) {
      wsServer.emit('connection', ws, request);
    });
});