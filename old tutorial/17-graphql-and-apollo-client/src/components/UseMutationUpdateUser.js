import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const UpdateUser = gql`
  mutation updateUser($id: ID!, $name: String!, $username: String!) {
    updateUser(id: $id, input: {
      name: $name
      username: $username
    }) {
      id
      name
      username
      email,
      phone,
    }
  }
`

const UseMutationUpdateUser = () => {
  const [userData , setUserData] = useState({
    id: '',
    name: '',
    username: '',
  })

  const [updateUser, {loading, data, error, called}] = useMutation(UpdateUser, {
    variables: {
      ...userData,
    }
  })
  console.log({loading, data, error, called})

  const chageHandler = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    })
  }

  const submitHandler = event => {
    event.preventDefault()
    updateUser()
  }
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input name='id' value={userData.id} onChange={chageHandler} />
        <input name='name' value={userData.name} onChange={chageHandler} />
        <input name='username' value={userData.username} onChange={chageHandler} />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default UseMutationUpdateUser;