import { app } from './src/index.js';
import { connect_db } from './src/config/db.js';
import { User } from './src/models/index.js';

(async () => {
	await connect_db();

	const PORT = 8000;

	app.listen(PORT, () => {
		console.log(`listen on ${PORT}`);
	});
})();
