import React from "react";
import Checkout from "../components/Checkout";

const CheckoutPage = () => {
  const handleOrder = (orderDetails) => {
    console.log("Order Placed:", orderDetails);
    alert("Your order has been placed successfully!");
  };

  return (
    <div>
      <Checkout handleOrder={handleOrder} />
    </div>
  );
};

export default CheckoutPage;
