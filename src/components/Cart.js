import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Container, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity, setCart } = useContext(AppContext);

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <Container>
      <h3>Shopping Cart</h3>
      {cart.length > 0 ? (
        <>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => updateCartQuantity(item.id, e.target.value)}
                    />
                  </td>
                  <td>
                    <Button color="danger" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-between mt-4">
            <Button color="secondary" onClick={handleClearCart}>
              Clear Cart
            </Button>
            <Button color="success" tag={Link} to="/checkout">
              Checkout
            </Button>
          </div>
        </>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </Container>
  );
};

export default Cart;
