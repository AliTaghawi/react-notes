import React, { Component } from "react";

class Posts extends Component {
  render() {
    const { title, body, deletePost } = this.props;
    return (
      <div
        style={{ border: "1px solid gray", padding: ".5rem", margin: "1rem" }}
      >
        <h4>{title}</h4>
        <p>{body}</p>
        <button onClick={deletePost}>delete Post</button>
      </div>
    );
  }
}

export default Posts;
