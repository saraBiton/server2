import mongoose from 'mongoose';

const url = 'mongodb://127.0.0.1:27017';
const db_name = 'Surf-it';

const connect_db = () => mongoose.connect(`${url}/${db_name}`)
	.then(() => console.log('Connected to DB'))
	.catch((err) => console.log(err));

export {
	connect_db
};
