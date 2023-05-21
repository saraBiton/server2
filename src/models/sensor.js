import mongoose from 'mongoose';

const Sensor = mongoose.model('Sensor', new mongoose.Schema({


	user_id: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
	jacket_num: Number,
	start_date: Date,
	end_date: Date
}));

export {
	Sensor
};

