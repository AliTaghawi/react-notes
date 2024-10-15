import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

const DeleteUser = () => {
  const [id, setID] = useState("")

  const [deleteUser, { loading, data, error, called }] = useMutation(
    CREATE_USER,
    {
      variables: {
        id
      },
    }
  );

  console.log({ loading, data, error, called });
  return (
    <div>
      <input
        type="text"
        value={id}
        placeholder="id"
        onChange={e => setID(e.target.value)}
      />
      <button onClick={() => deleteUser()}>Create</button>
      <div>
        {loading && <h3>Loading...</h3>}
        {error && <h2>something went wrong!</h2>}
        {data && data.deleteUser && <h3>User Deleted Successfully</h3>}
      </div>
    </div>
  );
};

export default DeleteUser;
