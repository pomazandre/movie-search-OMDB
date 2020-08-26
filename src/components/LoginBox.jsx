import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

export default function LoginBox() {
  return (
    <InputGroup>
      <FormControl
        placeholder="login"
        aria-label="login"
        aria-describedby="login"
      />
      <FormControl
        placeholder="pass"
        aria-label="pass"
        aria-describedby="pass"
      />
      <InputGroup.Append>
        <Button variant="outline-secondary">Login</Button>
        <Button variant="outline-secondary">Register</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
