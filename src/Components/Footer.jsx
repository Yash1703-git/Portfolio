import { Container } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../index.css"

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container className="text-center">
        <p className="mb-3">© 2025 Yash. All Rights Reserved.</p>

        <div className="footer-icons">
          <a
            href="https://github.com/Yash1703-git"
            target="_blank"
            rel="noreferrer"
            className="neon-icon"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/yash-kumbhar-89149436b/"
            target="_blank"
            rel="noreferrer"
            className="neon-icon"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/yash___1703"
            target="_blank"
            rel="noreferrer"
            className="neon-icon"
          >
            <FaInstagram />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="neon-icon"
          >
            <FaFacebook />
          </a>
        </div>
      </Container>
    </footer>
  );
}
