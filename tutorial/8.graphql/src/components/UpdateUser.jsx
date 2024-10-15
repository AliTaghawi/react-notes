import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation updateUser($id: ID!, $name: String!) {
    updateUser(id: $id, input: { name: $name }) {
      id
      name
      email
      phone
    }
  }
`;

const UpdateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
  });

  const [updateUser, { loading, data, error, called }] = useMutation(
    CREATE_USER,
    {
      variables: formData,
    }
  );

  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(formData);
  };

  console.log({ loading, data, error, called });
  return (
    <div>
      <input
        type="text"
        value={formData.name}
        name="name"
        placeholder="name"
        onChange={changeHandler}
      />
      <input
        type="text"
        value={formData.id}
        name="id"
        placeholder="id"
        onChange={changeHandler}
      />
      <button onClick={() => updateUser()}>Create</button>
      <div>
        {loading && <h3>Loading...</h3>}
        {error && <h2>something went wrong!</h2>}
        {data && (
          <>
            <p>Id = {data.updateUser.id}</p>
            <h4>{data.updateUser.name}</h4>
            <p>{data.updateUser.email}</p>
            <p>{data.updateUser.phone}</p>
          </>
        )}
      </div>
    </div>
  );  
};

export default UpdateUser;
