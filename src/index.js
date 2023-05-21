// @ts-check

import { app } from './server.js';
import { sensor_ws_router } from './routers/ws/sensor-ws.js';
import { client_ws_router } from './routers/ws/client-ws.js';
import { user_router } from './routers/user-router.js';
import { sensor_router } from './routers/sensor-router.js';

app.use(sensor_ws_router);
app.use(client_ws_router);
app.use(user_router);
app.use(sensor_router);

export {
	app
};
