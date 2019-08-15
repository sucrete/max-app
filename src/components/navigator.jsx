import React, { Component } from "react";
import rawr from "../rawr.gif";

class Navigator extends Component {
  render() {
    return (
      <nav className="maxNav">
        <img src={rawr} className="rawr" alt="dinosaurLogo" />
        <ul className="navItemsContainer">
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
