import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserForm } from '../components/UserForm';

export const CreateUser = (props) => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    activityLevel: '',
    goal: '',
    image: '',
    bodyFat: '',
  });
  const [image, setImage] = useState({
    image: '',
    gender: '',
    bodyFat: '',
  });
  return (
    <div className="container" style={{ fontFamily: 'optima, sans-serif' }}>
      <p>Add a new user!</p>
      <UserForm formType={'create'} user={user} setUser={setUser} image={image} setImage={setImage} />
    </div>
  );
};
