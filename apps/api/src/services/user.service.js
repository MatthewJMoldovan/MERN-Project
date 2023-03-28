/*
This service is NOT concerned with req and res, it doesn't know or care about
it.
*/

import { User } from '../models/index.js';

export const createUser = async (data) => {
  const newUser = await User.create(data);
  return newUser;
};

export const getAllUsers = async () => User.find();

export const getOneUser = async (id) => User.findById(id);

export const deleteUser = async (id) => User.findByIdAndDelete(id);

export const updateUser = async (id, data) =>
  User.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });

export const createManyUsers = async (payloads) => {
  const createPromises = payloads.map((payload) => createUser(payload));
  return Promise.allSettled(createPromises);
};
