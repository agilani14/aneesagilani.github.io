import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../components/img/color-sharp.png";



  export const Skills = () => {
    const [resumeFile, setResumeFile] = useState(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setResumeFile(file);
    };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Resume
              </h2>
              <p> Listed below is my resume which will tell you a little bit more about me! </p>
              <a href="https://www.dropbox.com/scl/fi/wfyegqls3hlpbyzhst3hu/_Resume-1.pdf?rlkey=hfqi4osmfbwcyo9aswt6qmyr7&raw=1" target="_blank" rel="noopener noreferrer">
                  View Resume
              </a>
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  )
}