import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import projectImage01 from "../../Assets/Projects/gofinance.jpeg";
import projectImage02 from "../../Assets/Projects/projectPreview04.png";
import projectImage03 from "../../Assets/Projects/near.png";
import projectImage07 from "../../Assets/Projects/projectPreview07.png";

const ProjectsList = [
  {
    title: "Gofinacne",
    imgPath: projectImage01,
    description:
      "GoFinance è Uma aplicação para quem quer ter o maior controle de seus gastos e quem sabe até economizar uma grana Conteúdo aprendido: hooks como (usefocuseffect, usecallback) context API Api bottom navigation bibliotecas de formulários e validação como lidar com side effects e autenticação com o Google e a Apple",
    isBlog: false,
    ghLink: "https://github.com/AugustoMachado01/GOFINANCE",
  },

  {
    title: "Nearby app",
    imgPath: projectImage03,
    description:
      "O projeto é um aplicativo mobile desenvolvido no evento NLW Pocket pela Rocketseat, é um aplicativo de clube de benefícios com cupons para utilizar em estabelecimentos próximos a você Esse projeto foi desenvolvido com as seguintes tecnologias:React Native, Expo, Typescript, Axios, NodeSQlite, Prisma, Zod, Express",
    isBlog: false,
    ghLink: "https://github.com/AugustoMachado01/nlw-near-by",
  },
  {
    title: "E Commerce",
    imgPath: projectImage07,
    description:
      "Aplicativo de comércio eletrônico do início ao fim foi um desafio emocionante e gratificante. Ao longo do processo, tive a oportunidade de aprender e aplicar várias tecnologias e conceitos essenciais para criar uma experiência de compra excepcional.",
    isBlog: false,
    ghLink: "https://github.com/AugustoMachado01/ecommerce",
  },

  {
    title: "A Pet",
    imgPath: projectImage02,
    description:
      "um projeto desenvolvido para ajudar pessoas a encontrar o seu amigo de quatro patas! Este site tem como objetivo facilitar o processo de adoção de animais de estimação, permitindo que os usuários encontrem cães e gatos disponíveis para adoção em sua cidade/estado ou que atendam às suas preferências em termos de idade, energia, independência e tamanho",
    isBlog: false,
    ghLink: "https://github.com/AugustoMachado01/GET_A_PET",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Trabalhos <strong className="purple">Recentes</strong>
        </h1>
        <p style={{ color: "white" }}>Veja um pouco do que eu seu fazer</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {ProjectsList.map((project) => (
            <Col key={project.title} md={4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
