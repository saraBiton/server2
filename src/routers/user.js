import { Router } from 'express';
import { User } from '../models/index.js';

const user_router = Router();

user_router.get('/users', async (req, res, next) => {
	const users = await User.find().exec();

	res.json(users);
});

user_router.post('/user/new', async (req, res, next) => {
	const obj = req.body;

	try {
		const user = await User.create(obj);
		res.json(user);
	} catch (error) {
		res.json(error);
	}
});

user_router.get('/user/:id', async (req, res, next) => {
	const user = await User.findById(req.params.id).exec();
	res.json(user);
});

user_router.post('/user/:id/edit', async (req, res, next) => {
	const obj = req.body;
	const user = await User.findByIdAndUpdate(req.params.id, obj).exec();
	res.json(user);
});

user_router.post('/user/:id/delete', async (req, res, next) => {
	const user = await User.findByIdAndDelete(req.params.id).exec();
	res.json(user);
});

export {
	user_router
};
