import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="brand-logo center">
            My Portfolio
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
