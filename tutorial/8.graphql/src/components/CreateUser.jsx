import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $username: String!
    $email: String!
    $phone: String!
  ) {
    createUser(
      input: {
        name: $name
        username: $username
        email: $email
        phone: $phone
      }
    ) {
      id
      name
      email
      phone
    }
  }
`;

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const [createUser, { loading, data, error, called }] = useMutation(
    CREATE_USER,
    {
      variables: {...formData},
    }
  );

  const changeHandler = (event) => {
    setFormData(prev => ({...prev, [event.target.name]: event.target.value}))
    console.log(formData)
  }
  
  console.log({ loading, data, error, called });
  return (
    <div>
      <input type="text" value={formData.name} name="name" placeholder="name" onChange={changeHandler} />
      <input type="text" value={formData.username} name="username" placeholder="username" onChange={changeHandler} />
      <input type="text" value={formData.email} name="email" placeholder="email" onChange={changeHandler} />
      <input type="text" value={formData.phone} name="phone" placeholder="phone" onChange={changeHandler} />
      <button onClick={() => createUser()}>Create</button>
      <div>
        {loading && <h3>Loading...</h3>}
        {error && <h2>something went wrong!</h2>}
        {data && (
          <>
            <p>Id = {data.createUser.id}</p>
            <h4>{data.createUser.name}</h4>
            <p>{data.createUser.email}</p>
            <p>{data.createUser.phone}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateUser;
