import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody, Nav, NavItem, NavLink } from 'reactstrap';
import { AppContext } from '../context/AppContext';  // Import AppContext
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);  // Toggle between login and register
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { setUser } = useContext(AppContext);  // Access context to set the logged-in user
  const navigate = useNavigate();

  // Toggle between login and registration forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '', confirmPassword: '' });  // Clear form fields
  };

  // Handle input change for form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission (login or registration)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = storedUsers.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (user) {
        setUser(user);  // Set the logged-in user in context
        localStorage.setItem('user', JSON.stringify(user));  // Save the logged-in user in localStorage
        alert(`Login successful for email: ${formData.email}`);
        navigate('/account');  // Redirect to account page
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } else {
      // Register
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      if (existingUsers.find((user) => user.email === formData.email)) {
        alert('This email is already registered.');
        return;
      }

      // Add new user to the list and store it in localStorage
      const newUser = { email: formData.email, password: formData.password };
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));  // Save updated users in localStorage

      alert(`Registration successful for email: ${formData.email}`);
      setIsLogin(true);  // Switch to login form after successful registration
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="mt-5">
            <CardBody>
              <Nav tabs className="justify-content-center mb-4">
                <NavItem>
                  <NavLink
                    className={isLogin ? 'active' : ''}
                    onClick={toggleForm}
                  >
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={!isLogin ? 'active' : ''}
                    onClick={toggleForm}
                  >
                    Register
                  </NavLink>
                </NavItem>
              </Nav>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                {!isLogin && (
                  <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                )}
                <Button color="primary" block type="submit">
                  {isLogin ? 'Login' : 'Register'}
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;



