import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "Bearer Token";

axios.interceptors.request.use(
  (request) => {
    console.log(`A ${request.method} is sent to ${request.url}`);
    return request;
  },
  (error) => {
    console.log(error);
    return error;
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return {
      data: response.data,
      status: response.status,
    };
  },
  (error) => {
    console.log(error);
    return error;
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
