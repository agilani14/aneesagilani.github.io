import { Col, Container, Tab, Row, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../components/img/project-img1.png";
import projImg2 from "../components/img/project-img2.png";
import projImg3 from "../components/img/project-img3.png";
import colorSharp2 from "../components/img/color-sharp2.png";


export const Projects = () => {

  const projects = [
    {
      title: "Trivia",
      description: "A short, but fun-filled trivia game",
      imgUrl: projImg1,
    },
    {
      title: "WineAboutIt",
      description: "An e-commerce website dedicated to wine lovers ",
      imgUrl: projImg2
    },
    {
      title: "PetPals",
      description: "An adoption website",
      imgUrl: projImg3
    }
  ]
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem Ipsum Dorem</p>
            <Tab.Container id = "projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center"id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey = "first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  Tab Three
                </Nav.Link>
              </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                <Tab.Pane eventKey="thid">Loren Ipsum</Tab.Pane>
              </Tab.Content>
              </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src = {colorSharp2}> </img> */}
    </section>
  )
}