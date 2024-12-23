import React from 'react';
import { Container, Table } from 'reactstrap';

const sampleOrders = [
  { id: 'ORD123', status: 'Delivered', date: '2024-12-01', total: 50 },
  { id: 'ORD124', status: 'Shipped', date: '2024-12-15', total: 30 },
  { id: 'ORD125', status: 'Processing', date: '2024-12-20', total: 100 },
];

const OrderPage = () => {
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
          {sampleOrders.map((order, index) => (
            <tr key={order.id}>
              <th scope="row">{index + 1}</th>
              <td>{order.id}</td>
              <td>{order.status}</td>
              <td>{order.date}</td>
              <td>${order.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OrderPage;

