import express from 'express';

import { handleGetGymImages } from '../controllers/index.js';

const shutterstockImagesRouter2 = express.Router();

shutterstockImagesRouter2.get('/', handleGetGymImages);

console.log('Shutterstock router 2 created');

export { shutterstockImagesRouter2 };
