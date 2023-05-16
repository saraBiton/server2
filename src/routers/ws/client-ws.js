
/**@type {import("express-ws").Router} */

import { Router } from "express";

import { sensor_list } from "../../sensor-list.js";

const client_ws_router = Router();

client_ws_router.ws("/client-ws", (ws) => {

    ws.on("message", async (msg) => {

        if (String(msg) === "start") {

            while (true) {
                ws.send(JSON.stringify(sensor_list))
                await new Promise(
                    (resolve) => setTimeout(resolve, 1 * 1000)
                )
            }
        }
    });
});

export {
    client_ws_router
};