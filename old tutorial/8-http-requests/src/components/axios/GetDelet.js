import React, { Component } from "react";
import SentPost from "./SentPost";
import Posts from "./Posts";

import axios from "axios";

class GetDelet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isError: false,
    };
  }

  componentDidMount() {
    axios
      .get("/posts")
      .then((response) =>
        this.setState({
          data: response.data,
        })
      )
      .catch(() => this.setState({ isError: true }));
  }

  deletePost = (id) => {
    axios.delete(`/posts/${id}`).then((res) => console.log(res));
  };

  render() {
    return (
      <div>
        <SentPost />
        {this.state.isError ? (
          <h1>an error accured</h1>
        ) : (
          this.state.data.map((post) => (
            <Posts
              key={post.id}
              title={post.title}
              body={post.body}
              deletePost={() => this.deletePost(post.id)}
            />
          ))
        )}
      </div>
    );
  }
}

export default GetDelet;
