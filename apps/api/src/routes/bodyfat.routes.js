import express from 'express';

import { handleGetBodyFatValue } from '../controllers/index.js';

const bodyfatRouter = express.Router();

bodyfatRouter.post('/', handleGetBodyFatValue);

console.log('BodyFat router created');

export { bodyfatRouter };
