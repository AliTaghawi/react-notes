import React, { Component } from "react";

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          data: response,
        })
      );
  }

  sentPost = () => {
    const body = JSON.stringify({
      title: "test",
      body: "This is test for training",
      userId: 1,
    });

    const headers = {
      "Content-type": "application/json; charset=UTF-8",
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: body,
      headers: headers,
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  deletePost = (post) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
    console.log("delete handeler");
  };

  render() {
    return (
      <div>
        <button onClick={this.sentPost}>SentPost</button>

        <h1>Posts</h1>
        {this.state.data.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <button onClick={() => this.deletePost(post.id)}>DeletePost</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Fetch;
