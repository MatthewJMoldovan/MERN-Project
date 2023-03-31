import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import './configs/index.js';

import { userRouter } from './routes/index.js';
import { bodyfatRouter } from './routes/index.js';
import { shutterstockImagesRouter } from './routes/index.js';
import { shutterstockImagesRouter2 } from './routes/index.js';
import * as middleware from './middleware/index.js';

const app = express();
app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use('/api/users', userRouter);
app.use('/api', bodyfatRouter);
app.use('/shutterstockAPI/gym', shutterstockImagesRouter2);
app.use('/shutterstockAPI/fitness', shutterstockImagesRouter);
app.use(middleware.errorLogger);
app.use(middleware.errorHandler);

app.listen(process.env.API_PORT, () => {
  console.log(`Api listening on port ${process.env.API_PORT}.`);
});
