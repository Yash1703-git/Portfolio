import { Container, Row, Col, ProgressBar, Button } from "react-bootstrap";
import AboutSkills from "./Tech-Skills";

export default function About() {
  return (
    <section id="about" className="py-5" style={{background:"#292E33"}}>
      <Container data-aos="fade-right">
        <Row className="d-flex align-items-center">
          <Col md={6}>
            <img src="/assets/About-img.jpg" className="img-fluid rounded mt-5" />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <p className=" text-uppercase text-white">Let me Introduce My self</p>
            <h1 style={{color:"#12F7FF", fontWeight:"bold"}}>About Me</h1>
            <p className="fw-bold text-white">
             My coursework in computer science has equipped me with a solid foundation in web development technologies, 
             including HTML, CSS, JavaScript, and popular front-end and back-end frameworks like React and Node.js.
             I have practical experience through projects such as Food Ordering App like Swiggy and E-Commerce websites like Flipkart Clone, Furniture website
             and, where I designed and developed responsive and user-friendly websites. 
             What excites me most about web development is the ability to create seamless digital experiences and solve real-world problems.
            </p>
            <Button 
            href="https://www.linkedin.com/in/yash-kumbhar-89149436b/"
            >
              Read More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
