import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaCode,
  FaGithub,
  FaServer,
  FaCloud,
//   SiFirebase
} from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import "../index.css"

const tools = [
  {
    title: "VS-Code",
    desc:
      "Visual Studio Code is a powerful code editor optimized for building and debugging modern web and cloud applications.",
    icon: <FaCode />,
  },
  {
    title: "Git-hub",
    desc:
      "GitHub is an online software development platform used for storing, tracking, and collaborating on projects.",
    icon: <FaGithub />,
  },
  {
    title: "Postman Api",
    desc:
      "Postman is an API platform for building and using APIs. It simplifies the API lifecycle and collaboration.",
    icon: <FaServer />,
  },
  {
    title: "Netlify",
    desc:
      "Netlify CLI is used to configure and deploy websites directly from local development servers.",
    icon: <FaCloud />,
  },
  {
    title: "Vercel",
    desc:
      "Vercel is a cloud platform used to deploy and host modern frontend applications with fast performance, and seamless GitHub integration.",
    icon: <SiVercel />,
  },
  {
    title: "Google-Firebase",
    desc:
      "Firebase App Check helps protect backend resources from abuse and adds extra security for APIs.",
    icon: <SiFirebase />,
  },
];

export default function Tools() {
  return (
    <section id="tools" className="tools-section">
      <Container>
        <div className="tools-header text-center mb-5">
          <p className="subtitle">WHAT I WILL DO FOR YOU</p>
          <h2 className="title">Tool's I Used</h2>
        </div>

        <Row className=" g-5 justify-content-start">
          {tools.map((tool, idx) => (
            <Col lg={3} md={6} sm={12} key={idx}>
              <div className="tool-card">
                <div className="tool-icon">{tool.icon}</div>

                <h4>{tool.title}</h4>
                <p>{tool.desc}</p>

                <Button className="read-btn">Read More</Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
