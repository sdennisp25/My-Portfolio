import React, { Component } from "react";
import "./portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Solo Projects</h2>

        <div className="row">
          <div className="col s12 m2">
            <div className="card">
              <div className="card-image">
                <img
                  src={require("../../images/Giphy API.png")}
                  alt="Giphy API"
                />
              </div>
              <div className="card-content">
                <a
                  className="image"
                  href="https://sdennisp25.github.io/Giphy-Project/"
                >
                  <span className="card-title">Giphy API</span>
                </a>
                <p>Input some searches and you'll get some Giphy images!</p>
              </div>
            </div>
          </div>
          <div className="col s12 m2">
            <div className="card">
              <div className="card-image">
                <img
                  src={require("../../images/Psychic Game.png")}
                  alt="Psychic Game"
                />
              </div>
              <div className="card-content">
                <a
                  className="image"
                  href="https://sdennisp25.github.io/Psychic-Game/"
                >
                  <span className="card-title">Psychic Game</span>
                </a>
                <p>
                  Play this simple psychic game! Guess the letter of the robot
                  and you win!
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m2">
            <div className="card">
              <div className="card-image">
                <img
                  src={require("../../images/SWgame.png")}
                  alt="Star Wars Game"
                />
              </div>
              <div className="card-content">
                <a
                  className="image"
                  href="https://sdennisp25.github.io/unit-4-game/"
                >
                  <span className="card-title">Star Wars Game</span>
                </a>
                <p>Fight eachother with the Star Wars game!</p>
              </div>
            </div>
          </div>
          <div className="col s12 m2">
            <div className="card">
              <div className="card-image">
                <img
                  src={require("../../images/SWhangman.png")}
                  alt="Star Wars Hangman"
                />
              </div>
              <div className="card-content">
                <a
                  className="image"
                  href="https://sdennisp25.github.io/Hangman-Game/"
                >
                  <span className="card-title">Star Wars Hangman</span>
                </a>
                <p>Play the Hangman-Game with the Star Wars terminology!</p>
              </div>
            </div>
          </div>
          <div className="col s12 m2">
            <div className="card">
              <div className="card-image">
                <img
                  src={require("../../images/Train Timesheet.png")}
                  alt="Train Timesheet"
                />
              </div>
              <div className="card-content">
                <a
                  className="image"
                  href="https://github.com/sdennisp25/Time-Train"
                >
                  <span className="card-title">Train Timesheet</span>
                </a>
                <p>
                  Late for your train? Input your information real-time to find
                  your next arrival!
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m2">
            <div className="card">
              <div className="card-image">
                <img
                  src={require("../../images/Trivia Survey.png")}
                  alt="Trivia Survey"
                />
              </div>
              <div className="card-content">
                <a
                  className="image"
                  href="https://sdennisp25.githsub.io/Basic-Trivia/"
                >
                  <span className="card-title">Trivia Survey</span>
                </a>
                <p>
                  Some Pokemon trivia! I guess we all have to fill out a form
                  like this once in a while.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m2">
            <div className="card">
              <div className="card-image">
                <img
                  src={require("../../images/eatdaburger.png")}
                  alt="Eat Da Burger"
                />
              </div>
              <div className="card-content">
                <a
                  className="image"
                  href="https://obscure-cliffs-56753.herokuapp.com/"
                >
                  <span className="card-title">Eat Da Burger</span>
                </a>
                <p>Just a simple application letting you know we are hungry!</p>
              </div>
            </div>
          </div>
          <div className="col s12 m2">
            <div className="card">
              <div className="card-image">
                <img
                  src={require("../../images/friendfinder.png")}
                  alt="Friend Finder"
                />
              </div>
              <div className="card-content">
                <a
                  className="image"
                  href="https://hidden-hollows-84695.herokuapp.com/"
                >
                  <span className="card-title">Friend Finder</span>
                </a>
                <p>Finish the survey to find friend match!</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Team Projects</h2>
        <div className="row">
          <div className="col s12 m2">
            <div className="card">
              <div className="card-image">
                <img
                  src={require("../../images/fixedsigns.png")}
                  alt="Fixed Signs"
                />
              </div>
              <div className="card-content">
                <a
                  className="image"
                  href="https://sdennisp25.github.io/fixedsigns/"
                >
                  <span className="card-title">Fixed Signs</span>
                </a>
                <p>
                  This is an application that helps people match with eachother,
                  based on your zodiac sign!
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m2">
            <div className="card">
              <div className="card-image">
                <img src={require("../../images/Banksys.png")} alt="Banksys" />
              </div>
              <div className="card-content">
                <a
                  className="image"
                  href="https://dry-woodland-92986.herokuapp.com/"
                >
                  <span className="card-title">Banksys</span>
                </a>
                <p>
                  Educating children on how to manage their funds! Hosted on
                  Heroku!
                </p>
              </div>
            </div>
          </div>

          <div className="col s12 m2">
            <div className="card">
              <div className="card-image">
                <img
                  src={require("../../images/alleyart.png")}
                  alt="Alley Art"
                />
              </div>
              <div className="card-content">
                <a
                  className="image"
                  href="https://fathomless-falls-83856.herokuapp.com/"
                >
                  <span className="card-title">Alley Art</span>
                </a>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2>Websites</h2>
        <div className="row">
          <div className="col s12 m2">
            <div className="card">
              <div className="card-image">
                {/* <img src={require("../../images/JunctionDanceCo.png")} alt="Junction Dance Co"/> */}
              </div>
              <div className="card-content">
                <a
                  className="image"
                  href="https://sdennisp25.github.io/Junction-Website/#/"
                >
                  <span className="card-title">Junction Dance Co</span>
                </a>
                <p>
                  This is a website built for a Non-Profit Organization!
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Portfolio;
