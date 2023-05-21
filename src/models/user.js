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
		emun: ['user', 'volunteer', 'parent','director','lifeguard'],
		required: true
	},
	phones: [
		{ phone: String }
	],
	linked_to_user: {
	},
	volunteer: {
		lat: Number,
		lng: Number,
		is_active: Boolean
	}
}));

export {
	User
};
