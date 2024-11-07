import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import axios from 'axios'
import App from "./App.jsx";
import store from "./app/store.js";
import "./index.css";

axios.defaults.baseURL = "https://fakestoreapi.com"
axios.interceptors.response.use(res => res.data, err => console.log(err.message))

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>
);
