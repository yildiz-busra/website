import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

const Checkout = ({ handleOrder }) => {
  const [shipping, setShipping] = useState("");
  const [payment, setPayment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!shipping || !payment) {
      alert("Please select shipping and payment options.");
      return;
    }
    handleOrder({ shipping, payment });
  };

  return (
    <Container>
      <h3>Checkout</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="shipping">Shipping Options</Label>
          <Input
            type="select"
            id="shipping"
            value={shipping}
            onChange={(e) => setShipping(e.target.value)}
          >
            <option value="">Select Shipping Method</option>
            <option value="standard">Standard Shipping</option>
            <option value="express">Express Shipping</option>
            <option value="pickup">In-store Pickup</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="payment">Payment Method</Label>
          <Input
            type="select"
            id="payment"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <option value="">Select Payment Method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </Input>
        </FormGroup>

        <Button color="success" type="submit">
          Confirm Order
        </Button>
      </Form>
    </Container>
  );
};

export default Checkout;
