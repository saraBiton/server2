import { Router } from 'express';
import { Sensor } from '../models/sensor.js';

const sensor_router = Router();

sensor_router.get('/sensor', async (req, res, next) => {
    const sensors = await Sensor.find().exec();

    res.json(sensors);
});

sensor_router.post('/sensor/new', async (req, res, next) => {
	const obj = req.body;

	try {
		const sensor = await Sensor.create(obj);
		res.json(sensor);
	} catch (error) {
		res.json(error);
	}
});

sensor_router.get('/sensor/:id', async (req, res, next) => {
	const sensor = await Sensor.findById(req.params.id).exec();
	res.json(sensor);
});

sensor_router.post('/sensor/:id/edit', async (req, res, next) => {
	const obj = req.body;
	const sensor = await Sensor.findByIdAndUpdate(req.params.id, obj).exec();
	res.json(sensor);
});

sensor_router.post('/sensor/:id/delete', async (req, res, next) => {
	const sensor = await Sensor.findByIdAndDelete(req.params.id).exec();
	res.json(sensor);
});

export {
    sensor_router
};
