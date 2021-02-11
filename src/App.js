import React, {Component}from 'react';
import './App.css';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';

function App() {
  return (
    <Form className="App">
      <h1>
        <span className="font-weight-bold">My First</span> Form
      </h1> 
      <h2>Welcome</h2>
      <FormGroup className="Form">
        <Label>First name</Label>
        <Input type="first-name" placeholder="First name"/>
      </FormGroup>
      <FormGroup className="Form">
        <Label>Last Name</Label>
        <Input type="Last-name" placeholder="Last name"/>
      </FormGroup>
      <FormGroup className="Form">
        <Label>E-mail</Label>
        <Input type="E-mail" placeholder="E-mail"/>
      </FormGroup>
      <FormGroup className="Form">
        <Label>Password</Label>
        <Input type="Password" placeholder="Password"/>
      </FormGroup>
      <button className="butt">Log in</button>
      <button className="butt" onClick="reset">Reset</button>
    </Form>
  );
}

export default App;
