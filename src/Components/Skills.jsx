import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutSkills from "./Tech-Skills";
import ProfessionalSkills from "./Prof-skills";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ background: "#1e252b", padding: "80px 0" }}
    >
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 style={{ color: "#12F7FF", fontWeight: "bold" }}>
            My Skills
          </h2>
          <p className="text-light opacity-75">
            Technical expertise & professional strengths
          </p>
        </div>

        {/* Skills Content */}
        <Row className="gy-5 align-items-start">
          {/* Technical Skills */}
          <Col lg={6} md={12}>
            <AboutSkills />
          </Col>

          {/* Professional Skills */}
          <Col lg={6} md={12}>
            <ProfessionalSkills />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
