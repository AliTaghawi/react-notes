import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const DeleteUser = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) 
  }
`

const UseMutationDeleteUser = () => {
  const [id , setId] = useState(0)

  const [deleteUser, {loading, data, error, called}] = useMutation(DeleteUser, {
    variables: {
      id,
    }
  })
  console.log({loading, data, error, called})

  const chageHandler = event => {
    setId(event.target.value)
  }

  const submitHandler = event => {
    event.preventDefault()
    deleteUser()
  }
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input name='id' value={id} onChange={chageHandler} />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default UseMutationDeleteUser;