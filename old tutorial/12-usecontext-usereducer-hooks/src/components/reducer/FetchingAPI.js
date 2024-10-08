import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  isLoading: true,
  data: [],
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        isLoading: false,
        data: action.payload,
        error: "",
      };
    case "ERROR":
      return {
        isLoading: false,
        data: [],
        error: "some thing went worng!",
      };
    default:
      return state;
  }
};

const FetchingAPI = () => {
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => dispatch({ type: "SUCCESS", payload: res.data }))
      .catch((err) => dispatch({ type: "ERROR" }));
  }, []);

  return (
    <div>
      {data.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.data.map((item) => <h2 key={item.id}>{item.title}</h2>)
      )}
      {data.error && <h1>{data.error}</h1>}
    </div>
  );
};

export default FetchingAPI;
