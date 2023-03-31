import MaintainHealthWorkout from '../components/MaintainHealthWorkout';
import MuscleHypertrophyWorkout from '../components/MuscleHypertropheyWorkout';
import IncreaseStrengthWorkout from '../components/IncreaseStrengthWorkout';
import IncreaseEnduranceWorkout from '../components/IncreaseEnduranceWorkout';
import DecreaseBodyfatWorkout from '../components/DecreaseBodyfatWorkout';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Workout = (props) => {
  const [goal, setGoal] = useState('');
  const [workoutComponent, setWorkoutComponent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${id}`)
      .then((res) => {
        const { goal } = res.data;

        setGoal(goal);
        console.log(res.data);
        setWorkoutComponent(goal);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  if (workoutComponent === null) {
    return <h1>Loading...Pleast Wait!</h1>;
  }

  let workoutView;
  if (goal === 'muscle hypertrophy') {
    workoutView = <MuscleHypertrophyWorkout />;
  } else if (goal === 'decrease body fat') {
    workoutView = <DecreaseBodyfatWorkout />;
  } else if (goal === 'increase endurance') {
    workoutView = <IncreaseEnduranceWorkout />;
  } else if (goal === 'increase strength') {
    workoutView = <IncreaseStrengthWorkout />;
  } else {
    workoutView = <MaintainHealthWorkout />;
  }

  return <div>{workoutView}</div>;
};
