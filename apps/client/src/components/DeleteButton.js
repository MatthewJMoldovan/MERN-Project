import React from 'react';
import axios from 'axios';

export const DeleteButton = (props) => {
  const { user, removeUser } = props;
  const deleteUser = (userId) => {
    axios
      .delete('http://localhost:8080/api/users/' + userId)
      .then((res) => {
        removeUser(userId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button className="btn btn-outline-danger" onClick={(e) => deleteUser(user._id)}>
      Delete
    </button>
  );
};
