import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="maxHeader">
        <span id="director">DIRECTOR</span>
        {"\n"}
        <span id="editor">EDITOR</span>
        {"\n"}
        <span id="cinematographer">CINEMATOGRAPHER, </span>
        {"\n"}
        <span id="nyc">based in NYC</span>
      </header>
    );
  }
}

export default Header;
