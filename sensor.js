import WebSocket from 'ws';



const exemp_pos = { lat: 31.790245, lng: 34.625496 };

class Sensor {
    constructor(id = "", position =  exemp_pos ) {

        this.id = id
        this.position = position;
        this.status = "OK"; // OK / ALERT /  SOS
        this.inflate_the_life_jacket = false;
        this.ws_client;
    }


    on_sos() {
        this.status = "SOS";
        this.inflate_the_life_jacket = true;
    }

    on_alert() {
        this.status = "ALERT";
    }

    start() {

        this.ws_client = new WebSocket("ws://127.0.0.1:8000/sensor-ws");

        this.ws_client.on("open", async () => {

            while (true) {
                const data_to_send = {
                    id: this.id,
                    position: this.position,
                    status: this.status
                }

                this.ws_client.send(JSON.stringify(data_to_send))
                await new Promise(
                    (resolve) => setTimeout(resolve, 1 * 1000)
                )

                this.position = set_random_coordinates(this.position);
            }

        });
    }
}


const sensor1 = new Sensor("8t8768v7");
sensor1.start()
const sensor2 = new Sensor("b87t876h");
sensor2.start()


function set_random_coordinates(location = location) {

    let random_num = get_random_in_range(0.000, 0.009);

    if (Math.random() > 0.5) {
        random_num = make_number_negative(random_num);
    }

    if (Math.random() > 0.5) {
        location.N += random_num
    } else {
        location.E += random_num
    }

    return location;

    function get_random_in_range(min, max) {
        return Number((Math.random() * (max - min) + min).toFixed(5));
    }

    function make_number_negative(num) {
        return num - (num * 2)
    }
}