import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Criado por Augusto Machado(JS)</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} JS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/AugustoMachado01"
                title=" link do github de Augusto Machado"
                style={{ color: "white" }}
                target="_blank"
                rel="author noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/augusto-machado-5294572a3/"
                title=" link do linkedin de Augusto Machado"
                style={{ color: "white" }}
                target="_blank"
                rel="author noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: "white" }}
                target="_blank"
                href="https://www.instagram.com/augusto_machado2020?igsh=YzljYTk1ODg3Zg=="
                title=" link do instagram de Augusto Machado"
                rel="author noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                style={{ color: "white" }}
                target="_blank"
                href="https://wa.me/+244942643102"
                title=" link do whatsapp de Augusto Machado"
                rel="author noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
