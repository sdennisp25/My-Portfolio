import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
  render() {
    return (
      <div class="row">
        <div class="col s3" />
        <form class="col s6">
          <h2>Questions?</h2>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">face</i>

              <input
                placeholder="First and Last Name"
                id="first_name"
                type="text"
                class="validate"
              />
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">email</i>

              <input
                placeholder="E-mail Address"
                id="email"
                type="email"
                class="validate"
              />
            </div>
          </div>
          <div class="row">
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">mode_edit</i>
                <textarea
                  placeholder="Your message"
                  id="icon_prefix2"
                  class="materialize-textarea"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;