const express = require("express");
const { WebSocketServer } = require("ws");

const { sensor_list } = require("./sensor-list");

const app = express();


function start_control_server(server) {

    const sensor_ws_server = new WebSocketServer({
        server,
        path: "/control-ws"
    });

    sensor_ws_server.on("connection", function (socket) {

        console.log("connection2");

        socket.on("message", function (msg) {

            if (String(msg) === "start") {
                while (true) {
                    socket.send(JSON.parse(sensor_list))
                }
            }
        });
    });

}

module.exports = {
    app, start_control_server
}