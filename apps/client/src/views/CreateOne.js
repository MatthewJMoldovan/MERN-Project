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
  });

  return (
    <div className="container">
      <p>Add a new user!</p>
      <UserForm formType={'create'} user={user} setUser={setUser} />
    </div>
  );
};
