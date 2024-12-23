import React from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

function Checkout({ handleOrder }) {
  return (
    <Container>
      <h3>Checkout</h3>
      <Form>
        <FormGroup>
          <Label for="address">Shipping Address</Label>
          <Input
            type="text"
            name="address"
            id="address"
            placeholder="Enter your shipping address"
          />
        </FormGroup>
        <FormGroup>
          <Label for="payment">Payment Method</Label>
          <Input type="select" name="payment" id="payment">
            <option>Credit Card</option>
            <option>PayPal</option>
            <option>Bank Transfer</option>
          </Input>
        </FormGroup>
        <Button color="primary" onClick={handleOrder}>
          Place Order
        </Button>
      </Form>
    </Container>
  );
}

export default Checkout;
