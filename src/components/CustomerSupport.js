import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

function CustomerSupport() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your query has been submitted. We will get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container>
      <Row className="my-5">
        <Col md="6" className="mb-4">
          <h3>Contact Us</h3>
          <p>
            If you have any questions or need help, feel free to reach out to us
            using the form below.
          </p>
          <Form onSubmit={handleFormSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                id="message"
                name="message"
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md="6" className="text-center">
          <h3>Live Chat</h3>
          <p>
            Need immediate assistance? Start a live chat with our support team.
          </p>
          <Button color="success" onClick={toggleModal}>
            Start Live Chat
          </Button>
        </Col>
      </Row>

      {/* Modal for Live Chat */}
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Live Chat</ModalHeader>
        <ModalBody>
          <p>Welcome to live chat! How can we assist you today?</p>
          {/* Add actual live chat widget or integration here */}
          <Input
            type="textarea"
            placeholder="Type your message..."
            className="mb-3"
          />
          <Button color="primary" block>
            Send
          </Button>
        </ModalBody>
      </Modal>
    </Container>
  );
}

export default CustomerSupport;
