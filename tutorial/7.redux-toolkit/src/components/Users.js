import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers } from '../features/users/usersSlice'

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
      <h2>Users</h2>
      {users.loading ? <h3>Loading...</h3> : null}
      {users.users.length ? users.users.map(user => <p key={user.id}>{user.name}</p>) : null }
      {users.error ? <h3>{users.error}</h3> : null}
    </div>
  );
};

export default Users;