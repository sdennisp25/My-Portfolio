import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">
            My Portfolio
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
