import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { DeleteButton } from '../components/DeleteButton';

export const UsersList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    await axios.get('http://localhost:8080/api/users').then((res) => {
      setUsers(res.data);
    });
  };

  const removeUser = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  return (
    <div className="w-75 p-4 mx-auto" style={{ fontFamily: 'optima, sans-serif' }}>
      <div className="shadow mb-4 rounded border p-4 text-center">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Client</th>
              <th scope="col">Actions available</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              const { _id, name } = user;
              return (
                <tr key={i}>
                  <td className="align-middle fs-4">{name}</td>
                  <td>
                    <Link to={`/user/${_id}`} className="btn mx-1">
                      View
                    </Link>
                    <DeleteButton user={user} removeUser={removeUser} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
