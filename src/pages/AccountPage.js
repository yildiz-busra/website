import React, { useContext, useState, useEffect } from "react";
import { Container, Form, FormGroup, Label, Input, Button, Table } from "reactstrap";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

const AccountPage = () => {
  const { user, setUser } = useContext(AppContext);
  const [password, setPassword] = useState("");
  const [newAddressName, setNewAddressName] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newCardName, setNewCardName] = useState("");
  const [newCardNumber, setNewCardNumber] = useState("");
  const [newCCV, setNewCCV] = useState("");
  const [newExpDate, setNewExpDate] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [creditCards, setCreditCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      setAddresses(user.addresses || []);
      setCreditCards(user.creditCards || []);
    }
  }, [user, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      name: e.target.name.value,
      email: e.target.email.value,
      addresses: addresses,
      creditCards: creditCards,
    };
    setUser(updatedUser);
    alert("Account details updated!");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    alert("Password updated successfully!");
    setPassword("");
  };

  const handleAddAddress = () => {
    if (!newAddress || !newAddressName) {
      alert("Please enter a valid address and address name.");
      return;
    }
    const updatedAddresses = [...addresses, { name: newAddressName, address: newAddress }];
    setAddresses(updatedAddresses);
    const updatedUser = { ...user, addresses: updatedAddresses };
    setUser(updatedUser);
    alert("Address added successfully!");
    setNewAddressName("");
    setNewAddress("");
  };

  const handleAddCard = () => {
    if (!newCardName || !newCardNumber || !newCCV || !newExpDate) {
      alert("Please fill in all credit card details.");
      return;
    }
    const updatedCards = [
      ...creditCards,
      {
        name: newCardName,
        number: newCardNumber,
        ccv: newCCV,
        expDate: newExpDate,
      },
    ];
    setCreditCards(updatedCards);
    const updatedUser = { ...user, creditCards: updatedCards };
    setUser(updatedUser);
    alert("Credit card added successfully!");
    setNewCardName("");
    setNewCardNumber("");
    setNewCCV("");
    setNewExpDate("");
  };

  const handleRemoveAddress = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
    const updatedUser = { ...user, addresses: updatedAddresses };
    setUser(updatedUser);
    alert("Address removed successfully!");
  };

  const handleRemoveCard = (index) => {
    const updatedCards = creditCards.filter((_, i) => i !== index);
    setCreditCards(updatedCards);
    const updatedUser = { ...user, creditCards: updatedCards };
    setUser(updatedUser);
    alert("Credit card removed successfully!");
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
            defaultValue={user ? user.name : ""}
            placeholder="Enter your name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            defaultValue={user ? user.email : ""}
            placeholder="Enter your email"
            required
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Update Account
        </Button>
      </Form>

      <h3 className="mt-5">Change Password</h3>
      <Form onSubmit={handleChangePassword}>
        <FormGroup>
          <Label for="password">New Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <Button color="warning" type="submit">
          Change Password
        </Button>
      </Form>

      <h3 className="mt-5">Registered Addresses</h3>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Address Name</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((address, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{address.name}</td>
              <td>{address.address}</td>
              <td>
                <Button color="danger" onClick={() => handleRemoveAddress(index)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <FormGroup>
        <Label for="newAddressName">Address Name</Label>
        <Input
          type="text"
          id="newAddressName"
          placeholder="Enter address name (e.g. Home, Office)"
          value={newAddressName}
          onChange={(e) => setNewAddressName(e.target.value)}
        />
        <Label for="newAddress">Address</Label>
        <Input
          type="text"
          id="newAddress"
          placeholder="Enter your new address"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
        />
        <Button color="success" onClick={handleAddAddress}>
          Add Address
        </Button>
      </FormGroup>

      <h3 className="mt-5">Registered Credit Cards</h3>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Card Name</th>
            <th>Card Number</th>
            <th>CCV</th>
            <th>Expiration Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {creditCards.map((card, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{card.name}</td>
              <td>{card.number}</td>
              <td>{card.ccv}</td>
              <td>{card.expDate}</td>
              <td>
                <Button color="danger" onClick={() => handleRemoveCard(index)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <FormGroup>
        <Label for="newCardName">Card Name</Label>
        <Input
          type="text"
          id="newCardName"
          placeholder="Enter card name (e.g. Visa, MasterCard)"
          value={newCardName}
          onChange={(e) => setNewCardName(e.target.value)}
        />
        <Label for="newCardNumber">Card Number</Label>
        <Input
          type="text"
          id="newCardNumber"
          placeholder="Enter card number"
          value={newCardNumber}
          onChange={(e) => setNewCardNumber(e.target.value)}
        />
        <Label for="newCCV">CCV</Label>
        <Input
          type="text"
          id="newCCV"
          placeholder="Enter CCV"
          value={newCCV}
          onChange={(e) => setNewCCV(e.target.value)}
        />
        <Label for="newExpDate">Expiration Date</Label>
        <Input
          type="text"
          id="newExpDate"
          placeholder="MM/YY"
          value={newExpDate}
          onChange={(e) => setNewExpDate(e.target.value)}
        />
        <Button color="success" onClick={handleAddCard}>
          Add Credit Card
        </Button>
      </FormGroup>

      <LogoutButton />
    </Container>
  );
};

export default AccountPage;


