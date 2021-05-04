import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormGroup from "react-bootstrap/FormGroup";

import classes from "./ContactForm.module.scss";
import axios from "axios";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: {
          value: "",
          validation: {
            length: 5,
            required: true,
          },
          valid: false,
          dirty: false,
        },
        subject: {
          value: "",
          validation: {
            length: 10,
            required: true,
          },
          valid: false,
          dirty: false,
        },
        email: {
          value: "",
          validation: {
            type: "email",
            required: true,
          },
          valid: false,
          dirty: false,
        },

        message: {
          value: "",
          validation: {
            length: 10,
            required: true,
          },
          valid: false,
          dirty: false,
        },
        valid: false,
      },
      formSubmitted: false,
    };
  }

  handleChange = (event, name) => {
    this.setState((state) => {
      const newState = { ...state };
      const value = event.target.value;

      let valid = true;

      for (const [key, val] of Object.entries(newState.form[name].validation)) {
        if (key === "type") {
          if (val === "number") {
            if (isNaN(value) && value !== "") {
              valid = false;
            }
          }

          if (val === "email") {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
              valid = false;
            }
          }
        }

        if (key === "length") {
          if (value.toString().length < val) {
            valid = false;
          }
        }

        if (key === "required") {
          if (val === true && value === "") {
            valid = false;
          }
        }
      }

      newState.form[name].value = value;
      newState.form[name].valid = valid;
      newState.form[name].dirty = true;

      newState.form.valid = valid;

      return newState;
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.form.valid) {
      axios({
        method: "post",
        url: "http://api.itliquid.com/api/email",
        data: {
          subject: this.state.form.subject.value,
          name: this.state.form.name.value,
          email: this.state.form.email.value,
          message: this.state.form.message.value,
        },
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.data)
        .then((data) => {
          if (data["success"] === 1) {
            this.setState({ formSubmitted: true });
          }
        });
    }
  };

  render() {
    let formControlClasses = ["form-control", classes.formControl];
    return (
      <div className={classes.contactForm}>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <Row>
            <Col>
              <FormGroup>
                <input
                  type="text"
                  className={[
                    ...formControlClasses,
                    !this.state.form["subject"].valid &&
                    this.state.form["subject"].dirty
                      ? "is-invalid"
                      : "",
                  ].join(" ")}
                  placeholder="Subject *"
                  name="subject"
                  value={this.state.form.subject.value}
                  onChange={(event) => this.handleChange(event, "subject")}
                />
                <div className="invalid-feedback">
                  Subject must be atleast 10 charecters long.
                </div>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <input
                  type="text"
                  className={[
                    ...formControlClasses,
                    !this.state.form["name"].valid &&
                    this.state.form["name"].dirty
                      ? "is-invalid"
                      : "",
                  ].join(" ")}
                  placeholder="Your Name *"
                  name="name"
                  value={this.state.form.name.value}
                  onChange={(event) => this.handleChange(event, "name")}
                />
                <div className="invalid-feedback">
                  Name must be atleast 5 charecters long.
                </div>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <input
                  type="email"
                  className={[
                    ...formControlClasses,
                    !this.state.form["email"].valid &&
                    this.state.form["email"].dirty
                      ? "is-invalid"
                      : "",
                  ].join(" ")}
                  placeholder="Email *"
                  name="email"
                  value={this.state.form.email.value}
                  onChange={(event) => this.handleChange(event, "email")}
                />
                <div className="invalid-feedback">Email must be valid.</div>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <textarea
                  className={[
                    ...formControlClasses,
                    !this.state.form["message"].valid &&
                    this.state.form["message"].dirty
                      ? "is-invalid"
                      : "",
                  ].join(" ")}
                  rows="3"
                  placeholder="Message *"
                  name="message"
                  value={this.state.form.message.value}
                  onChange={(event) => this.handleChange(event, "message")}
                />
                <div className="invalid-feedback">
                  Message must be atleast 10 charecters long.
                </div>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={classes.actionBtnContainer}>
                <button
                  className={["btn", "btn-dark", classes.actionBtn].join(" ")}
                  type="submit"
                >
                  Send
                </button>
              </div>
            </Col>
          </Row>
          {this.state.formSubmitted ? (
            <Row>
              <Col>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "green",
                  }}
                >
                  Form submitted successfully...
                </div>
              </Col>
            </Row>
          ) : null}
        </form>
      </div>
    );
  }
}

export default ContactForm;
