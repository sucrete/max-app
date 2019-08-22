import React, { Component } from "react";
import { debounce } from "throttle-debounce";
import rawr from "../rawr.gif";

class Navigator extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { top: null };

  //   this.handleScroll = this.handleScroll.bind(this);
  //   this.handleResize = this.handleResize.bind(this);
  // }

  // handleScroll = () => {
  //   const navElement = document.getElementsByClassName("navItemsContainer")[0];
  //   console.log("navElement offset top = " + navElement.offsetTop);
  //   this.setState({
  //     scroll: window.scrollY,
  //     top: navElement.offsetTop
  //   });
  //   console.log(
  //     "window.scrollY = " +
  //       window.scrollY +
  //       " " +
  //       "this.state.scroll = " +
  //       this.state.scroll +
  //       " " +
  //       "elementOffset = " +
  //       this.state.top +
  //       " " +
  //       (this.state.scroll > this.state.top)
  //   );
  // };

  // handleResize() {
  //   const navElement = document.getElementsByClassName("navItemsContainer")[0];
  //   console.log("resiiiiiiiiiizzzzzze " + navElement.offsetTop);
  //   this.setState({
  //     top: navElement.offsetTop
  //   });
  // }

  // componentDidMount() {
  //   const el = document.getElementsByClassName("navItemsContainer")[0];
  //   this.setState({
  //     top: el.offsetTop,
  //     height: el.offsetHeight
  //   });
  //   window.addEventListener("scroll", this.handleScroll);
  //   window.addEventListener("resize", this.handleResize);
  //   console.log("mouuunnnnttteeeddddd " + el.offsetTop);
  //   console.log("offsetHeight = " + el.offsetHeight);
  // }
  // componentDidUpdate() {
  //   console.log("component updatedddd");
  //   // this.state.scroll > this.state.top
  //   //   ? (document.body.style.paddingTop = `calc(21vh + ${this.state.height}px`)
  //   //   : (document.body.style.paddingTop = "21vh");
  // }

  render() {
    return (
      <nav className="maxNav">
        <img src={rawr} className="rawr" alt="dinosaurLogo" />
        <div className="maxSpacer" />
        <ul
          className="navItemsContainer"
          // {
          //   window.scrollY > this.state.top
          //     ? "navItemsContainer navFixed"
          //     : "navItemsContainer"
          // }
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
