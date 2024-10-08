import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GetUser = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      username
      phone
    }
  }
`;

const QueriesWithVaribals = () => {
  const [id, setId] = useState(1);

  const { loading, data, error } = useQuery(GetUser, {
    variables: {
      id,
    },
  });

  console.log({ loading, data, error });

  const changHendler = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input
        value={id}
        onChange={changHendler}
        placeholder="Insert id, the default id is '1'"
      />
      {loading && <h1>Loading...</h1>}
      {error && <h2>Something went wrang!</h2>}
      {!loading && !!!error && (
        <div>
          <h3>{data.user.name}</h3>
          <p>id: {data.user.id}</p>
          <p>email: {data.user.email}</p>
          <p>phone: {data.user.phone}</p>
        </div>
      )}
    </div>
  );
};

export default QueriesWithVaribals;
