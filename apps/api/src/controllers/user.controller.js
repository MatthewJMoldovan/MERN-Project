/*
Separation of concerns:
  The controller is only concerned with handling the request and the response,
  everything is separable logic so it's decoupled and easily reusable.
*/

import { createUser, getAllUsers, getOneUser, deleteUser, updateUser } from '../services/index.js';

import { ApiError } from '../utils/index.js';

export const handleCreateUser = async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    return res.json(user);
  } catch (error) {
    /*
    Pass the error along to the next middleware function that happens before
    the response. See the middleware being added in `main.js` with `app.use`.
    */
    return next(error);
  }
};

// _req naming convention means the param is currently unused.
export const handleGetAllUsers = async (_req, res, next) => {
  try {
    const users = await getAllUsers();
    return res.json(users);
  } catch (error) {
    return next(error);
  }
};

export const handleGetOneUser = async (req, res, next) => {
  try {
    const user = await getOneUser(req.params.id);
    return res.json(user);
  } catch (error) {
    return next(error);
  }
};

export const handleDeleteUser = async (req, res, next) => {
  try {
    const user = await deleteUser(req.params.id);
    return res.json(user);
  } catch (error) {
    return next(error);
  }
};

export const handleUpdateUser = async (req, res, next) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    return res.json(user);
  } catch (error) {
    return next(error);
  }
};

export const handleCreateManyUsers = async (req, res, next) => {
  try {
    if (Array.isArray(req.body) === false) {
      throw new ApiError({ message: 'Request body must be an array.', statusCode: 400 });
    }
    const settledCreateOutcomes = await createManyUsers(req.body);
    return res.json(settledCreateOutcomes);
  } catch (error) {
    return next(error);
  }
};
