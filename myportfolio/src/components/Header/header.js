import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  linkedInClick() {
    window.location.assign(
      "https://www.linkedin.com/in/sipha-phaophongsavath-8740a0167/"
    );
  }
  githubClick() {
    window.location.assign("https://github.com/sdennisp25");
  }
  resumeClick() {
    window.location.assign(
      "https://drive.google.com/file/d/1Kd6gf_-ejBjzBIHQt0NbONQAh6Wynlqv/view"
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="brand-logo center">My Portfolio</div>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a onClick={this.linkedInClick.bind(this)}>LinkedIn</a>
            </li>
            <li>
              <a onClick={this.githubClick.bind(this)}>GitHub</a>
            </li>
            <li>
              <a onClick={this.resumeClick.bind(this)}>Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
