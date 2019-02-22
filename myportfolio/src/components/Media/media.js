import React, { Component } from "react";
import "./media.css";

class Media extends Component {
  linkedInClick() {
    window.location.assign(
      "https://www.linkedin.com/in/sipha-phaophongsavath-8740a0167/"
    );
  }
  githubClick() {
    window.location.assign("https://github.com/sdennisp25");
  }
  resumeClick() {
    window.location.assign("https://drive.google.com/file/d/1Kd6gf_-ejBjzBIHQt0NbONQAh6Wynlqv/view");
  }

  render() {
    return (
      <React.Fragment>
        <div className="media">
          <button
            className="event-button waves-effect waves-light btn"
            onClick={this.linkedInClick.bind(this)}
          >
            LinkedIn
          </button>

          <button
            className="event-button waves-effect waves-light btn"
            onClick={this.githubClick.bind(this)}
          >
            GitHub
          </button>
          <button
            className="event-button waves-effect waves-light btn"
            onClick={this.resumeClick.bind(this)}
          >
            Resume
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Media;
