import React from "react";
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../components/img/project-img1.png";
import projImg2 from "../components/img/project-img2.png";
import projImg3 from "../components/img/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "Trivia",
      description: "A short, but fun-filled trivia game created using HTML, CSS, and some JavaScript. This trivia game allows you to answer questions where it marks your answer correct or not, while also scoring you. Built during the first few weeks of the bootcamp, this was one of the first solo projects I had created.",
      imgUrl: projImg1,
      link: "https://basictriviagame.netlify.app", // Updated link
    },
    {
      title: "WineAboutIt",
      description: "Created by me and a team of 3 other developers, we incorporated Tailwinds CSS, React/Redux, Axios, Node.js, MongoDB, and express into this website. This is an e-commerce website designed for wine lovers to shop around for their favorite wines featuring a carousel on the home page, and allowing users to create their own account, filter through the types of wine, filter alphabetically, or by price. It also allows users to add wines to their favorites cart, as well as add it to their shopping cart and checkout. Once orders have been placed, order history details are made available to the user. ",
      imgUrl: projImg2,
      link: "https://wineaboutit.netlify.app",
    },
    {
      title: "PetPals",
      description: "Created during the final week of the bootcamp in a group of 7 people, we created a social media adoption platform where you can theoretically search/filter through for any cat/dog that you might want to adopt. Created using Django, Python, Postgresql, React, and CSS, this website is designed to connect with other animal lovers where you can create an account, favorite the pet you want and add it to a favorites section, comment on different pictures of pets, as well as view your comment history and edit it, along with many other functionalities. ",
      imgUrl: projImg3,
      link: "https://sei-petpals.netlify.app",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Below you'll find a variation of the projects I have created using different languages and frameworks</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                {/* <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item> */}
                {/* Add more Nav.Item elements if needed */}
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <Col key={index} xs={12} sm={8} md={8} lg={4} className="mb-3">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ProjectCard {...project} />
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                {/* Add more Tab.Pane elements if needed */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src = {colorSharp2}> </img> */}
    </section>
  );
};
