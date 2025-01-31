import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Login extends Component {
  state = {};

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    const url = `https://lineupapp.firebaseapp.com/api/store/${id}`

    const body = {
      email: this.state.email,
      password:this.state.password,
    }

    axios
      .post(url,body)
      .then((res)=>{
          console.log(res)
      .catch((err)=>{
          console.log(err)
      })
    })
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={this.handleInputChange}
            placeholder="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            onChange={this.handleInputChange}
            placeholder="password"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default Login;
