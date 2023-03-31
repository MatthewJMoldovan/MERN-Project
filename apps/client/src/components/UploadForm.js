import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UploadForm = (props) => {
  const { image, setImage, user, setUser } = props;
  const [bodyFatValue, setBodyFatValue] = useState(null);
  const [genderValue, setGenderValue] = useState(null);
  const [apiErrors, setApiErrors] = useState(null);
  const [apiStatus, setApiStatus] = useState(null);
  const [buttonStatus, setButtonStatus] = useState(null);
  const [imgSRC, setImgSRC] = useState(null);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImgSRC(base64);
    const inputImage = base64.split('base64,')[1];
    setImage({ ...image, image: inputImage });
  };

  const getBodyFat = async (image) => {
    await axios
      .post('http://localhost:8080/api', image)
      .then((res) => {
        console.log('Response: ', res);
        if (res.data.api_data.success === true) {
          setBodyFatValue(res.data.api_data.predictions[0].fat);
          setGenderValue(res.data.api_data.predictions[0].gender);
          setApiStatus(res.data.message);
          setImage({
            ...image,
            bodyFat: res.data.api_data.predictions[0].fat,
          });
          setUser({
            ...user,
            gender: res.data.api_data.predictions[0].gender,
            bodyFat: res.data.api_data.predictions[0].fat,
            image: imgSRC,
          });
        } else {
          setApiErrors(res.data.api_data.prediction.message);
          setApiStatus(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onGenderChange = (e) => {
    setImage({
      ...image,
      gender: e.target.value,
    });
  };

  const handleSubmitImage = (e) => {
    e.preventDefault();
    getBodyFat(image);
  };

  useEffect(() => {
    image.gender && image.image ? setButtonStatus(false) : setButtonStatus(true);
  }, [image]);

  let roundedBfValue = '';
  if (!user.bodyFat) {
    roundedBfValue = 0;
  } else {
    roundedBfValue = user.bodyFat.toFixed(2);
  }

  console.log(apiErrors);
  console.log(apiStatus);

  return (
    <>
      <form onSubmit={handleSubmitImage}>
        <div className="form-check form-check-inline mb-2" name="gender" value={user.gender} onChange={onGenderChange}>
          <input className="form-check-input" type="radio" name="gender" value="female" />
          <label className="form-check-label"> Female </label>
        </div>
        <div className="form-check form-check-inline" name="gender" value={user.gender} onChange={onGenderChange}>
          <input className="form-check-input" type="radio" name="gender" value="male" />
          <label className="form-check-label"> Male </label>
        </div>
        <div className="input-group mt-3">
          <input
            className="form-control"
            type="file"
            label="Image"
            name="image"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => handleFileUpload(e)}
          />
          <button className="btn btn-outline-secondary" disabled={buttonStatus}>
            Upload
          </button>
        </div>
        <div className="mt-3">
          {apiStatus === 'Request Fail' ? <p className="text-danger small"> {apiErrors} </p> : <p></p>}
          {apiStatus === 'Request Success' ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={imgSRC} alt="uploaded" style={{ width: '250px' }} />
              <h3 className="text-center">Your body fat is estimated to be {roundedBfValue}% </h3>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </form>
    </>
  );
};
