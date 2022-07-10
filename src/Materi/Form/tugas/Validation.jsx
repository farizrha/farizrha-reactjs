import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Form } from "react-bootstrap";
import styled from "styled-components";
import * as Validator from "validatorjs";

const ShowErrors = ({ errors }) => {
  return (
    <ul style={{ color: "red", marginLeft: "-10px" }}>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
};

const Input = ({ label, type, name, onChange }) => {
  return (
    <div>
      <label> {label} </label>
      <input
        type={type}
        name={name}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const TextArea = ({ label, name, onChange }) => {
  return (
    <div>
      <label> {label} </label>
      <textarea
        name={name}
        cols="25"
        rows="5"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const CardContainer = styled.div`
  max-width: 200px;
  margin: auto;
  margin-top: 150px;
  font-family: arial;
`;

export default class Validation extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    address: "",
    errors: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, password, address } = this.state;
    let data = { name, email, password, address };

    let rules = {
      name: "required",
      email: "required|email",
      password: "min:8|required",
      address: "required",
    };

    let validation = new Validator(data, rules);
    validation.passes();

    this.setState({
      errors: [
        ...validation.errors.get("name"),
        ...validation.errors.get("email"),
        ...validation.errors.get("password"),
        ...validation.errors.get("address"),
      ],
    });

    if(validation.errorCount === 0){
      alert(`
      name: ${this.state.name}
      email: ${this.state.email}
      password: ${this.state.password}
      address: ${this.state.address}
      `);
    }    
    
  };

  render() {
    return (
      <div>
        <CardContainer>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              {this.state.errors && <ShowErrors errors={this.state.errors} />}
              <Form onSubmit={this.handleSubmit}>  
                <h4>Registration Form</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Full Name</Form.Label>
                  <Input
                    type="name"
                    placeholder="Enter Full Name"
                    onChange={(value) => this.setState({ name: value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Input
                    type="email"
                    placeholder="Enter email"
                    onChange={(value) => this.setState({ email: value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Input
                    type="password"
                    placeholder="Enter Password"
                    onChange={(value) => this.setState({ password: value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Address</Form.Label>
                  <TextArea
                    type="text"
                    placeholder="Enter Address"
                    onChange={(value) => this.setState({ address: value })}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </CardContainer>
      </div>
    );
  }
}
