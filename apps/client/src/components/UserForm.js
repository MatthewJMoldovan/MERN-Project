import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UploadForm } from './UploadForm';

export const UserForm = (props) => {
  const { formType, user, setUser } = props;
  const [errorMessages, setErrorMessages] = useState(null);
  const { image, setImage } = props;
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(formType);
    if (formType === 'update') {
      axios.get('http://localhost:8080/api/users/' + params.id).then((res) => {
        setUser(res.data);
      });
    }
  }, []);

  const createUser = async (user) => {
    await axios
      .post('http://localhost:8080/api/users', user)
      .then((res) => {
        console.log('Response: ', res);
        navigate('/user/all');
      })
      .catch((err) => {
        console.log(err);
        setErrorMessages(err?.response?.data?.errors);
      });
  };

  const updateUser = async (user) => {
    axios
      .put('http://localhost:8080/api/users/' + params.id, user)
      .then((res) => {
        console.log('Response: ', res);
        navigate('/user/all');
      })
      .catch((err) => {
        console.log(err);
        setErrorMessages(err?.response?.data?.errors);
      });
  };

  const onGoalChange = (e) => {
    setUser({
      ...user,
      goal: e.target.value,
    });
  };

  const onActivityChange = (e) => {
    setUser({
      ...user,
      activityLevel: e.target.value,
    });
  };

  const onNameChange = (e) => {
    setUser({
      ...user,
      name: e.target.value,
    });
  };

  const onAgeChange = (e) => {
    setUser({
      ...user,
      age: e.target.value,
    });
  };

  const onHeightChange = (e) => {
    setUser({
      ...user,
      height: e.target.value,
    });
  };

  const onWeightChange = (e) => {
    setUser({
      ...user,
      weight: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (formType === 'create') {
      createUser(user);
    } else if (formType === 'update') {
      updateUser(user);
    }
  };

  console.log(user);

  return (
    <>
      <div className="row">
        <form onSubmit={onSubmitHandler} className="col-sm-5 col-md-6">
          {errorMessages?.name && <div className="text-danger small">{errorMessages.name.message}</div>}
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={onNameChange}
            />
            <label className="form-label">Name</label>
          </div>
          <div>
            {errorMessages?.activityLevel && (
              <div className="text-danger small">{errorMessages.activityLevel.message}</div>
            )}
            <select
              className="form-select form-select-md mb-3"
              aria-label=".form-select-lg example"
              id="activityLevel"
              name="activityLevel"
              value={user.activityLevel}
              onChange={onActivityChange}
            >
              <option defaultValue="">Select activity level</option>
              <option value="sedentary">Sedentary</option>
              <option value="low active">Low Active</option>
              <option value="active">Active</option>
              <option value="very active">Very Active</option>
              <option value="strenuous activity">Strenuous Activity</option>
            </select>
          </div>
          <div>
            {errorMessages?.goal && <div className="text-danger small">{errorMessages.goal.message}</div>}
            <select
              className="form-select form-select-md mb-3"
              aria-label=".form-select-lg example"
              id="goal"
              name="goal"
              value={user.goal}
              onChange={onGoalChange}
            >
              <option defaultValue="">Select a goal</option>
              <option value="decrease body fat">Decrease body fat</option>
              <option value="increase endurance">Increase endurance</option>
              <option value="increase strength">Increase strength</option>
              <option value="muscle hypertrophy">Muscle hypertrophy</option>
              <option value="maintain health">Maintain health</option>
            </select>
          </div>

          {errorMessages?.age && <div className="text-danger small">{errorMessages.age.message}</div>}
          <div className="form-floating mb-3">
            <input className="form-control" type="number" id="age" name="age" value={user.age} onChange={onAgeChange} />
            <label className="form-label">Age</label>
          </div>
          {errorMessages?.height && <div className="text-danger small">{errorMessages.height.message}</div>}
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="number"
              id="height"
              name="height"
              value={user.height}
              onChange={onHeightChange}
            />
            <label className="form-label">Height (in inches)</label>
          </div>
          {errorMessages?.weight && <div className="text-danger small">{errorMessages.weight.message}</div>}
          <div className="form-floating mb-3">
            <input
              className="form-control"
              type="number"
              id="weight"
              value={user.weight}
              name="weight"
              onChange={onWeightChange}
            />
            <label className="form-label">Weight (in pounds)</label>
          </div>
          <div className="d-grid col-6 mx-auto position-absolute bottom-0 start-50 translate-middle-x">
            <input
              value={formType === 'create' ? 'Add a new user' : 'Edit User'}
              className="btn btn-outline-dark"
              type="submit"
            />
            <Link to="/" className="btn btn-sm">
              Cancel
            </Link>
          </div>
        </form>

        <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
          {errorMessages?.gender && <div className="text-danger small">{errorMessages.gender.message}</div>}
          <label className="form-text mb-2"> Select your gender</label>
          <UploadForm image={image} setImage={setImage} user={user} setUser={setUser} />
        </div>
      </div>
    </>
  );
};
