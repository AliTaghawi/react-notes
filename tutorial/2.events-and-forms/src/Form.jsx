import React, { useState } from 'react';

const Form = () => {
  const [state, setState] = useState({
    userName: '',
    email: '',
    password: '',
    roll: 'user',
    gender: 'M',
    policy: false,
  })

  const changeHandler = (event) => {
    const name = event.target.name
    if (name === "policy") {
      setState((state) => ({...state, policy: !state.policy}))
    } else {
      setState((state) => ({...state, [name]: event.target.value}))
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(state)
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name='userName' value={state.userName} placeholder='userName' onChange={changeHandler} />
      <input type="email" name='email' value={state.email} placeholder='Email' onChange={changeHandler}/>
      <input type="password" name='password' value={state.password} placeholder='password' onChange={changeHandler}/>
      <select name="roll" onChange={changeHandler}>
        <option value="user">User</option>
        <option value="writer">Writer</option>
        <option value="admin">Admin</option>
      </select>
      <div>
        <label>Male
          <input type="radio" name='gender' value='M' onChange={changeHandler} checked={state.gender === "M"} />
        </label>
        <label>Female
          <input type="radio" name='gender' value='F' onChange={changeHandler} checked={state.gender === "F"} />
        </label>
      </div>
      <input type="checkbox" name="policy" checked={state.policy} onChange={changeHandler} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;