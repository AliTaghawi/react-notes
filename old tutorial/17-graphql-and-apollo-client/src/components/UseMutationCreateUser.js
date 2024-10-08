import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CreateUser = gql`
  mutation createUser($name: String!, $username: String!, $email: String!) {
    createUser(input: {
      name: $name
      username: $username
      email: $email
      
    }) {
      id
      name
      username
      email
    }
  }
`

const UseMutationCreateUser = () => {
  const [userData , setUserData] = useState({
    name: '',
    username: '',
    email: '',
  })

  const [createUser, {loading, data, error, called}] = useMutation(CreateUser, {
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
    createUser()
  }
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input name='name' value={userData.name} onChange={chageHandler} />
        <input name='username' value={userData.username} onChange={chageHandler} />
        <input name='email' value={userData.email} onChange={chageHandler} />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default UseMutationCreateUser;