import React, { useContext } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { AppContext } from '../context/AppContext';

const AccountPage = () => {
  const { user, setUser } = useContext(AppContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = {
      name: e.target.name.value,
      email: e.target.email.value,
    };
    setUser(updatedUser);
    alert('Account details updated!');
  };

  return (
    <Container>
      <h2>Account Details</h2>
      <Form onSubmit={handleUpdate}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            id="name"
            defaultValue={user ? user.name : ''}
            placeholder="Enter your name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            defaultValue={user ? user.email : ''}
            placeholder="Enter your email"
            required
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Update Account
        </Button>
      </Form>
    </Container>
  );
};

export default AccountPage;

