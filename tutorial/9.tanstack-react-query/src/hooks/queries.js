import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUsersData = () => {
  const fetchData = () =>  axios.get("https://jsonplaceholder.typicode.com/users");

  return useQuery(["users"], fetchData, {
    cacheTime: 10 * 1000,
  });
};

const useUserDetails = (id) => {
  const fetchUserDetails = ({queryKey}) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${queryKey[1]}`)
  } 

  return useQuery(["users", id], fetchUserDetails)

}

export { useUsersData , useUserDetails}