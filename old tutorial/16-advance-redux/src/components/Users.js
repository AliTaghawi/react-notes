import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//redux actions
import { fetchUsers } from "../redux/users/usersActions";

const Users = () => {
  const data = useSelector((state) => state.usersState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {data.loading ? (
        <h1>Loading...</h1>
      ) : data.error ? (
        <p>{data.error}</p>
      ) : (
        data.users.map((user) => <h3 key={user.id}>{user.name}</h3>)
      )}
    </div>
  );
};

export default Users;
