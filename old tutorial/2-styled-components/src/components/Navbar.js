import React, { Component } from "react";
import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 1rem 0;
  z-index: 10;
  li {
    padding: 1rem 3rem;
    font-size: 1.1rem;
    letter-spacing: 1px;
    transition: all 0.3s ease;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: blue;
    position: fixed;
    top: 0;
    right: ${(props) => (props.open ? "0" : "-320px")};
    transition: all 0.3s ease;
    width: 300px;
    height: 100vh;
    padding-top: 5rem;
    padding-right: 4rem;
    li {
      color: #fff;
    }
  }
`;

class Navbar extends Component {
  render() {
    const { open } = this.props;
    return (
      <UL open={open}>
        <li>Home</li>
        <li>GitHub</li>
        <li>AboutUs</li>
        <li>Contact</li>
      </UL>
    );
  }
}

export default Navbar;
