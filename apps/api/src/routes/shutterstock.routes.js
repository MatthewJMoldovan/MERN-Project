import express from 'express';

import { handleGetFitImages } from '../controllers/index.js';

const shutterstockImagesRouter = express.Router();

shutterstockImagesRouter.get('/', handleGetFitImages);

console.log('Shutterstock router created');

export { shutterstockImagesRouter };
