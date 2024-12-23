import React from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

function UserAccount({ user, updateUser }) {
  return (
    <Container>
      <h3>My Account</h3>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={(e) => updateUser("name", e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={(e) => updateUser("email", e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Change your password"
          />
        </FormGroup>
        <Button color="primary">Save Changes</Button>
      </Form>
    </Container>
  );
}

export default UserAccount;
