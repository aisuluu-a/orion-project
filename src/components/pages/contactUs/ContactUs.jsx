import { Button, Form, Container } from "react-bootstrap";
import "./contactUs.scss";

function ContactUs() {
  return (
    <div className="contact-us">
      {/* <Container style={{ textAlign: "left", padding: "20px", height: "100%" }}> */}
      <Form>
        <Form.Group controlId="formName">
          {/* <Form.Label>Name</Form.Label> */}
          <Form.Control type="text" placeholder="Введите имя" />
        </Form.Group>

        <Form.Group controlId="formPhone">
          {/* <Form.Label>Phone</Form.Label> */}
          <Form.Control
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="Введите номер телефона"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="email" name="email" placeholder="Введите email" />
          {/* <Form.Text>We'll never share your email with anyone else</Form.Text> */}
        </Form.Group>

        <Form.Group controlId="formBasicText">
          {/* <Form.Label>Example textarea</Form.Label> */}
          <Form.Control as="textarea" rows="3" placeholder="Введите текст" />
        </Form.Group>

        {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}

        <Button variant="primary" type="submit">
          Отправить
        </Button>
      </Form>
      {/* </Container> */}
    </div>
  );
}

export default ContactUs;
