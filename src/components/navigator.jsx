import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import rawr from "../rawr.gif";

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = { offset: -25, duration: 400 };
  }

  render() {
    return (
      <nav className="maxNav">
        <div className="maxName">MAX ROSEN</div>
        <span className="maxSpacer" />
        <ul className="navItemsContainer">
          <li className="navItem">
            <Link
              className="aLink"
              to="section1"
              spy={true}
              smooth={true}
              offset={this.state.offset}
              duration={this.state.duration}
            >
              About
            </Link>
          </li>
          <li className="navItem">
            <Link
              className="aLink"
              to="section2"
              spy={true}
              smooth={true}
              offset={this.state.offset}
              duration={this.state.duration}
            >
              Work
            </Link>
          </li>
          <li className="navItem">
            <Link
              className="aLink"
              to="section3"
              spy={true}
              smooth={true}
              offset={this.state.offset}
              duration={this.state.duration}
            >
              Awards
            </Link>
          </li>
          <li className="navItem">
            <Link
              className="aLink"
              to="section4"
              spy={true}
              smooth={true}
              offset={this.state.offset}
              duration={this.state.duration}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigator;
