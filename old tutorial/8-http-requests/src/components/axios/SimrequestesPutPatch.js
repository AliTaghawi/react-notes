import React, { Component } from "react";
import axios from "axios";

class SimrequestesPutPatch extends Component {
  componentDidMount() {
    axios
      .all([
        // axios.get('/posts'),
        axios.patch("/posts/1", {
          body: "it's changed with patch method",
        }),
        axios.put("/posts/2", {
          body: "it's changed with put method",
        }),
      ])
      // .then(res => {
      //   console.log(res[0]);
      //   console.log(res[1]);
      //   console.log(res[2]);
      // })
      .then(
        axios.spread((post, patch, put) => {
          console.log(post);
          console.log(patch);
          console.log(put);
        })
      );
  }

  render() {
    return <div></div>;
  }
}

export default SimrequestesPutPatch;
