// import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom"
// import axios from "axios";
import { useUsersData } from "../hooks/queries";

const Users = () => {
  // const fetchData = async () => {
  //   // return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
  //   //   res.json()
  //   // );
  //   // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   // return res.json();
  //   return axios.get("https://jsonplaceholder.typicode.com/users")
  // };

  // const fetchData = () => axios.get("https://jsonplaceholder.typicode.com/users");

  const { data, isLoading, isError, error, isFetching, refetch } = useUsersData()

  // const { data, isLoading, isError, error, isFetching, refetch } = useQuery(["users"], fetchData, {
  //   cacheTime: 10 * 1000, // time that caching data (millisecond)
  //   // staleTime: 2 * 60 * 1000, // time that data will refetching (millisecond)
  //   // refetchOnMount: false, // will prevent refetching
  //   // refetchOnWindowFocus: false, // will prevent refetching when changing window's
  //   // refetchInterval: 2 * 1000, // will refetching every (time: millisecond) 
  //   // enabled: false, // used when we need to click button to fetch
  //   // onSuccess: (data) => console.log("success", data),
  //   // onError: (error) => console.log("error", error.message)
  // });

  console.log({ data, isLoading, isError, error, isFetching });

  // if (isLoading) return <h2>Loading...</h2>;
  // if (isError) return <h2>something went wrong! - {error.message}</h2>;
  return (
    <div>
      <button onClick={refetch}>fetch</button>
      {isLoading && isFetching && <h1>Loading...</h1>}
      {data?.data.map((i) => (
        <Link key={i.id} to={`/users/${i.id}`}><h4>{i.name}</h4></Link>
      ))}
    </div>
  );
};

export default Users;
