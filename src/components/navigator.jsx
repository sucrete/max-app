import React, { Component } from "react";
import rawr from "../assets/rawr.gif";

class Navigator extends Component {
  render() {
    return (
      <nav className="maxNav">
        <img src={rawr} alt="logo" />
        <ul>
          <li className="navItem">About</li>
          <li className="navItem">Work</li>
          <li className="navItem">Awards</li>
          <li className="navItem">Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navigator;
