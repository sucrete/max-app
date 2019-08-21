import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="maxHeader">
        MAX ROSEN{"\n"}
        <span className="maxEditor">editor</span>
        <span className="maxDirector">DIRECTOR</span>
      </header>
    );
  }
}

export default Header;
