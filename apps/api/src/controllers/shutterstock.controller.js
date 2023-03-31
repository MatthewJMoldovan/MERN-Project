import sstk from 'shutterstock-api';
import 'dotenv/config.js';

// THERE ARE TWO TOKENS, IF THE CONSOLE LOG SAYS THERE ARE TOO MANY REQUESTS - SWITCH TO THE OTHER ONE
// const token = process.env.token1;
const token = process.env.token2;

sstk.setAccessToken(token);

const imagesApi = new sstk.ImagesApi();

const queryGymParams = {
  query: 'exercise',
  image_type: ['photo'],
  orientation: 'horizontal',
  per_page: 8,
};

const queryFitnessParams = {
  query: 'gym',
  image_type: ['photo'],
  orientation: 'horizontal',
  per_page: 21,
};

export const handleGetFitImages = async (req, res) => {
  imagesApi
    .searchImages(queryFitnessParams)
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const handleGetGymImages = async (req, res) => {
  imagesApi
    .searchImages(queryGymParams)
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

console.log('Fitness images controller created');
