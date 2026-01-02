import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    console.log("Form Data:", formData); // for testing

    setSubmitted(true);

    // clear form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <Container>
        <h2 className="text-center mb-4" style={{ color: "#12F7FF" }}>
          Contact Me
        </h2>

        <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
          {submitted && (
            <Alert variant="success">
              Message sent successfully!
            </Alert>
          )}

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="text-center">
            <Button
              type="submit"
              style={{
                background: "#12F7FF",
                border: "none",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Send Message
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
}
