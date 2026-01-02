import { Container, Row, Col } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaPhp,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
// import "./AboutSkills.css";

const skills = [
  { name: "HTML5 / CSS3", value: 95, icon: [<FaHtml5 />, <FaCss3Alt />] },
  { name: "JavaScript", value: 70, icon: [<FaJs />] },
  { name: "Bootstrap / Tailwind", value: 85, icon: [<FaBootstrap />] },
  { name: "MongoDB / MySQL", value: 60, icon: [<FaPhp />] },
  { name: "React", value: 50, icon: [<FaReact />] },
  { name: "Express / Node", value: 65, icon: [<FaNodeJs />] },
];

export default function AboutSkills() {
  return (
    <section className="tech-skill-section">
      <h2 className="section-title">Technical Skill's</h2>

      <Container>
        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col md={12} sm={12} key={index}>
              <div className="tech-card">
                <div className="tech-header">
                  <div className="tech-name">
                    {skill.name}
                    <span className="tech-icons">
                      {skill.icon.map((icn, i) => (
                        <span key={i}>{icn}</span>
                      ))}
                    </span>
                  </div>
                  <span className="tech-percent">{skill.value}%</span>
                </div>

                <div className="tech-bar">
                  <div
                    className="tech-bar-fill"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
