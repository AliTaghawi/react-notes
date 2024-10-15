import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

const UserOnClick = () => {
  const [id, setId] = useState(1);

  const [getUser, { loading, data, error, called }] = useLazyQuery(GET_USER, {
    variables: {
      id,
    },
  });

  console.log({ loading, data, error, called })

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => getUser()} >Get User</button>
      <div>
        {loading && <h3>Loading...</h3>}
        {error && <h2>something went wrong!</h2>}
        {data && (
          <>
            <p>Id = {data.user.id}</p>
            <h4>{data.user.name}</h4>
            <p>{data.user.email}</p>
            <p>{data.user.phone}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default UserOnClick;
