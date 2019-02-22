import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s3" />
        <form className="col s6">
          <h2>Questions?</h2>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">face</i>

              <input
                placeholder="First and Last Name"
                id="first_name"
                type="text"
                className="validate"
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>

              <input
                placeholder="E-mail Address"
                id="email"
                type="email"
                className="validate"
              />
            </div>
          </div>
          <div className="row">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea
                  placeholder="Your message"
                  id="icon_prefix2"
                  className="materialize-textarea"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;