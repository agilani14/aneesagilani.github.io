import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../components/img/header-img.JPG";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Front-End Engineer"];
  const [text, setText] = useState('');
  const [delta, setDelta] =  useState (300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)
    
    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> Welcome to my Portfolio</span>
            <h1> {"Hi, I'm Aneesa,"}<span className="wrap"> {text} </span> </h1>
            <p> Recent graduate of the General Assembly Software Engineering immersive course looking for a role in a front-end position, with a results-oriented and ambitious mindset, seamlessly integrating punctuality, resilience, and ambition within collaborative, team-oriented environments to create technological solutions. I love to be a helping hand to those around me and can't wait to expand on my knowledge in this field. Feel free to reach out to me on LinkedIn!</p>
            <button onClick={() => console.log('connect')}>Let's connect!<ArrowRightCircle size = {25} /> </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src = {headerImg} alt = "Header Img"className="rounded-circle img-small" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}