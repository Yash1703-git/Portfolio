import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import "../index.css"

export default function Home() {
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Web Developer",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let typingSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
   <section id="home" className="home-section vh-100 d-flex align-items-center ">
      <Container>
        <Row className="align-items-center ">

          {/* LEFT - IMAGE */}
         <Col md={6} className="text-white">
            <h1 className="fw-bold">
              Hi, I'm <span style={{color:"#12F7FF"}}>Yash Kumbhar</span>
            </h1>

            <h3 className="mt-2">
             And I am{" "}
              <span className="typing-text">
                {text}
                <span className="cursor">|</span>
              </span>
            </h3>

            <p className="mt-3 emblema-one-regular " style={{lineHeight:"1.6rem"}}>
              Full-Stack Developer (MERN) with hands-on experience in building scalable, responsive web applications.
              Strong understanding of frontend–backend integration, RESTful API services, and database-driven systems.
              Familiar with modern development workflows, version control, and containerization basics. A quick learner
              with strong problem-solving abilities
            </p>

            <div className="d-flex gap-4 w-75">
              <div>
                <h5>Email :</h5>
                <p>kumbharyash766@gmail.com</p>
              </div>
              <div>
                <h5>Mobile No :</h5>
                <p>8010733105</p>
              </div>
            </div>

            <Link to="contact" smooth duration={500}>
              <Button variant="primary" className="me-3">
                Hire Me
              </Button>
            </Link>

            <Button
              className=" text-white btn-primary "
              // variant="outline-dark"
              href="/resume.pdf"
              download
            >
              Download Resume
            </Button>
          </Col>

          {/* RIGHT - CONTENT */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <div className="image-wrapper">
              <div className="loader-ring"></div>
              <img
                src="/src/assets/hero-img.jpg"
                alt="Yash"
                className="profile-img"
              />
            </div>
          </Col>


        </Row>
      </Container>
    </section>
  );
}
