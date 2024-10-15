import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      data {
        id
        name
        username
        email
        phone
      }
    }
  }
`;

const UsersQuery = () => {
  const { loading, data, error } = useQuery(GET_USERS);
  console.log({ loading, data, error });

  if (error) return <h3>something went wrong!</h3>
  
  return (
    <>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        data.users.data.map((user) => (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))
      )}
    </>
  );
};

export default UsersQuery;
