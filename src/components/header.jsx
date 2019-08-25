import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="maxHeader">
        <span id="max">MAX</span> {"\n"}
        <span id="rosen">ROSEN</span>
        {"\n"}
        <span id="editor">EDITOR</span>
        {"\n"}
        <span id="director">DIRECTOR</span>
        {"\n"}
      </header>
    );
  }
}

export default Header;
