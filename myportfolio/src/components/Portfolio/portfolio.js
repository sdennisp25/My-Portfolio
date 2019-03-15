import React, { Component } from "react";

import "./portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <h4>Solo Projects</h4>

          <div className="col s12 m3">
            <div className="card card-gallery">
              <a href="https://sdennisp25.github.io/Giphy-Project/">
                <div className="text">Giphy API</div>
                <div className="project1 overlay" />
              </a>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card card-gallery">
              <a href="https://sdennisp25.github.io/Psychic-Game/">
                <div className="text">Psychic Game</div>
                <div className="project2 overlay" />
              </a>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card card-gallery">
              <a href="https://sdennisp25.github.io/unit-4-game/">
                <div className="text">Star Wars RPG</div>
                <div className="project3 overlay" />
              </a>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card card-gallery">
              <a href="https://sdennisp25.github.io/Hangman-Game/">
                <div className="text">Hangman</div>
                <div className="project4 overlay" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m3">
            <div className="card card-gallery">
              <a href="https://sdennisp25.github.io/Time-Train/">
                <div className="text">Time Train</div>
                <div className="project5 overlay" />
              </a>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card card-gallery">
              <a href="https://sdennisp25.githsub.io/Basic-Trivia/">
                <div className="text">Trivia</div>

                <div className="project6 overlay" />
              </a>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card card-gallery">
              <a href="https://obscure-cliffs-56753.herokuapp.com/">
                <div className="text">Eat Da Burger</div>

                <div className="project7 overlay" />
              </a>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card card-gallery">
              <a href="https://hidden-hollows-84695.herokuapp.com/">
                <div className="text">Friend Finder</div>
                <div className="project8 overlay" />
              </a>
            </div>
          </div>
        </div>

        {/* ============================================= */}

        <div className="row">
          <h4>Team Projects</h4>

          <div className="col s12 m4">
            <div className="card card-gallery">
              <a href="https://sdennisp25.github.io/fixedsigns/">
                <div className="text">Fixed Signs</div>
                <div className="project9 overlay" />
              </a>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card card-gallery">
              <a href="https://dry-woodland-92986.herokuapp.com/">
							<div className="text">Banksys</div>

                <div className="project10 overlay" />
              </a>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="card card-gallery">
              <a href="https://hidden-hollows-84695.herokuapp.com/">
                <div className="text">Alley Art</div>
                <div className="project11 overlay" />
              </a>
            </div>
          </div>
        </div>
        {/* ============================================= */}

        <div className="row">
          <h4>Websites</h4>
          <div className="col s12 m6">
            <div className="card card-gallery">
              <a href="https://sdennisp25.github.io/Junction-Website/#/">
                <div className="text">Junction Dance Co</div>
                <div className="project12 overlay" />
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Portfolio;
