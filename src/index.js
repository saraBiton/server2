// @ts-check

import { app } from './server.js'
import { sensor_ws_router } from './routers/ws/sensor-ws.js';
import { client_ws_router } from './routers/ws/client-ws.js';

app.use(sensor_ws_router);
app.use(client_ws_router);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});

