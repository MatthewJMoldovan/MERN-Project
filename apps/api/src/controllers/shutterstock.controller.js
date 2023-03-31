import sstk from 'shutterstock-api';

const token =
  'v2/WTNPWWVVQzFpMjBpTDU1a0xKTm9RSExNaGhxMXlyeFYvMzE1OTI0NjczL2N1c3RvbWVyLzQvRUlKd1I5VzI3OEZqOWYxRS01cDJNbmljaHZLMlE2SS1HUVhncDNyUEFQclBxUGtYcGZRdU5QOWJ2TnpORXFZRzVndy1hSDRNZUExY3Q1TUoydFRrd0wzRGlrOC1Jc3FhS2lmWHAwdG5RbVhVMExnZlAtOG5ueDJLUVUwUnFYVnp5aXJYbFJuWS1zU0tKWFJyVjhob3Bra2RKTzM1NlB1ekNwd2JET0IyY0M4Vm9fcVFlOGg3TjhsRU56WmtzaklEYU9HbzVtTXJiX3EwcnJ6ZUsyRlo1dy80ckNUVTUxb3Z6RF9Nenl4dkFUSVRR';
// const token =
//   'v2/aWJ3WkpWTDAxSGlBNHl5Q3ZiY3ZMaGxuTzRiVWtHUXIvMzE1OTI0NjczL2N1c3RvbWVyLzQvY2RyVXRBczNQcEVQV0NrcV9HZTRGM2NaVk1lWmxqOVBXZG1ya1lVc2s2ZVdBMUFtQjJPQlE1eXdMaFFmWTUzVUdWenpwUXE0cTNSbkkyZ0NkendPVlJET0gyU3NSRHgwZWdCSFIxMnp3MU92c3RwUm9GNnRGWXR3eEJIZjlFYmtUcUlNdmNLa0hlX01MSVhlN2k1V3BuMmhNOW1yOTdjenJIeUhfOTFxaXk2cm5HZXNkRC1SZDdESDdnQk1yQlVQMTBVeDJjYktkcjFmOXhNM1Z5QjBDQS9HcjI2aEhOd0FWZ0Nld1JBMUtaZHJ3';
sstk.setAccessToken(token);

const imagesApi = new sstk.ImagesApi();

const queryGymParams = {
  query: 'exercise',
  image_type: ['photo'],
  orientation: 'horizontal',
  per_page: 8,
  // people_number: 3,
};

const queryFitnessParams = {
  query: 'gym',
  image_type: ['photo'],
  orientation: 'horizontal',
  per_page: 21,
  // people_number: 3,
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
