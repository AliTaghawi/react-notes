import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios'

axios.defaults.baseURL = "https://fakestoreapi.com"
axios.interceptors.response.use(res => res.data, err => console.log(err.message))

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
