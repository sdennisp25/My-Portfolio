import React, { Component } from "react";
import "./intro.css";

class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="col s12 m3">
          <div class="card">
            <div class="card-image">
              <img src={require("../../images/MyClassPhoto.jpg")} />
            </div>
          </div>
        </div>
        <div class="card-action">
          <div class="col s12 m7">
            <div class="card">
              <div class="card-content" />
              <h3>About Me</h3>
              <div class="card-action" />
              <p>
                My name is Sipha Phaophongsavath! I also go by Dennis. I am the
                second youngest out of five kids. I was born and raised in
                Kearns Utah. Graduated from the University of Utah with my
                Bachelors in Physics. I am currently employed at a finance firm
                and have been there for a little over a year. On my free time I
                like to break dance, go hiking, workout, work on my car, and
                hang out with my puppy named Harper. I was highly involved in
                high school and transitioning into the University. I teach break
                dancing during the season, I played rugby, a part of the ball
                room dance team, and was activily a part of a leadership
                organization at the U. I currently am an alumni for my
                leadership organization and perform with a dance company called
                Junction. I like to stay involved and participate in
                extracurricular activities. I listen to a lot of old school rap
                and hip hop such as NWA, Notorious BIG, Eazy-E, Erik B and Rakim
                etc.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Intro;
