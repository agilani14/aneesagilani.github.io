import { Col, Container, Tab, Row, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../components/img/project-img1.png";
import projImg2 from "../components/img/project-img2.png";
import projImg3 from "../components/img/project-img3.png";
// import colorSharp2 from "../components/img/color-sharp2.png";


export const Projects = () => {

  const projects = [
    {
      title: "Trivia",
      description: "A short, but fun-filled trivia game created using HTML, CSS, and some JavaScript. This was one of the first projects built during the bootcamp",
      imgUrl: projImg1,
      link: "basictriviagame.netlify.app",
    },
    {
      title: "WineAboutIt",
      description: "An e-commerce website dedicated to wine lovers created by me, along with three other teammates. This was created using Tailwinds CSS, React/Redux, Axios, Node.js",
      imgUrl: projImg2,
      link: "https://wineaboutit.netlify.app/",
    },
    {
      title: "PetPals",
      description: "This website was created during the final week of the bootcamp in a group of 7 people. It is an adoption website where you can theoretically search/filter through for any cat/dog that you might want. Created using Django, Python, Postgresql, React, and CSS",
      imgUrl: projImg3,
      link: "https://sei-petpals.netlify.app/",
    }
  ]
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Below you'll find a variation of the projects I have created using different languages and frameworks</p>
            <Tab.Container id = "projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center"id="pills-tab">
              {/* <Nav.Item> */}
                {/* <Nav.Link eventKey = "first">Tab One</Nav.Link> */}
              {/* </Nav.Item> */}
              {/* <Nav.Item> */}
                {/* <Nav.Link eventKey="second">Tab Two</Nav.Link> */}
              {/* </Nav.Item> */}
              {/* <Nav.Item> */}
                {/* <Nav.Link eventKey="third"> */}
                  {/* Tab Three */}
                {/* </Nav.Link> */}
              {/* </Nav.Item> */}
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