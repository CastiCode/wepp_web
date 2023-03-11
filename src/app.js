// Imports 
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './routers/index.js';

// Constants 
const app = express();
const config = process.env;

// Middlewares
app.use(express.json());
app.use('/', router);

// Server start
app.listen(config.PORT, () => {
	console.log(`App started on port ${config.PORT}`);
});