import React, { useEffect, useState } from 'react';
import axios from 'axios'

const GetData = () => {
  const [data , setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => setData(res.data))
  }, [])

  return (
    <div>
      {data.length ? 
      data.map(item => <h3 key={item.id}>{item.title}</h3>):
      <h2>loading...</h2>}
    </div>
  );
};

export default GetData;