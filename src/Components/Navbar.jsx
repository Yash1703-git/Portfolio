import { Navbar, Nav, Container, Modal, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import { useState } from "react";
import "../index.css";

export default function AppNavbar() {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <Navbar fixed="top" variant="dark" expand="lg" style={{background: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)"}}>
        <Container>
          <Navbar.Brand href="#" style={{fontWeight:"bolder", fontSize:"1.5rem"}}>
            <span style={{color:"#12F7FF"}}>Yash</span> <span className="">Kumbhar</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto gap-3 align-items-center fw-bold">
              {["home", "about", "tools", "skills", "projects", "contact"].map(section => (
                <Link
                  key={section}
                  to={section}
                  smooth
                  duration={500}
                  offset={-70}
                  className="nav-link custom-nav-link"
                >
                  {section.toUpperCase()}
                </Link>
              ))}

              {/* Resume Button */}
              <span
                className="nav-link btn fw-bold text-black"
                style={{background:"#12F7FF"}}
                onClick={() => setShowResume(true)}
              >
                RESUME
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Resume Modal */}
      <Modal
        show={showResume}
        onHide={() => setShowResume(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton >
          <Modal.Title>My Resume</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ height: "75vh" }}>
          {/* Replace resume.pdf later */}
          <iframe
            src="/public/Yash Kumbhar Resume copy.pdf"
            title="Resume"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            href="/resume.pdf"
            download
          >
            Download Resume
          </Button>
          <Button variant="secondary" onClick={() => setShowResume(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
