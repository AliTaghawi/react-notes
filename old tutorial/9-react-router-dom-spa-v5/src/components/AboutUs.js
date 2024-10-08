import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import AboutTeam from "./common/AboutTeam";
import AboutWorkPlace from "./common/AboutWorkPlace";

//styles
import styles from "./styles/common.module.css";

class AboutUs extends Component {
  next = () => {
    this.props.history.push("/blogs");
  };

  reset = () => {
    this.props.history.replace("/");
  };

  render() {
    return (
      <div className={styles.common}>
        <h1>About Us</h1>
        <p>{this.props.content}</p>
        <div>
          <button onClick={this.next}>next</button>
          <button onClick={this.reset}>reset</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/aboutus/team">About team</Link>
          <Link to="/aboutus/workplace">About work place</Link>
        </div>

        <Route path="/aboutus/team" component={AboutTeam} />
        <Route path="/aboutus/workplace" component={AboutWorkPlace} />
      </div>
    );
  }
}

export default AboutUs;
