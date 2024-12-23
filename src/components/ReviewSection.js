import React from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function ReviewSection({ reviews, addReview }) {
  const [reviewText, setReviewText] = React.useState("");

  const handleSubmit = () => {
    addReview(reviewText);
    setReviewText("");
  };

  return (
    <Container>
      <h3>Reviews</h3>
      <Form>
        <FormGroup>
          <Label for="review">Add a Review</Label>
          <Input
            type="textarea"
            name="review"
            id="review"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </FormGroup>
        <Button color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <ListGroup className="mt-3">
        {reviews.map((review, index) => (
          <ListGroupItem key={index}>{review}</ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
}

export default ReviewSection;
