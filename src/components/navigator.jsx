import React, { Component } from "react";
import rawr from "../rawr.gif";

class Navigator extends Component {
  render() {
    return (
      <nav className="maxNav">
        <img src={rawr} className="rawr" alt="dinosaurLogo" />
        <ul className="navItemsContainer">
          <li className="navItem">
            <a>About</a>
          </li>
          <li className="navItem">
            <a>Work</a>
          </li>
          <li className="navItem">
            <a>Awards</a>
          </li>
          <li className="navItem">
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigator;
