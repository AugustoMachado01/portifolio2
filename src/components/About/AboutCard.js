import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, eu me chamo Augusto Machado, sou programador{" "}
            <i className="purple">front-end</i> e moro em Angola, Luanda.
            Especialista em React, React Native, Next.js, Node e Prisma.
          </p>
          <p style={{ textAlign: "justify" }}>
            Atualmente estou trabalhando em uma empresa chamada webtagger, além
            de participar de Iniciativas e Comunidades como a Rocketseat
          </p>
          <span
            className="purple"
            style={{
              display: "block",
              textAlign: "left",
            }}
          >
            A vida não é só código também gosto de
          </span>
          <ul style={{ marginTop: 8 }}>
            <li className="about-activity">
              <ImPointRight /> Jogar Ping-Pong
            </li>
            <li className="about-activity">
              <ImPointRight /> Tocar Trompet
            </li>
            <li className="about-activity">
              <ImPointRight /> Ir a academia
            </li>
            <li className="about-activity">
              <ImPointRight /> Relaxar com os amigos/família
            </li>
            <li className="about-activity">
              <ImPointRight /> Andar de Carro
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Your time is limited, don't waste it living someone else's life."
          </p>
          <footer className="blockquote-footer">Stevie Jobs </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
