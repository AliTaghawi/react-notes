import React from "react";
import { useQuery, gql } from "@apollo/client";

const GetUsers = gql`
  query {
    users {
      data {
        id
        name
        email
        phone
      }
    }
  }
`;

const FirstQueryRequest = () => {
  const { loading, error, data } = useQuery(GetUsers);

  console.log(loading, error, data);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <div>Something went wrang!</div>;

  return (
    <div>
      {data.users.data.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default FirstQueryRequest;
