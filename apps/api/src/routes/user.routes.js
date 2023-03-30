import express from 'express';

import {
  handleCreateUser,
  handleCreateManyUsers,
  handleGetAllUsers,
  handleGetOneUser,
  handleUpdateUser,
  handleDeleteUser,
} from '../controllers/index.js';

const userRouter = express.Router();

userRouter.post('/', handleCreateUser);
userRouter.post('/many', handleCreateManyUsers);
userRouter.get('/', handleGetAllUsers);
userRouter.get('/:id', handleGetOneUser);
userRouter.put('/:id', handleUpdateUser);
userRouter.delete('/:id', handleDeleteUser);

console.log('User router created');

export { userRouter };
