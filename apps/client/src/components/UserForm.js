import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const UserForm = (props) => {
  const { formType, user, setUser } = props;
  const [errorMessages, setErrorMessages] = useState(null);
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

  const onChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      [e.target.age]: e.target.value,
      [e.target.gender]: e.target.checked,
      [e.target.height]: e.target.value,
      [e.target.weight]: e.target.value,
      [e.target.activityLevel]: e.target.value,
      [e.target.goal]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (formType === 'create') {
      createUser(user);
      setUser({
        name: '',
        age: Number,
        gender: Boolean,
        height: Number,
        weight: Number,
        activityLevel: '',
        goal: '',
      });
    } else if (formType === 'update') {
      updateUser(user);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={onChangeHandler}
        />
        <label className="form-label">Name</label>
        {errorMessages?.name && <div className="text-danger small">{errorMessages.name.message}</div>}
      </div>
      <div className="form-floating mb-3">
        <input className="form-control" type="text" id="age" name="age" value={user.age} onChange={onChangeHandler} />
        <label className="form-label">Age</label>
        {errorMessages?.age && <div className="text-danger small">{errorMessages.age.message}</div>}
      </div>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          type="text"
          id="height"
          name="height"
          value={user.height}
          onChange={onChangeHandler}
        />
        <label className="form-label">Height (in inches)</label>
        {errorMessages?.height && <div className="text-danger small">{errorMessages.height.message}</div>}
      </div>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          type="text"
          id="weight"
          name="weight"
          value={user.weight}
          onChange={onChangeHandler}
        />
        <label className="form-label">weight (in pounds)</label>
        {errorMessages?.weight && <div className="text-danger small">{errorMessages.weight.message}</div>}
      </div>
      <div>
        <select
          class="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          id="activityLevel"
          name="activityLevel"
          onChange={onChangeHandler}
          value={user.activityLevel}
        >
          <option selected>Select activity level</option>
          <option value="sedentary">Sedentary</option>
          <option value="low active">Low Active</option>
          <option value="active">Active</option>
          <option value="very active">Very Active</option>
          <option value="strenuous activity">Strenuous Activity</option>
        </select>
        {errorMessages?.activityLevel && <div className="text-danger small">{errorMessages.activityLevel.message}</div>}
      </div>
      <div>
        <select
          class="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          id="goal"
          name="goal"
          onChange={onChangeHandler}
          value={user.goal}
        >
          <option selected>Select a goal</option>
          <option value="decrease body fat">Decrease body fat</option>
          <option value="increase endurance">Increase endurance</option>
          <option value="increase strength">Increase strength</option>
          <option value="muscle hypertrophy">Muscle hypertrophy</option>
          <option value="maintain health">Maintain health</option>
        </select>
        {errorMessages?.goal && <div className="text-danger small">{errorMessages.goal.message}</div>}
      </div>
      <div className="d-grid gap-2 d-md-flex mt-5">
        <Link to="/" className="btn btn-outline-dark mb-3">
          Cancel
        </Link>
        <input
          value={formType === 'create' ? 'Add a new user' : 'Edit User'}
          className="btn btn-outline-dark mb-3"
          type="submit"
        />
      </div>
    </form>
  );
};
