import axios from "axios";

const fetchUsersRequest = () => {
  return {
    type: "FETCHUSERSREQUEST",
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: "FETCHUSERSSUCCESS",
    payload: users,
  };
};

const fetchUsersError = (error) => {
  return {
    type: "FETCHUSERSERROR",
    payload: error,
  };
};

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUsersError(error.massege));
      });
  };
};

export { fetchUsers };