import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/users`).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Registered Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.username} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;