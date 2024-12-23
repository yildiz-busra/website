import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const CheckoutPage = () => {
  const handleOrder = (e) => {
    e.preventDefault();
    alert('Your order has been placed successfully!');
  };

  return (
    <Container>
      <h2>Checkout</h2>
      <Form onSubmit={handleOrder}>
        <FormGroup>
          <Label for="address">Shipping Address</Label>
          <Input type="text" id="address" placeholder="Enter your address" required />
        </FormGroup>
        <FormGroup>
          <Label for="paymentMethod">Payment Method</Label>
          <Input type="select" id="paymentMethod" required>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </Input>
        </FormGroup>
        <Button color="primary" type="submit">
          Place Order
        </Button>
      </Form>
    </Container>
  );
};

export default CheckoutPage;
