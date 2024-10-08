import React, { Component } from "react";
import axios from "axios";

class SentPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  SentPost = () => {
    axios.post("/posts", this.state)
      .then((res) => console.log(res));
  };

  render() {
    const { title, body } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <input name="title" value={title} onChange={this.changeHandler} />
        <input name="body" value={body} onChange={this.changeHandler} />
        <button onClick={this.SentPost}>setPost</button>
      </div>
    );
  }
}

export default SentPost;
