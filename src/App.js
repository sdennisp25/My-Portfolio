import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Introduction";
import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
				<Header />
				<Intro />
				<Portfolio />
				{/* <Contact /> */}
				<Footer />
      </React.Fragment>
    );
  }
}

export default App;
