import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../context/Context'

const User = () => {
  const { users, setUsers } = useContext(UserContext);

  return (
    <div>
      <h1 className="text-3xl">UserList</h1>
      <div className="mt-10 w-1/3">
        {users.map((u) => (
          <Link to={`/user/${u.id}`} className="p-3 bg-blue-100 block mb-2" key={u.id}>
            {u.username}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
