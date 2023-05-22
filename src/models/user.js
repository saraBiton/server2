import mongoose from 'mongoose';

const User = mongoose.model('User', new mongoose.Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	password: String,
	role: {
		type: String,
		enum: ['user', 'volunteer', 'parent','director','lifeguard'],
		required: true
	},
	linked_to_user: {
	},
	phones: [
		{ phone: String }
	],
	volunteer: {
		lat: Number,
		lng: Number,
		is_active: Boolean
	}
}));

export {
	User
};
