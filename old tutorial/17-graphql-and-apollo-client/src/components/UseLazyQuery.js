import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const GetUser = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id,
      name,
      email,
      phone
    }
  }
`

const UseLazyQuery = () => {
  const [id, setId] = useState(1);

  const [getUser, { loading, data, error, called }] = useLazyQuery(GetUser, {
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
      <button onClick={() => getUser()}>get data</button>
      {loading && <h1>Loading...</h1>}
      {error && <h2>Something went wrang!</h2>}
      {data && (
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

export default UseLazyQuery;