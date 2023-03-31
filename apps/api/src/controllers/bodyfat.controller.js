import 'dotenv/config.js';
import axios from 'axios';

export const handleGetBodyFatValue = async (req, res) => {
  const options = {
    method: 'POST',
    url: 'http://www.fitimage.io/api/api_fat_predict/',
    data: { gender: req.body.gender, image: req.body.image, token: process.env.API_KEY },
    headers: {
      'Content-Type': 'application/json',
    },
  };
  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

console.log('BodyFat controller created');
