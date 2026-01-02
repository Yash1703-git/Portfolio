import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../index.css"

const projects = [
  { 
    name: "Flipkart Clone",
    title: "MERN Stack E-commerce App",
    cover: "/assets/project-1.png",
    github: "https://github.com/Yash1703-git/Flipkart-clone",
    live: "https://flipkart-clone-pi-neon.vercel.app/"
  },
  { 
    name: "Online Food Order",
    title: "MERN Stack Restaurant Management",
    cover: "/assets/project-2.jpg",
    github: "https://github.com/Yash1703-git/Resturent-Mangment-System",
    live: "https://resturent-mangment-system.vercel.app/"
  },
  { 
    name: "Furniture",
    title: "Furniture Website Frontend",
    cover: "/assets/project-3.jpg",
    github: "https://github.com/Yash1703-git/Furniture-website",
    live: "https://yash1703-git.github.io/Furniture-website/"
  },
  { 
    name: "Portfolio",
    title: "React Component Based",
    cover: "/assets/Project-4.jpg",
    github: "https://github.com/Yash1703-git/Portfolio",
    live: ""
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-5" style={{background:'#1E252B'}}>
      <Container>
        <div className="text-center mb-4" style={{color:"#12F7FF"}}>
          <p>What I Will do for you</p>
          <h3>Latest Project's</h3>
        </div>

        <Row className="g-4">
          {projects.map((project, idx) => (
            <Col lg={3} md={6} sm={12} key={idx}>
              <Card className="project-card h-100">
                <div className="project-img-wrapper">
                  <Card.Img src={project.cover} />
                </div>

                <Card.Body className="text-center d-flex flex-column">
                  <Card.Title className="project-title">
                    {project.name}
                  </Card.Title>

                  <Card.Text className="project-desc">
                    {project.title}
                  </Card.Text>

                  <div className="mt-auto d-flex justify-content-center gap-2">
                    <Button
                      size="sm"
                      variant="dark"
                      href={project.github}
                      target="_blank"
                    >
                      GitHub
                    </Button>

                    {project.live && (
                      <Button
                        size="sm"
                        variant="outline-dark"
                        href={project.live}
                        target="_blank"
                      >
                        Live
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
