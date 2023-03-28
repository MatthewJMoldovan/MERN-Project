import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import './configs/index.js';

import { userRouter } from './routes/index.js';
import * as middleware from './middleware/index.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);
app.use(middleware.errorLogger);
app.use(middleware.errorHandler);

app.listen(process.env.API_PORT, () => {
  console.log(`Api listening on port ${process.env.API_PORT}.`);
});