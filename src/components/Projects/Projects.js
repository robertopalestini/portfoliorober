import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import imageOne  from '../../Assets/Bioluniel-Logo.png';
import imageAmazon  from '../../Assets/Portfolio/amazonclone.png';
import imageTwo  from '../../Assets/Portfolio/BeFit.jpg';
import imageThree  from '../../Assets/Portfolio/BurmaBikinis.jpg';
import imageFour  from '../../Assets/Portfolio/BunkerGrafico.jpg';
import imageFive  from '../../Assets/Portfolio/Situs.jpg';
import imageSix  from '../../Assets/Portfolio/ColiseoVerbal-Logo.jpg';
import imageSeven  from '../../Assets/Portfolio/Aikido-Logo.jpg';
import imageEight  from '../../Assets/Portfolio/PhNegativo-Logo.jpg';

// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import algo from "../../Assets/Projects/algo.png";
// import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a selection of few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageOne}
              //isBlog={true}
              title="BioLuniel ReactApp"
              description="Alternative Medicine Products"
              link="https://bioluniel-smoothscroll.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageAmazon}
              //isBlog={false}
              title="Amazon Clone ReactApp"
              description=""
              //link="https://github.com/beebus/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageTwo}
              //isBlog={false}
              title="BeFit Html5"
              description="a"
              //link="https://github.com/beebus/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageThree}
              //isBlog={false}
              title="BurmaBikinis E-commerce"
              description="a"
              //link="https://github.com/beebus/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageFour}
              //isBlog={false}
              title="BunkerGráfico Html5 Bootstrap"
              description="a"
              //link="https://github.com/beebus/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageFive}
              //isBlog={false}
              title="Situs Html5 Bootstrap"
              //description=""
              //link="https://github.com/beebus/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageSix}
              //isBlog={false}
              title="IsoLogo Illustrator"
              //description=""
              //link="https://github.com/beebus/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageSeven}
              //isBlog={false}
              title="IsoLogo Design"
              //description=""
              //link="https://github.com/beebus/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imageEight}
              //isBlog={false}
              title="IsoLogo + Typologo Design"
              //description=""
              //link="https://github.com/beebus/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
