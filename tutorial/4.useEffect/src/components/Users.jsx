import React, { useEffect, useState } from "react";
import Child from "./Child";

const users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(true);
  const [id, setId] = useState("");

  // useEffect(() => {
  //   console.log("mounting");
  //   const fetchUsers = async () => {
  //     try {
  //       const json = await fetch("https://jsonplaceholder.typicode.com/users");
  //       const data = await json.json();
  //       setUsers(data);
  //       console.log(data);
  //     } catch (error) {
  //       setError(true);
  //     }
  //   };
  //   fetchUsers();
  // }, []);

  useEffect(() => {
    console.log("mounting");
    const controller = new AbortController();
    const fetchUsers = async () => {
      try {
        const json = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${id}`,
          { signal: controller.signal }
        );
        const data = await json.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(true);
        }
      }
    };
    fetchUsers();
    return () => {
      controller.abort();
      console.log("cleanUp");
    };
  }, [id]);


  
  return (
    <div>
      {show && <Child />}
      <button onClick={() => setShow(!show)}>
        Delete/Show child component
      </button>
      <br />
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      {!users.length && !error && <h3>Loading...</h3>}
      {!users.length && error && <h3>Something went wrong!</h3>}
      {/* {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))} */}
    </div>
  );
};

export default users;
