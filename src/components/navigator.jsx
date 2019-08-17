import React, { Component } from "react";
import rawr from "../rawr.gif";

class Navigator extends Component {
  constructor(props) {
    super(props);

    this.state = { top: null, height: null };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  handleResize() {
    console.log(this.state.top);
    const comp = document.getElementsByClassName("navItemsContainer")[0];
    this.setState({
      top: comp.offsetTop,
      height: comp.offsetHeight
    });
  }

  componentDidMount() {
    const el = document.getElementsByClassName("navItemsContainer")[0];
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <nav className="maxNav">
        <img src={rawr} className="rawr" alt="dinosaurLogo" />
        <div className="maxSpacer" />
        <ul
          className={
            this.state.scroll > this.state.top
              ? "navItemsContainerFixed"
              : "navItemsContainer"
          }
        >
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
