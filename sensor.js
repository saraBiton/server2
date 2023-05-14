const WebSocket = require("ws");

const ws_client = new WebSocket("ws://127.0.0.1:8000");

class Sensor {
    constructor(id = "") {

        this.id = id
        this.location = {
            "lng": 31.22,
            "lnt": 35.22
        };
        this.status = "OK";
    }


    on_sos() {
        this.status = "SOS";
    }

    start() {
        ws_client.on("open", async () => {

            while (true) {
                const data_to_send = {
                    id: this.id,
                    location: this.location,
                    status: this.status
                }

                ws_client.send(JSON.stringify(data_to_send))
                await new Promise(
                    (resolve) => setTimeout(resolve, 1 * 1000)
                )
            }

        })
    }
}


const sensor1 = new Sensor("8t8768v7");
sensor1.start()
const sensor2 = new Sensor("b87t876h");
sensor2.start()
