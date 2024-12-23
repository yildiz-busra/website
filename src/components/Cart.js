import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Container, Table, Button } from 'reactstrap';

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity } = useContext(AppContext);

  return (
    <Container>
      <h3>Shopping Cart</h3>
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
                  onChange={(e) => updateCartQuantity(item.id, e.target.value)}
                />
              </td>
              <td>
                <Button color="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Cart;

