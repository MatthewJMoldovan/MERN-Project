import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { UserForm } from '../components/UserForm';

export const OneUser = (props) => {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${id}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (user === null) {
    return <h1>Loading...Pleast Wait!</h1>;
  }

  // name: '',
  // age: '',
  // gender: '',
  // height: '',
  // weight: '',
  // activityLevel: '',
  // goal: '',
  const { name, age, height, weight, activityLevel, goal } = user;

  return (
    <div className="container">
      <UserForm formType={'update'} user={user} setUser={setUser} />
    </div>
  );
};
