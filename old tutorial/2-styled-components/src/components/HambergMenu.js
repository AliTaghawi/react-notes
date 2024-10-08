import React, { Component } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Div = styled.div`
  width: 25px;
  height: 25px;
  z-index: 20;
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  div {
    width: 100%;
    height: 3px;
    border-radius: 5px;
    transform-origin: 1px;
    transition: all .3s ease;
    background: ${(props) => (props.open ? "#fff" : "blue")};
    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props) =>
        props.open ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${(props) => (props.open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

class HambergMenu extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  clickHandler = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      <>
        <Div open={this.state.open} onClick={this.clickHandler}>
          <div></div>
          <div></div>
          <div> </div>
        </Div>
        <Navbar open={this.state.open} />
      </>
    );
  }
}

export default HambergMenu;
