import React, { useContext, useEffect } from 'react';
import { Container, Table } from 'reactstrap';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

// Sample orders data
const sampleOrders = [
  { id: 'ORD123', status: 'Delivered', date: '2024-12-01', total: 50 },
  { id: 'ORD124', status: 'Shipped', date: '2024-12-15', total: 30 },
  { id: 'ORD125', status: 'Processing', date: '2024-12-20', total: 100 },
];

const OrderPage = () => {
  const { user } = useContext(AppContext); // Retrieve user from context
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    if (!user) {
      // Redirect to login if no user is logged in
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <Container>
      <h2>My Orders</h2>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Order ID</th>
            <th>Status</th>
            <th>Date</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {user ? (
            // Display orders only if user is logged in
            sampleOrders.map((order, index) => (
              <tr key={order.id}>
                <th scope="row">{index + 1}</th>
                <td>{order.id}</td>
                <td>{order.status}</td>
                <td>{order.date}</td>
                <td>${order.total}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                You must be logged in to view your orders.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default OrderPage;


