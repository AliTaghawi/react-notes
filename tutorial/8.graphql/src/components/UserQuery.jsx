import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

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

const UserQuery = () => {
  const [id, setId] = useState(1);

  const { loading, data, error } = useQuery(GET_USER, {
    variables: {
      id,
    },
  });

  // console.log({loading, data, error})

  if (error) return <h2>something went wrong!</h2>;

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
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

export default UserQuery;
