import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const PostMethod = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
  });

  const changeHandler = (event) => {
    setForm((form) => ({ ...form, [event.target.name]: event.target.value }));
  };

  const createUser = data => {
    return axios.post("https://jsonplaceholder.typicode.com/users", data)
  }

  const {data, /* isLoading, ... */ mutate} = useMutation(createUser)

  console.log(data)

  return (
    <div>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={changeHandler}
        placeholder="name"
      />
      <br />
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={changeHandler}
        placeholder="username"
      />
      <br />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={changeHandler}
        placeholder="email"
      />
      <br />
      <button onClick={() => mutate(form)}>Create</button>
    </div>
  );
};

export default PostMethod;
